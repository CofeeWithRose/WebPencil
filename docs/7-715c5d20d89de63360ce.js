(window.webpackJsonp=window.webpackJsonp||[]).push([[7,15,24],{35:function(e,r,t){e.exports={recordBtnActive:"recordBtnActive_a74d3"}},44:function(e,r,t){var a=t(45),o="object"==typeof self&&self&&self.Object===Object&&self,n=a||o||Function("return this")();e.exports=n},45:function(e,r,t){(function(r){var t="object"==typeof r&&r&&r.Object===Object&&r;e.exports=t}).call(this,t(46))},46:function(e,r){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},47:function(e,r){var t=Array.isArray;e.exports=t},48:function(e,r,t){var a=t(49),o=0;e.exports=function(e){var r=++o;return a(e)+r}},49:function(e,r,t){var a=t(50);e.exports=function(e){return null==e?"":a(e)}},5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"RecordData",(function(){return RecordData})),__webpack_require__.d(__webpack_exports__,"RecordInfo",(function(){return RecordInfo}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),antd__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__),_index_less__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35),_index_less__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__),_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(54),enterModule;function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],a=!0,o=!1,n=void 0;try{for(var _,c=e[Symbol.iterator]();!(a=(_=c.next()).done)&&(t.push(_.value),!r||t.length!==r);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw n}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RecordData=function(){function RecordData(){_classCallCheck(this,RecordData),this.add=void 0,this.remove=void 0,this.modify=void 0}return _createClass(RecordData,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordData}(),RecordInfo=function(){function RecordInfo(e,r){_classCallCheck(this,RecordInfo),this.type=e,this.data=r}return _createClass(RecordInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordInfo}(),getRevertRecor=function(e){var r=e.type,t=e.data;if("add"===r){var a=t,o=a.index,n=a.canvas;return new RecordInfo("remove",{index:o,canvas:n})}if("modify"===r){var _=t,c=_.index,i=_.from,d=_.to;return new RecordInfo("modify",{index:c,from:d,to:i})}var l=t,s=l.index,u=l.canvas;return new RecordInfo("add",{index:s,canvas:u})},handleOperate=function(e,r){var t=e.type,a=e.data;if(console.log("handleOperate: ",t),"add"!==t)if("modify"!==t)if("remove"!==t);else{var o=a.index;r.removeLayerByIndex(o,"history")}else{var n=a,_=n.index,c=(n.from,n.to),i=r.setLayerContent(_,c,"history");r.focusLayer(i)}else{var d=a,l=d.index,s=d.canvas,u=r.addLayerContent(l,s,"history");r.focusLayer(u)}},recordListReducer=function(e,r){var t=e.cursor,a=e.recorderList,o=r.type,n=r.payload,_=r.pCanvasController;switch(o){case"add":t++>a.length-1&&a.splice(Math.max(t,0)),n&&a.push(n);break;case"redo":if(++t<=a.length-1){var c=a[t];_&&handleOperate(c,_)}break;case"undo":if(t>-1){var i=a[t];_&&handleOperate(getRevertRecor(i),_)}t--}return{cursor:Math.max(Math.min(t,a.length-1),-1),recorderList:a}},_default=function(e){var r=e.pCanvasController,t=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(recordListReducer,{cursor:-1,recorderList:[]}),2),a=t[0],o=a.cursor,n=a.recorderList,_=t[1],c=o>=0,i=o<n.length-1;Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var e=function(e){var r=e.data,t=r.layerDetail.canvas,a=r.index;"history"!==e.creator&&_({type:"add",payload:new RecordInfo("add",{index:a,canvas:Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_3__.a)(t)})})},t=function(e){var r=e.data,t=r.layerDetail.canvas,a=r.preContent,o=r.index;"history"!==e.creator&&_({type:"add",payload:new RecordInfo("modify",{index:o,from:a,to:Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_3__.a)(t)})})},a=function(e){var r=e.data,t=r.layerDetail.canvas,a=r.index;"history"!==e.creator&&_({type:"add",payload:new RecordInfo("remove",{index:a,canvas:Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_3__.a)(t)})})};return r.on("addLayer",e),r.on("contentChange",t),r.on("removeLayer",a),function(){r.off("addLayer",e),r.off("contentChange",t),r.off("removeLayer",a)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:i&&_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.recordBtnActive||"",onClick:function(){_({type:"redo",pCanvasController:r})}},"redo"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:c&&_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.recordBtnActive||"",onClick:function(){_({type:"undo",pCanvasController:r})}},"undo"))},reactHotLoader,leaveModule;__signature__(_default,"useReducer{[ {cursor, recorderList}, dispatchRecord ]({ cursor: -1, recorderList: []})}\nuseEffect{}"),__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(RecordData,"RecordData","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(RecordInfo,"RecordInfo","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(getRevertRecor,"getRevertRecor","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(handleOperate,"handleOperate","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(recordListReducer,"recordListReducer","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(_default,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},50:function(e,r,t){var a=t(51),o=t(52),n=t(47),_=t(53),c=a?a.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(n(r))return o(r,e)+"";if(_(r))return i?i.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t}},51:function(e,r,t){var a=t(44).Symbol;e.exports=a},52:function(e,r){e.exports=function(e,r){for(var t=-1,a=null==e?0:e.length,o=Array(a);++t<a;)o[t]=r(e[t],t,e);return o}},53:function(e,r){e.exports=function(){return!1}},54:function(e,r,t){"use strict";(function(e){t.d(r,"b",(function(){return i})),t.d(r,"a",(function(){return d}));var a,o=t(48),n=t.n(o);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var _,c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0,a=document.createElement("canvas");a.width=e,a.height=r,a.setAttribute("uuid",n()("canvasId-"));var o=a.getContext("2d");return o&&t&&(o.fillStyle=t.toRGBAString(),o.fillRect(0,0,e,r)),a},d=function(e){var r=document.createElement("canvas");r.width=e.width,r.height=e.height;var t=r.getContext("2d");return null==t||t.clearRect(0,0,r.width,r.height),null==t||t.drawImage(e,0,0,e.width,e.height),r};(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(i,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),_.register(d,"copyCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,t(3)(e))}}]);