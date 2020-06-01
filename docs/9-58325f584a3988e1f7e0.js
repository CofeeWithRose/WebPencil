(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10,16,23,24],{24:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"RecordData",(function(){return RecordData})),__webpack_require__.d(__webpack_exports__,"RecordInfo",(function(){return RecordInfo})),__webpack_require__.d(__webpack_exports__,"recordListReducer",(function(){return recordListReducer}));var _workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44),enterModule;function asyncGeneratorStep(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,n,a,i,c,"next",e)}function c(e){asyncGeneratorStep(o,n,a,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RecordData=function(){function RecordData(){_classCallCheck(this,RecordData),this.add=void 0,this.remove=void 0,this.modify=void 0}return _createClass(RecordData,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordData}(),RecordInfo=function(){function RecordInfo(e,t){_classCallCheck(this,RecordInfo),this.type=e,this.data=t}return _createClass(RecordInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordInfo}(),getRevertRecor=function(e){var t=e.type,r=e.data;if("add"===t){var n=r,a=n.index,o=n.canvasPath;return new RecordInfo("remove",{index:a,canvasPath:o})}if("modify"===t){var i=r,c=i.index,u=i.fromCanvasPath,s=i.toCanvasPath;return new RecordInfo("modify",{index:c,fromCanvasPath:s,toCanvasPath:u})}var d=r,l=d.index,f=d.canvasPath;return new RecordInfo("add",{index:l,canvasPath:f})},handleOperate=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,c,u,s,d,l,f,p,v,h,m,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.type,a=t.data,console.log("handleOperate: ",n),"add"!==n){e.next=13;break}return i=(o=a).index,c=o.canvasPath,e.next=6,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.getFile(c);case 6:return u=e.sent,e.next=9,Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__.c)(u);case 9:return s=e.sent,d=r.addLayerContent(i,s,"history"),r.focusLayer(d),e.abrupt("return");case 13:if("modify"!==n){e.next=24;break}return f=(l=a).index,l.fromCanvasPath,p=l.toCanvasPath,e.next=17,_workStorage_file_system__WEBPACK_IMPORTED_MODULE_0__.a.getFile(p);case 17:return v=e.sent,e.next=20,Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_1__.c)(v);case 20:return h=e.sent,m=r.setLayerContent(f,h,"history"),r.focusLayer(m),e.abrupt("return");case 24:if("remove"!==n){e.next=28;break}return _=a.index,r.removeLayerByIndex(_,"history"),e.abrupt("return");case 28:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),MAX_ROCORD_NUMBER=100,recordListReducer=function(e,t){var r=e.cursor,n=e.recorderList,a=t.type,o=t.payload,i=t.pCanvasController;switch(a){case"add":r<n.length-1&&n.splice(Math.max(r,0)),MAX_ROCORD_NUMBER<=n.length&&n.splice(0,n.length-MAX_ROCORD_NUMBER+1),r++,o&&n.push(o);break;case"redo":if(++r<=n.length-1){var c=n[r];i&&handleOperate(c,i)}break;case"undo":if(r>-1){var u=n[r];i&&handleOperate(getRevertRecor(u),i)}r--}return{cursor:Math.max(Math.min(r,n.length-1),-1),recorderList:n}},reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(RecordData,"RecordData","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(RecordInfo,"RecordInfo","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(getRevertRecor,"getRevertRecor","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(handleOperate,"handleOperate","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(MAX_ROCORD_NUMBER,"MAX_ROCORD_NUMBER","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts"),reactHotLoader.register(recordListReducer,"recordListReducer","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/reducer.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},35:function(e,t,r){e.exports={recordBtnActive:"recordBtnActive_a74d3"}},38:function(e,t,r){e.exports={asideTool:"asideTool_faaa6"}},44:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return l}));var n,a=r(47),o=r.n(a);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n=document.createElement("canvas");n.width=e,n.height=t,n.setAttribute("uuid",o()("canvasId-"));var a=n.getContext("2d");return a&&r&&(a.fillStyle=r.toRGBAString(),a.fillRect(0,0,e,t)),n},s=function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return null==r||r.clearRect(0,0,t.width,t.height),null==r||r.drawImage(e,0,0,e.width,e.height),t},d=function(e){return new Promise((function(t){var r=new Image;r.onload=function(){r.onload=null,t(s(r))},r.src=URL.createObjectURL(e)}))},l=function(e){return new Promise((function(t){e.toBlob(t)}))};(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(s,"copyCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(d,"createCanvasByFile","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(l,"toBlob","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(3)(e))},45:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var n,a=r(70);function o(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function c(e){o(i,n,a,c,u,"next",e)}function u(e){o(i,n,a,c,u,"throw",e)}c(void 0)}))}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,s,d,l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,o,s,d,l,f,p,v,h,m;return t=e,r=null,n=[{key:"init",value:(m=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new a.a("WebPencilVitureFile");case 2:return u=e.sent,e.next=5,u.version(1).stores({files:"++id, path, name, file"});case 5:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"save",value:(h=i(regeneratorRuntime.mark((function e(t){var r,n,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,n=t.data,e.abrupt("return",new Promise((function(e){var t={name:"saveFile",params:[{path:r,data:n}],callback:e};a.sheduleOperate(t)})));case 2:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})},{key:"get",value:(v=i(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n={name:"getFile",params:[t],callback:e};r.sheduleOperate(n)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return v.apply(this,arguments)})},{key:"getNames",value:(p=i(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n={name:"getFileNames",params:[t],callback:e};r.sheduleOperate(n)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return p.apply(this,arguments)})},{key:"sheduleOperate",value:(f=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.operates.push(t),this.isOperating){e.next=4;break}return e.next=4,this.startOperate();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"startOperate",value:(l=i(regeneratorRuntime.mark((function e(){var t,r,n,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.operates.shift(),this.isOperating=!0;case 2:if(!t){e.next=15;break}return n=(r=t).name,a=r.params,o=r.callback,e.next=6,this[n].apply(this,a);case 6:return i=e.sent,e.next=9,o(i);case 9:if(t=this.operates.shift()){e.next=13;break}return this.isOperating=!1,e.abrupt("break",15);case 13:e.next=2;break;case 15:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"saveFile",value:(d=i(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,c,s,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,n=t.data,t.type,a=this.analyzePath(r),o=a.pathName,i=a.name,e.next=4,u.files.where({path:o,name:i}).toArray();case 4:if(c=e.sent,!(s=c&&c[0]&&c[0])){e.next=12;break}return d=s.id,e.next=10,u.files.put({id:d,path:o,name:i,file:new File([n],i)});case 10:e.next=14;break;case 12:return e.next=14,u.files.add({path:o,name:i,file:new File([n],i)});case 14:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"analyzePath",value:function(e){var t=e.lastIndexOf("/"),r=e.substring(0,t);return{name:e.substr(t+1),pathName:r}}},{key:"getFile",value:(s=i(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.analyzePath(t),n=r.name,a=r.pathName,e.next=3,u.files.where({path:a,name:n}).toArray();case 3:return o=e.sent,e.abrupt("return",o&&o[0]&&o[0].file);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"getFileNames",value:(o=i(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.files.where({path:t}).toArray();case 2:return r=e.sent,e.abrupt("return",r.map((function(e){return e.name})));case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}],r&&c(t.prototype,r),n&&c(t,n),e}();l.operates=[],l.isOperating=!1,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(u,"db","/Users/muyin/Documents/code/WebPencil/src/workStorage/file-system/index.ts"),s.register(l,"FileApi","/Users/muyin/Documents/code/WebPencil/src/workStorage/file-system/index.ts")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},5:function(e,t,r){"use strict";r.r(t),function(e){var n,a=r(47),o=r.n(a),i=r(0),c=r.n(i),u=r(1),s=r(35),d=r.n(s),l=r(44),f=r(24),p=r(45);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){h(o,n,a,i,c,"next",e)}function c(e){h(o,n,a,i,c,"throw",e)}i(void 0)}))}}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var _,y,b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(){var e=m(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="record_".concat(Date.now(),"_").concat(o()(),".png"),e.next=3,Object(l.d)(Object(l.a)(t));case 3:if(n=e.sent,a="record/".concat(r),!n){e.next=8;break}return e.next=8,p.a.save({type:"blob",data:n,path:a});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=m(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t);case 2:return r=e.sent,e.next=5,Object(l.c)(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){var t=e.pCanvasController,r=v(Object(i.useReducer)(f.recordListReducer,{cursor:-1,recorderList:[]}),2),n=r[0],a=n.cursor,o=n.recorderList,s=r[1],l=a>=0,p=a<o.length-1;Object(i.useEffect)((function(){var e=function(){var e=m(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.data,n=r.layerDetail.canvas,a=r.index,"history"!==t.creator){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,g(n);case 5:o=e.sent,s({type:"add",payload:new f.RecordInfo("add",{index:a,canvasPath:o})});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=m(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.data,n=r.layerDetail.canvas,a=r.preContent,o=r.index,"history"!==t.creator){e.next=3;break}return e.abrupt("return");case 3:return e.t0=s,e.t1=f.RecordInfo,e.t2=o,e.next=8,g(a);case 8:return e.t3=e.sent,e.next=11,g(n);case 11:e.t4=e.sent,e.t5={index:e.t2,fromCanvasPath:e.t3,toCanvasPath:e.t4},e.t6=new e.t1("modify",e.t5),e.t7={type:"add",payload:e.t6},(0,e.t0)(e.t7);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=m(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.data,n=r.layerDetail.canvas,a=r.index,"history"!==t.creator){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,g(n);case 5:o=e.sent,s({type:"add",payload:new f.RecordInfo("remove",{index:a,canvasPath:o})});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t.on("addLayer",e),t.on("contentChange",r),t.on("removeLayer",n),function(){t.off("addLayer",e),t.off("contentChange",r),t.off("removeLayer",n)}}),[]);return c.a.createElement(i.Fragment,null,c.a.createElement("span",{className:p&&d.a.recordBtnActive||"",onPointerUp:p&&function(){s({type:"redo",pCanvasController:t})}||void 0},"redo"),c.a.createElement(u.Divider,null),c.a.createElement("span",{className:l&&d.a.recordBtnActive||"",onPointerUp:l&&function(){s({type:"undo",pCanvasController:t})}||void 0},"undo"))};b(R,"useReducer{[ {cursor, recorderList}, dispatchRecord ]({ cursor: -1, recorderList: []})}\nuseEffect{}"),t.default=R,(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(g,"saveRecordCanvas","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),_.register(w,"getRecordCanvas","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),_.register(R,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,r(3)(e))},9:function(e,t,r){"use strict";r.r(t),function(e){var n,a=r(0),o=r.n(a),i=r(1),c=r(38),u=r.n(c),s=r(5);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var d,l,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var t=e.pCanvasController;Object(a.useEffect)((function(){if(t){var e=function(){t.setBrushWidth(1),t.setOpacity(1)};return t.on("init",e),function(){return t.off("init",e)}}}),[]);return o.a.createElement("div",{className:u.a.asideTool},o.a.createElement(i.Divider,null),o.a.createElement(i.Slider,{defaultValue:1,vertical:!0,min:1,max:200,step:2,onChange:function(e){t&&t.setBrushWidth(e)}}),o.a.createElement(i.Divider,null),o.a.createElement(i.Slider,{vertical:!0,defaultValue:1,min:0,max:1,step:.01,onChange:function(e){t&&t.setOpacity(e)}}),o.a.createElement(i.Divider,null),o.a.createElement(s.default,{pCanvasController:t}),o.a.createElement(i.Divider,null))};f(p,"useEffect{}"),t.default=p,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(1,"defaultWidth","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/index.tsx"),d.register(1,"defaultOpacity","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/index.tsx"),d.register(p,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/index.tsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}.call(this,r(3)(e))}}]);