(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{345:function(e,t,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(93).default)("28f1127f",content,!0,{sourceMap:!1})},351:function(e,t){},352:function(e,t){},361:function(e,t){},362:function(e,t){},381:function(e,t){},383:function(e,t){},386:function(e,t){},387:function(e,t){},392:function(e,t){},399:function(e,t){},412:function(e,t,n){"use strict";n.r(t);var r,o=n(26),c=(n(37),n(58),n(7)),l=(n(19),n(42),n(43),n(346),n(218),n(21),n(14),n(9),n(322)),d=n.n(l),f=n(409),m=n.n(f),h=n(410),v=n.n(h);function k(e){return new Promise((function(t,n){var r=new FileReader;r.onload=Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.loadAsync(r.result);case 2:return n=e.sent,e.t0=JSON,e.next=6,n.files["manifest.json"].async("string");case 6:return e.t1=e.sent,o=e.t0.parse.call(e.t0,e.t1),c=o.userDataBackup.databaseName,e.next=11,n.files[c].async("uint8array");case 11:l=e.sent,t({manifest:o,db:l});case 13:case"end":return e.stop()}}),e)}))),r.onerror=n,r.readAsArrayBuffer(e)}))}function w(e){for(var t=new r.Database(e),n=t.prepare("SELECT TagId as value, Name as text FROM Tag"),o=[];n.step();)o.push(n.getAsObject());return t.close(),o}Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({locateFile:function(e){return"".concat(e)}});case 2:r=e.sent;case 3:case"end":return e.stop()}}),e)})))();var _=c.default.extend({data:function(){return{backupFile:null,parsedFile:null,checkedTags:[],working:!1,tags:[]}},computed:{isSupportedSchema:function(){return!this.parsedFile||8===this.parsedFile.manifest.userDataBackup.schemaVersion}},watch:{backupFile:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=8;break}return n.next=3,k(e);case 3:t.parsedFile=n.sent,t.tags=w(t.parsedFile.db),t.checkedTags=[],n.next=9;break;case 8:t.parsedFile=null;case 9:case"end":return n.stop()}}),n)})))()}},methods:{removeSelectedTags:function(){var e=this;this.working=!0,setTimeout((function(){!function(e){var t=new m.a;t.file("manifest.json",JSON.stringify(e.manifest));var n=e.manifest.userDataBackup.databaseName;t.file(n,e.db),t.generateAsync({type:"blob",compression:"DEFLATE"}).then((function(t){var link=(window.URL||window.webkitURL).createObjectURL(t),a=document.createElement("a");a.setAttribute("download","".concat(e.manifest.name,".jwlibrary")),a.setAttribute("href",link),document.body.appendChild(a),a.click(),document.body.removeChild(a)}))}(function(e,t){for(var n=t.manifest,o=t.db,c=new r.Database(o),l=[],f=e.join(", "),m=c.prepare("SELECT NoteId FROM TagMap WHERE TagId in (".concat(f,")"));m.step();)l.push(m.getAsObject().NoteId);if(l){var h=l.join(", ");c.exec("DELETE FROM TagMap WHERE NoteId in (".concat(h,")")),c.exec("DELETE FROM Note WHERE NoteId in (".concat(h,")"))}c.exec("DELETE FROM Tag WHERE TagId in (".concat(f,")"));var v=c.export();c.close();var k=d.a.createHash("sha256");k.update(v);var w=JSON.parse(JSON.stringify(n));return w.userDataBackup.hash=k.digest("hex"),{manifest:w,db:v}}(e.checkedTags,e.parsedFile)),e.working=!1}),1e3)}}}),x=n(70),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-form-file",{staticClass:"mt-3 mb-3",attrs:{state:Boolean(e.backupFile),placeholder:"Choose a .jwlibrary backup file or drop it here...","drop-placeholder":"Drop file here",accept:".jwlibrary"},model:{value:e.backupFile,callback:function(t){e.backupFile=t},expression:"backupFile"}}),e._v(" "),e.parsedFile&&e.isSupportedSchema?n("b-card",{attrs:{title:e.parsedFile.manifest.name,"sub-title":"Date created: "+e.parsedFile.manifest.creationDate}},[n("b-list-group",{staticClass:"mt-3 mb-3"},[n("b-list-group-item",[n("h5",[e._v("Remove Notes by Tag")]),e._v(" "),n("p",[e._v("Remove all notes associated with the chosen tags "),n("em",[e._v("including the tags themselves")])]),e._v(" "),n("b-form-checkbox-group",{staticClass:"b-checkbox-group d-flex flex-column",attrs:{options:e.tags},model:{value:e.checkedTags,callback:function(t){e.checkedTags=t},expression:"checkedTags"}})],1)],1),e._v(" "),n("b-overlay",{staticClass:"d-inline-block",attrs:{show:e.working,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[n("b-button",{attrs:{variant:"primary",disabled:!e.checkedTags.length},on:{click:function(t){e.$bvToast.show("complete-msg"),e.removeSelectedTags()}}},[e._v("\n          Continue\n        ")])],1),e._v(" "),n("b-toast",{attrs:{id:"complete-msg",title:"Note",variant:"info"}},[e._v("\n        The new backup file will automatically be downloaded\n        when complete\n    ")])],1):e._e(),e._v(" "),e.parsedFile&&!e.isSupportedSchema?n("b-card",[n("b-card-text",[e._v("\n      The backup file version is not supported. Please check back later for an update.\n    ")])],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},413:function(e,t,n){"use strict";n(345)},414:function(e,t,n){var r=n(92)(!1);r.push([e.i,"footer{position:fixed;bottom:0;background:#fff;z-index:9;padding:1rem .5rem;width:100%}body{margin-bottom:9rem}",""]),e.exports=r},498:function(e,t,n){"use strict";n.r(t);var r=n(7).default.extend({}),o=(n(413),n(70)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",[n("h1",{staticClass:"text-center mt-2 font-weight-light"},[e._v("JWLib Backup Editor")]),e._v(" "),n("p",{staticClass:"text-center"},[e._v("\n      A tool for removing notes in a .jwlibrary backup file by Tag.\n      Please read the "),n("a",{attrs:{href:"https://github.com/Notabela/JWLibBackupEditor#important-notes",target:"_blank"}},[e._v("disclaimer notes")]),e._v(" before proceeding\n    ")]),e._v(" "),n("Upload")],1),e._v(" "),n("footer",{staticClass:"text-center"},[n("p",[e._v("© "+e._s((new Date).getFullYear())+" Notabela. All rights reserved.")]),e._v(" "),e._m(0)])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"d-flex justify-content-center align-items-center",attrs:{href:"https://github.com/Notabela/JWLibBackupEditor",target:"_blank"}},[n("img",{staticClass:"mr-1",attrs:{src:"github.png",width:"20rem",alt:"github logo"}}),e._v("\n      Visit project on Github\n    ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Upload:n(412).default})}}]);