(window.webpackJsonp=window.webpackJsonp||[]).push([[10,16,24],{24:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"RecordData",(function(){return RecordData})),__webpack_require__.d(__webpack_exports__,"RecordInfo",(function(){return RecordInfo})),__webpack_require__.d(__webpack_exports__,"recordListReducer",(function(){return recordListReducer}));var _workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44),enterModule;function asyncGeneratorStep(e,r,t,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(n,a)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){asyncGeneratorStep(o,n,a,i,c,"next",e)}function c(e){asyncGeneratorStep(o,n,a,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RecordData=function(){function RecordData(){_classCallCheck(this,RecordData),this.add=void 0,this.remove=void 0,this.modify=void 0}return _createClass(RecordData,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordData}(),deleteRecordFile=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.type,n=r.data,e.t0=t,e.next="add"===e.t0?4:"modify"===e.t0?8:"remove"===e.t0?12:16;break;case 4:return n=n,e.next=7,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.remove(n.canvasPath,{isFile:!0});case 7:return e.abrupt("break",16);case 8:return o=(a=n).fromCanvasPath,i=a.toCanvasPath,e.next=11,Promise.all([_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.remove(o,{isFile:!0}),_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.remove(i,{isFile:!0})]);case 11:return e.abrupt("break",16);case 12:return c=n.canvasPath,e.next=15,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.remove(c,{isFile:!0});case 15:return e.abrupt("break",16);case 16:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),RecordInfo=function(){function RecordInfo(e,r){_classCallCheck(this,RecordInfo),this.type=e,this.data=r}return _createClass(RecordInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordInfo}(),getRevertRecor=function(e){var r=e.type,t=e.data;if("add"===r){var n=t,a=n.index,o=n.canvasPath;return new RecordInfo("remove",{index:a,canvasPath:o})}if("modify"===r){var i=t,c=i.index,s=i.fromCanvasPath,u=i.toCanvasPath;return new RecordInfo("modify",{index:c,fromCanvasPath:u,toCanvasPath:s})}var d=t,l=d.index,f=d.canvasPath;return new RecordInfo("add",{index:l,canvasPath:f})},handleOperate=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,s,u,d,l,f,p,v,_,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.type,a=r.data,console.log("handleOperate: ",n),"add"!==n){e.next=13;break}return i=(o=a).index,c=o.canvasPath,e.next=6,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.get(c);case 6:return s=e.sent,e.next=9,Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__.c)(s);case 9:return u=e.sent,d=t.addLayerContent(i,u,"history"),t.focusLayer(d),e.abrupt("return");case 13:if("modify"!==n){e.next=24;break}return f=(l=a).index,l.fromCanvasPath,p=l.toCanvasPath,e.next=17,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.get(p);case 17:return v=e.sent,e.next=20,Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__.c)(v);case 20:return _=e.sent,h=t.setLayerContent(f,_,"history"),t.focusLayer(h),e.abrupt("return");case 24:if("remove"!==n){e.next=28;break}return m=a.index,t.removeLayerByIndex(m,"history"),e.abrupt("return");case 28:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),MAX_ROCORD_NUMBER=100,recordListReducer=function(e,r){var t=e.cursor,n=e.recorderList,a=r.type,o=r.payload,i=r.pCanvasController;switch(a){case"add":if(t<n.length-1)n.splice(Math.max(t,0)).map((function(e){return deleteRecordFile(e)}));if(MAX_ROCORD_NUMBER<=n.length)n.splice(0,n.length-MAX_ROCORD_NUMBER+1).map((function(e){return deleteRecordFile(e)}));t++,o&&n.push(o);break;case"redo":if(++t<=n.length-1){var c=n[t];i&&handleOperate(c,i)}break;case"undo":if(t>-1){var s=n[t];i&&handleOperate(getRevertRecor(s),i)}t--}return{cursor:Math.max(Math.min(t,n.length-1),-1),recorderList:n}},reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(RecordData,"RecordData","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(deleteRecordFile,"deleteRecordFile","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(RecordInfo,"RecordInfo","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(getRevertRecor,"getRevertRecor","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(handleOperate,"handleOperate","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(MAX_ROCORD_NUMBER,"MAX_ROCORD_NUMBER","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(recordListReducer,"recordListReducer","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},35:function(e,r,t){e.exports={recordBtnActive:"recordBtnActive_a74d3"}},44:function(e,r,t){"use strict";(function(e){t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return u})),t.d(r,"c",(function(){return d})),t.d(r,"d",(function(){return l}));var n,a=t(47),o=t.n(a);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0,n=document.createElement("canvas");n.width=e,n.height=r,n.setAttribute("uuid",o()("canvasId-"));var a=n.getContext("2d");return a&&t&&(a.fillStyle=t.toRGBAString(),a.fillRect(0,0,e,r)),n},u=function(e){var r=document.createElement("canvas");r.width=e.width,r.height=e.height;var t=r.getContext("2d");return null==t||t.clearRect(0,0,r.width,r.height),null==t||t.drawImage(e,0,0,e.width,e.height),r},d=function(e){return new Promise((function(r){var t=new Image;t.onload=function(){t.onload=null,r(u(t))},t.src=URL.createObjectURL(e)}))},l=function(e){return new Promise((function(r){e.toBlob(r,"image/png",1)}))};(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(u,"copyCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(d,"createCanvasByFile","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(l,"toBlob","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,t(3)(e))},45:function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return l}));var n,a=t(70);function o(e,r,t,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(n,a)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var i=e.apply(r,t);function c(e){o(i,n,a,c,s,"next",e)}function s(e){o(i,n,a,c,s,"throw",e)}c(void 0)}))}}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,u,d,l=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t,n,o,u,d,l,f,p,v,_,h,m,y;return r=e,t=null,n=[{key:"init",value:(y=i(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new a.a("WebPencilVitureFile");case 2:return s=e.sent,e.next=5,s.version(1).stores({files:"++id, path,  name"});case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})},{key:"save",value:(m=i(regeneratorRuntime.mark((function e(r){var t,n,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.path,n=r.data,e.abrupt("return",new Promise((function(e){var r={name:"saveFile",params:[{path:t,data:n}],callback:e};a.sheduleOperate(r)})));case 2:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"get",value:(h=i(regeneratorRuntime.mark((function e(r){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n={name:"getFile",params:[r],callback:e};t.sheduleOperate(n)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})},{key:"remove",value:(_=i(regeneratorRuntime.mark((function e(r){var t,n=this,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{isFile:!1},e.abrupt("return",new Promise((function(e){var a={name:"removeFile",params:[r,t],callback:e};n.sheduleOperate(a)})));case 2:case"end":return e.stop()}}),e)}))),function(e){return _.apply(this,arguments)})},{key:"getNames",value:(v=i(regeneratorRuntime.mark((function e(r){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n={name:"getFileNames",params:[r],callback:e};t.sheduleOperate(n)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return v.apply(this,arguments)})},{key:"sheduleOperate",value:(p=i(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.operates.push(r),this.isOperating){e.next=4;break}return e.next=4,this.startOperate();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"startOperate",value:(f=i(regeneratorRuntime.mark((function e(){var r,t,n,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=this.operates.shift(),this.isOperating=!0;case 2:if(!r){e.next=15;break}return n=(t=r).name,a=t.params,o=t.callback,e.next=6,this[n].apply(this,a);case 6:return i=e.sent,e.next=9,o(i);case 9:if(r=this.operates.shift()){e.next=13;break}return this.isOperating=!1,e.abrupt("break",15);case 13:e.next=2;break;case 15:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"saveFile",value:(l=i(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,c,u,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.path,n=r.data,r.type,a=this.analyzePath(t),o=a.pathName,i=a.name,e.next=4,s.files.where({path:o,name:i}).toArray();case 4:if(c=e.sent,!(u=c&&c[0]&&c[0])){e.next=12;break}return d=u.id,e.next=10,s.files.put({id:d,path:o,name:i,file:new File([n],i)});case 10:e.next=14;break;case 12:return e.next=14,s.files.add({path:o,name:i,file:new File([n],i)});case 14:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"analyzePath",value:function(e){var r=e.lastIndexOf("/"),t=e.substring(0,r);return{name:e.substr(r+1),pathName:t}}},{key:"getFile",value:(d=i(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.analyzePath(r),n=t.name,a=t.pathName,e.next=3,s.files.where({path:a,name:n}).toArray();case 3:return o=e.sent,e.abrupt("return",o&&o[0]&&o[0].file);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"getFileNames",value:(u=i(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.files.where({path:r}).toArray();case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return e.name})));case 4:case"end":return e.stop()}}),e)}))),function(e){return u.apply(this,arguments)})},{key:"removeFile",value:(o=i(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,c,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>1&&void 0!==u[1]?u[1]:{isFile:!1},n=t.isFile,a=0,!n){e.next=9;break}return o=this.analyzePath(r),i=o.name,c=o.pathName,e.next=6,s.files.where({path:c,name:i}).delete();case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,s.files.where("path").startsWith(r).delete();case 11:a=e.sent;case 12:console.log("removeFile: ",a);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})}],t&&c(r.prototype,t),n&&c(r,n),e}();l.operates=[],l.isOperating=!1,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"db","/Users/muyin/Documents/code/WebPencil/src/workStorage/file-system/index.ts"),u.register(l,"FileApi","/Users/muyin/Documents/code/WebPencil/src/workStorage/file-system/index.ts")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,t(3)(e))},5:function(e,r,t){"use strict";t.r(r),function(e){var n,a=t(47),o=t.n(a),i=t(0),c=t.n(i),s=t(1),u=t(35),d=t.n(u),l=t(44),f=t(24),p=t(45);function v(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _(e,r,t,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(n,a)}function h(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){_(o,n,a,i,c,"next",e)}function c(e){_(o,n,a,i,c,"throw",e)}i(void 0)}))}}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var m,y,b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(){var e=h(regeneratorRuntime.mark((function e(r){var t,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="record_".concat(Date.now(),"_").concat(o()(),".png"),e.next=3,Object(l.d)(Object(l.a)(r));case 3:if(n=e.sent,a="record/".concat(t),!n){e.next=8;break}return e.next=8,p.a.save({type:"blob",data:n,path:a});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),w=function(e){var r=e.pCanvasController,t=v(Object(i.useReducer)(f.recordListReducer,{cursor:-1,recorderList:[]}),2),n=t[0],a=n.cursor,o=n.recorderList,u=t[1],l=a>=0,_=a<o.length-1;Object(i.useEffect)((function(){var e=function(){var e=h(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.data,n=t.layerDetail.canvas,a=t.index,"history"!==r.creator){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,g(n);case 5:o=e.sent,u({type:"add",payload:new f.RecordInfo("add",{index:a,canvasPath:o})});case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),t=function(){var e=h(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.data,n=t.layerDetail.canvas,a=t.preContent,o=t.index,"history"!==r.creator){e.next=3;break}return e.abrupt("return");case 3:return e.t0=u,e.t1=f.RecordInfo,e.t2=o,e.next=8,g(a);case 8:return e.t3=e.sent,e.next=11,g(n);case 11:e.t4=e.sent,e.t5={index:e.t2,fromCanvasPath:e.t3,toCanvasPath:e.t4},e.t6=new e.t1("modify",e.t5),e.t7={type:"add",payload:e.t6},(0,e.t0)(e.t7);case 16:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),n=function(){var e=h(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.data,n=t.layerDetail.canvas,a=t.index,"history"!==r.creator){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,g(n);case 5:o=e.sent,u({type:"add",payload:new f.RecordInfo("remove",{index:a,canvasPath:o})});case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return r.on("addLayer",e),r.on("contentChange",t),r.on("removeLayer",n),function(){r.off("addLayer",e),r.off("contentChange",t),r.off("removeLayer",n),p.a.remove("record")}}),[]);return c.a.createElement(i.Fragment,null,c.a.createElement("span",{className:_&&d.a.recordBtnActive||"",onPointerUp:_&&function(){u({type:"redo",pCanvasController:r})}||void 0},"redo"),c.a.createElement(s.Divider,null),c.a.createElement("span",{className:l&&d.a.recordBtnActive||"",onPointerUp:l&&function(){u({type:"undo",pCanvasController:r})}||void 0},"undo"))};b(w,"useReducer{[ {cursor, recorderList}, dispatchRecord ]({ cursor: -1, recorderList: []})}\nuseEffect{}"),r.default=w,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(g,"saveRecordCanvas","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),m.register(w,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,t(3)(e))}}]);