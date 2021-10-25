import crypto from 'crypto';
import JSZip from 'jszip';
import initSqlJS, { SqlJsStatic } from 'sql.js';
import { saveAs } from 'file-saver';

let SQL: SqlJsStatic;

(async function() {
  SQL = await initSqlJS({ locateFile: file => `${ file }`})
})();

export function parseJWLibFile(file: Blob) {
  return new Promise<JWLibFile>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const zip = await JSZip.loadAsync(reader.result!);
      const manifest = JSON.parse(await zip.files['manifest.json'].async('string'));

      const dbName = manifest.userDataBackup.databaseName;
      const db = await zip.files[dbName].async('uint8array');
      resolve({ manifest, db });
    }

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  })
}

export function downloadAsJWLibFile(file: JWLibFile) {
  const zip = new JSZip();
  zip.file('manifest.json', JSON.stringify(file.manifest));

  const dbName = file.manifest.userDataBackup.databaseName;
  zip.file(dbName, file.db);
  zip.generateAsync({type: 'blob',  compression: "DEFLATE"}).then((zipFile) => saveAs(zipFile, `${file.manifest.name}.jwlibrary`))
}

export function getTags(dbArray: Uint8Array) {
  const db = new SQL.Database(dbArray);
  const tagsQuery = db.prepare(`SELECT TagId as value, Name as text FROM Tag`);

  const tagObjects = []
  while (tagsQuery.step()) tagObjects.push(tagsQuery.getAsObject());

  db.close();
  return tagObjects;
}

export function removeSelectedTagsAndNotes(tags: Array<any>, { manifest, db }: JWLibFile) {
  const _db = new SQL.Database(db);

  const noteIds = [];
  const joinedTagIds = tags.join(', ');
  const notesQuery = _db.prepare(`SELECT NoteId FROM TagMap WHERE TagId in (${ joinedTagIds })`);
  while(notesQuery.step()) noteIds.push(notesQuery.getAsObject().NoteId);

  // remove all entries from TagMap where noteId in array
  if (noteIds) {
      const joinedNoteIds = noteIds.join(', ');
      _db.exec(`DELETE FROM TagMap WHERE NoteId in (${ joinedNoteIds })`);
      _db.exec(`DELETE FROM Note WHERE NoteId in (${ joinedNoteIds })`);
  }

  // remove the specified tags as well
  _db.exec(`DELETE FROM Tag WHERE TagId in (${ joinedTagIds })`)

  const newDBFile = _db.export();
  _db.close();

  // update hash
  const hash = crypto.createHash('sha256');
  hash.update(newDBFile);

  const newManifest = JSON.parse(JSON.stringify(manifest));
  newManifest.userDataBackup.hash = hash.digest('hex');

  return { manifest: newManifest, db: newDBFile };
}
