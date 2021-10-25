(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{350:function(e,t){},351:function(e,t){},360:function(e,t){},361:function(e,t){},380:function(e,t){},382:function(e,t){},385:function(e,t){},386:function(e,t){},391:function(e,t){},398:function(e,t){},412:function(e,t,n){"use strict";n.r(t);var r,c=n(26),o=(n(37),n(58),n(7)),l=(n(19),n(21),n(14),n(9),n(322)),d=n.n(l),f=n(408),m=n.n(f),h=n(409),v=n.n(h),k=n(411);function w(e){return new Promise((function(t,n){var r=new FileReader;r.onload=Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.loadAsync(r.result);case 2:return n=e.sent,e.t0=JSON,e.next=6,n.files["manifest.json"].async("string");case 6:return e.t1=e.sent,c=e.t0.parse.call(e.t0,e.t1),o=c.userDataBackup.databaseName,e.next=11,n.files[o].async("uint8array");case 11:l=e.sent,t({manifest:c,db:l});case 13:case"end":return e.stop()}}),e)}))),r.onerror=n,r.readAsArrayBuffer(e)}))}function T(e){for(var t=new r.Database(e),n=t.prepare("SELECT TagId as value, Name as text FROM Tag"),c=[];n.step();)c.push(n.getAsObject());return t.close(),c}Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({locateFile:function(e){return"".concat(e)}});case 2:r=e.sent;case 3:case"end":return e.stop()}}),e)})))();var x=o.default.extend({data:function(){return{backupFile:null,parsedFile:null,checkedTags:[],working:!1,tags:[]}},computed:{isSupportedSchema:function(){return!this.parsedFile||8===this.parsedFile.manifest.userDataBackup.schemaVersion}},watch:{backupFile:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=8;break}return n.next=3,w(e);case 3:t.parsedFile=n.sent,t.tags=T(t.parsedFile.db),t.checkedTags=[],n.next=9;break;case 8:t.parsedFile=null;case 9:case"end":return n.stop()}}),n)})))()}},methods:{removeSelectedTags:function(){var e=this;this.working=!0,setTimeout((function(){!function(e){var t=new m.a;t.file("manifest.json",JSON.stringify(e.manifest));var n=e.manifest.userDataBackup.databaseName;t.file(n,e.db),t.generateAsync({type:"blob",compression:"DEFLATE"}).then((function(t){Object(k.saveAs)(t,"".concat(e.manifest.name,".jwlibrary"))}))}(function(e,t){for(var n=t.manifest,c=t.db,o=new r.Database(c),l=[],f=e.join(", "),m=o.prepare("SELECT NoteId FROM TagMap WHERE TagId in (".concat(f,")"));m.step();)l.push(m.getAsObject().NoteId);if(l){var h=l.join(", ");o.exec("DELETE FROM TagMap WHERE NoteId in (".concat(h,")")),o.exec("DELETE FROM Note WHERE NoteId in (".concat(h,")"))}o.exec("DELETE FROM Tag WHERE TagId in (".concat(f,")"));var v=o.export();o.close();var k=d.a.createHash("sha256");k.update(v);var w=JSON.parse(JSON.stringify(n));return w.userDataBackup.hash=k.digest("hex"),{manifest:w,db:v}}(e.checkedTags,e.parsedFile)),e.working=!1}),1e3)}}}),F=n(70),component=Object(F.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-form-file",{staticClass:"mt-3 mb-3",attrs:{state:Boolean(e.backupFile),placeholder:"Choose a .jwlibrary backup file or drop it here...","drop-placeholder":"Drop file here",accept:".jwlibrary"},model:{value:e.backupFile,callback:function(t){e.backupFile=t},expression:"backupFile"}}),e._v(" "),e.parsedFile&&e.isSupportedSchema?n("b-card",{attrs:{title:e.parsedFile.manifest.name,"sub-title":"Date created: "+e.parsedFile.manifest.creationDate}},[n("b-list-group",{staticClass:"mt-3 mb-3"},[n("b-list-group-item",[n("h5",[e._v("Remove Notes by Tag")]),e._v(" "),n("p",[e._v("Remove all notes associated with the chosen tags "),n("em",[e._v("including the tags themselves")])]),e._v(" "),n("b-form-checkbox-group",{staticClass:"b-checkbox-group d-flex flex-column",attrs:{options:e.tags},model:{value:e.checkedTags,callback:function(t){e.checkedTags=t},expression:"checkedTags"}})],1)],1),e._v(" "),n("b-overlay",{staticClass:"d-inline-block",attrs:{show:e.working,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[n("b-button",{attrs:{variant:"primary",disabled:!e.checkedTags.length},on:{click:function(t){e.$bvToast.show("complete-msg"),e.removeSelectedTags()}}},[e._v("\n          Continue\n        ")])],1),e._v(" "),n("b-toast",{attrs:{id:"complete-msg",title:"Note",variant:"info"}},[e._v("\n        The new backup file will automatically be downloaded\n        when complete\n    ")])],1):e._e(),e._v(" "),e.parsedFile&&!e.isSupportedSchema?n("b-card",[n("b-card-text",[e._v("\n      The backup file version is not supported. Please check back later for an update.\n    ")])],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);