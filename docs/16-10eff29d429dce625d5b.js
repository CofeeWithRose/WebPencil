(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{24:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"RecordData",(function(){return RecordData})),__webpack_require__.d(__webpack_exports__,"RecordInfo",(function(){return RecordInfo})),__webpack_require__.d(__webpack_exports__,"recordListReducer",(function(){return recordListReducer}));var _workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44),enterModule;function asyncGeneratorStep(e,r,t,a,n,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(a,n)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(a,n){var o=e.apply(r,t);function i(e){asyncGeneratorStep(o,a,n,i,c,"next",e)}function c(e){asyncGeneratorStep(o,a,n,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RecordData=function(){function RecordData(){_classCallCheck(this,RecordData),this.add=void 0,this.remove=void 0,this.modify=void 0}return _createClass(RecordData,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordData}(),deleteRecordFile=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(r){var t,a,n,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.type,a=r.data,e.t0=t,e.next="add"===e.t0?4:"modify"===e.t0?8:"remove"===e.t0?12:16;break;case 4:return a=a,e.next=7,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.remove(a.canvasPath,{isFile:!0});case 7:return e.abrupt("break",16);case 8:return o=(n=a).fromCanvasPath,i=n.toCanvasPath,e.next=11,Promise.all([_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.remove(o,{isFile:!0}),_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.remove(i,{isFile:!0})]);case 11:return e.abrupt("break",16);case 12:return c=a.canvasPath,e.next=15,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.remove(c,{isFile:!0});case 15:return e.abrupt("break",16);case 16:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),RecordInfo=function(){function RecordInfo(e,r){_classCallCheck(this,RecordInfo),this.type=e,this.data=r}return _createClass(RecordInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordInfo}(),getRevertRecor=function(e){var r=e.type,t=e.data;if("add"===r){var a=t,n=a.index,o=a.canvasPath;return new RecordInfo("remove",{index:n,canvasPath:o})}if("modify"===r){var i=t,c=i.index,s=i.fromCanvasPath,u=i.toCanvasPath;return new RecordInfo("modify",{index:c,fromCanvasPath:u,toCanvasPath:s})}var l=t,d=l.index,f=l.canvasPath;return new RecordInfo("add",{index:d,canvasPath:f})},handleOperate=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(r,t){var a,n,o,i,c,s,u,l,d,f,p,_,v,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.type,n=r.data,console.log("handleOperate: ",a),"add"!==a){e.next=13;break}return i=(o=n).index,c=o.canvasPath,e.next=6,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.get(c);case 6:return s=e.sent,e.next=9,Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__.c)(s);case 9:return u=e.sent,l=t.addLayerContent(i,u,"history"),t.focusLayer(l),e.abrupt("return");case 13:if("modify"!==a){e.next=24;break}return f=(d=n).index,d.fromCanvasPath,p=d.toCanvasPath,e.next=17,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.get(p);case 17:return _=e.sent,e.next=20,Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__.c)(_);case 20:return v=e.sent,h=t.setLayerContent(f,v,"history"),t.focusLayer(h),e.abrupt("return");case 24:if("remove"!==a){e.next=28;break}return m=n.index,t.removeLayerByIndex(m,"history"),e.abrupt("return");case 28:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),MAX_ROCORD_NUMBER=100,recordListReducer=function(e,r){var t=e.cursor,a=e.recorderList,n=r.type,o=r.payload,i=r.pCanvasController;switch(n){case"add":if(t<a.length-1)a.splice(Math.max(t,0)).map((function(e){return deleteRecordFile(e)}));if(MAX_ROCORD_NUMBER<=a.length)a.splice(0,a.length-MAX_ROCORD_NUMBER+1).map((function(e){return deleteRecordFile(e)}));t++,o&&a.push(o);break;case"redo":if(++t<=a.length-1){var c=a[t];i&&handleOperate(c,i)}break;case"undo":if(t>-1){var s=a[t];i&&handleOperate(getRevertRecor(s),i)}t--}return{cursor:Math.max(Math.min(t,a.length-1),-1),recorderList:a}},reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(RecordData,"RecordData","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(deleteRecordFile,"deleteRecordFile","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(RecordInfo,"RecordInfo","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(getRevertRecor,"getRevertRecor","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(handleOperate,"handleOperate","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(MAX_ROCORD_NUMBER,"MAX_ROCORD_NUMBER","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(recordListReducer,"recordListReducer","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},44:function(e,r,t){"use strict";(function(e){t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return u})),t.d(r,"c",(function(){return l})),t.d(r,"d",(function(){return d}));var a,n=t(47),o=t.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0,a=document.createElement("canvas");a.width=e,a.height=r,a.setAttribute("uuid",o()("canvasId-"));var n=a.getContext("2d");return n&&t&&(n.fillStyle=t.toRGBAString(),n.fillRect(0,0,e,r)),a},u=function(e){var r=document.createElement("canvas");r.width=e.width,r.height=e.height;var t=r.getContext("2d");return null==t||t.clearRect(0,0,r.width,r.height),null==t||t.drawImage(e,0,0,e.width,e.height),r},l=function(e){return new Promise((function(r){var t=new Image;t.onload=function(){t.onload=null,r(u(t))},t.src=URL.createObjectURL(e)}))},d=function(e){return new Promise((function(r){e.toBlob(r,"image/png",1)}))};(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(u,"copyCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(l,"createCanvasByFile","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(d,"toBlob","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,t(3)(e))},45:function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return d}));var a,n=t(70);function o(e,r,t,a,n,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(a,n)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(a,n){var i=e.apply(r,t);function c(e){o(i,a,n,c,s,"next",e)}function s(e){o(i,a,n,c,s,"throw",e)}c(void 0)}))}}function c(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,u,l,d=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t,a,o,u,l,d,f,p,_,v,h,m,y;return r=e,t=null,a=[{key:"init",value:(y=i(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.a("WebPencilVitureFile");case 2:return s=e.sent,e.next=5,s.version(1).stores({files:"++id, path,  name"});case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})},{key:"save",value:(m=i(regeneratorRuntime.mark((function e(r){var t,a,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.path,a=r.data,e.abrupt("return",new Promise((function(e){var r={name:"saveFile",params:[{path:t,data:a}],callback:e};n.sheduleOperate(r)})));case 2:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"get",value:(h=i(regeneratorRuntime.mark((function e(r){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a={name:"getFile",params:[r],callback:e};t.sheduleOperate(a)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})},{key:"remove",value:(v=i(regeneratorRuntime.mark((function e(r){var t,a=this,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>1&&void 0!==n[1]?n[1]:{isFile:!1},e.abrupt("return",new Promise((function(e){var n={name:"removeFile",params:[r,t],callback:e};a.sheduleOperate(n)})));case 2:case"end":return e.stop()}}),e)}))),function(e){return v.apply(this,arguments)})},{key:"getNames",value:(_=i(regeneratorRuntime.mark((function e(r){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a={name:"getFileNames",params:[r],callback:e};t.sheduleOperate(a)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return _.apply(this,arguments)})},{key:"sheduleOperate",value:(p=i(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.operates.push(r),this.isOperating){e.next=4;break}return e.next=4,this.startOperate();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"startOperate",value:(f=i(regeneratorRuntime.mark((function e(){var r,t,a,n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=this.operates.shift(),this.isOperating=!0;case 2:if(!r){e.next=15;break}return a=(t=r).name,n=t.params,o=t.callback,e.next=6,this[a].apply(this,n);case 6:return i=e.sent,e.next=9,o(i);case 9:if(r=this.operates.shift()){e.next=13;break}return this.isOperating=!1,e.abrupt("break",15);case 13:e.next=2;break;case 15:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"saveFile",value:(d=i(regeneratorRuntime.mark((function e(r){var t,a,n,o,i,c,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.path,a=r.data,r.type,n=this.analyzePath(t),o=n.pathName,i=n.name,e.next=4,s.files.where({path:o,name:i}).toArray();case 4:if(c=e.sent,!(u=c&&c[0]&&c[0])){e.next=12;break}return l=u.id,e.next=10,s.files.put({id:l,path:o,name:i,file:new File([a],i)});case 10:e.next=14;break;case 12:return e.next=14,s.files.add({path:o,name:i,file:new File([a],i)});case 14:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"analyzePath",value:function(e){var r=e.lastIndexOf("/"),t=e.substring(0,r);return{name:e.substr(r+1),pathName:t}}},{key:"getFile",value:(l=i(regeneratorRuntime.mark((function e(r){var t,a,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.analyzePath(r),a=t.name,n=t.pathName,e.next=3,s.files.where({path:n,name:a}).toArray();case 3:return o=e.sent,e.abrupt("return",o&&o[0]&&o[0].file);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"getFileNames",value:(u=i(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.files.where({path:r}).toArray();case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return e.name})));case 4:case"end":return e.stop()}}),e)}))),function(e){return u.apply(this,arguments)})},{key:"removeFile",value:(o=i(regeneratorRuntime.mark((function e(r){var t,a,n,o,i,c,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>1&&void 0!==u[1]?u[1]:{isFile:!1},a=t.isFile,n=0,!a){e.next=9;break}return o=this.analyzePath(r),i=o.name,c=o.pathName,e.next=6,s.files.where({path:c,name:i}).delete();case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,s.files.where("path").startsWith(r).delete();case 11:n=e.sent;case 12:console.log("removeFile: ",n);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})}],t&&c(r.prototype,t),a&&c(r,a),e}();d.operates=[],d.isOperating=!1,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"db","/Users/muyin/Documents/code/WebPencil/src/workStorage/file-system/index.ts"),u.register(d,"FileApi","/Users/muyin/Documents/code/WebPencil/src/workStorage/file-system/index.ts")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,t(3)(e))}}]);