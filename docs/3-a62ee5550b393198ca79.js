(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7,15,23,24],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"RecordData",(function(){return RecordData})),__webpack_require__.d(__webpack_exports__,"RecordInfo",(function(){return RecordInfo}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),antd__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__),_index_less__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35),_index_less__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__),_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(54),enterModule;function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],a=!0,o=!1,n=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw n}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RecordData=function(){function RecordData(){_classCallCheck(this,RecordData),this.add=void 0,this.remove=void 0,this.modify=void 0}return _createClass(RecordData,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordData}(),RecordInfo=function(){function RecordInfo(e,t){_classCallCheck(this,RecordInfo),this.type=e,this.data=t}return _createClass(RecordInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordInfo}(),getRevertRecor=function(e){var t=e.type,r=e.data;if("add"===t){var a=r,o=a.index,n=a.canvas;return new RecordInfo("remove",{index:o,canvas:n})}if("modify"===t){var c=r,i=c.index,d=c.from,_=c.to;return new RecordInfo("modify",{index:i,from:_,to:d})}var l=r,s=l.index,u=l.canvas;return new RecordInfo("add",{index:s,canvas:u})},handleOperate=function(e,t){var r=e.type,a=e.data;if(console.log("handleOperate: ",r),"add"!==r)if("modify"!==r)if("remove"!==r);else{var o=a.index;t.removeLayerByIndex(o,"history")}else{var n=a,c=n.index,i=(n.from,n.to),d=t.setLayerContent(c,i,"history");t.focusLayer(d)}else{var _=a,l=_.index,s=_.canvas,u=t.addLayerContent(l,s,"history");t.focusLayer(u)}},recordListReducer=function(e,t){var r=e.cursor,a=e.recorderList,o=t.type,n=t.payload,c=t.pCanvasController;switch(o){case"add":r++>a.length-1&&a.splice(Math.max(r,0)),n&&a.push(n);break;case"redo":if(++r<=a.length-1){var i=a[r];c&&handleOperate(i,c)}break;case"undo":if(r>-1){var d=a[r];c&&handleOperate(getRevertRecor(d),c)}r--}return{cursor:Math.max(Math.min(r,a.length-1),-1),recorderList:a}},_default=function(e){var t=e.pCanvasController,r=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(recordListReducer,{cursor:-1,recorderList:[]}),2),a=r[0],o=a.cursor,n=a.recorderList,c=r[1],i=o>=0,d=o<n.length-1;Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var e=function(e){var t=e.data,r=t.layerDetail.canvas,a=t.index;"history"!==e.creator&&c({type:"add",payload:new RecordInfo("add",{index:a,canvas:Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_3__.a)(r)})})},r=function(e){var t=e.data,r=t.layerDetail.canvas,a=t.preContent,o=t.index;"history"!==e.creator&&c({type:"add",payload:new RecordInfo("modify",{index:o,from:a,to:Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_3__.a)(r)})})},a=function(e){var t=e.data,r=t.layerDetail.canvas,a=t.index;"history"!==e.creator&&c({type:"add",payload:new RecordInfo("remove",{index:a,canvas:Object(_workStorage_canvas_util__WEBPACK_IMPORTED_MODULE_3__.a)(r)})})};return t.on("addLayer",e),t.on("contentChange",r),t.on("removeLayer",a),function(){t.off("addLayer",e),t.off("contentChange",r),t.off("removeLayer",a)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:d&&_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.recordBtnActive||"",onClick:function(){c({type:"redo",pCanvasController:t})}},"redo"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:i&&_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.recordBtnActive||"",onClick:function(){c({type:"undo",pCanvasController:t})}},"undo"))},reactHotLoader,leaveModule;__signature__(_default,"useReducer{[ {cursor, recorderList}, dispatchRecord ]({ cursor: -1, recorderList: []})}\nuseEffect{}"),__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(RecordData,"RecordData","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(RecordInfo,"RecordInfo","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(getRevertRecor,"getRevertRecor","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(handleOperate,"handleOperate","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(recordListReducer,"recordListReducer","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx"),reactHotLoader.register(_default,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/record/index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},,function(e,t,r){"use strict";r.r(t),function(e){var a,o=r(0),n=r.n(o),c=r(1),i=r(37),d=r.n(i),_=r(5);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var l,s,u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e){var t=e.pCanvasController;Object(o.useEffect)((function(){if(t){var e=function(){t.setBrushWidth(1),t.setOpacity(1)};return t.on("init",e),function(){return t.off("init",e)}}}),[]);return n.a.createElement("div",{className:d.a.asideTool},n.a.createElement(c.Divider,null),n.a.createElement(c.Slider,{defaultValue:1,vertical:!0,min:1,max:200,step:2,onChange:function(e){t&&t.setBrushWidth(e)}}),n.a.createElement(c.Divider,null),n.a.createElement(c.Slider,{vertical:!0,defaultValue:1,min:0,max:1,step:.01,onChange:function(e){t&&t.setOpacity(e)}}),n.a.createElement(c.Divider,null),n.a.createElement(_.default,{pCanvasController:t}),n.a.createElement(c.Divider,null))};u(f,"useEffect{}"),t.default=f,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(1,"defaultWidth","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/index.tsx"),l.register(1,"defaultOpacity","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/index.tsx"),l.register(f,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/aside-tool-bar/index.tsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,r(3)(e))},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){e.exports={recordBtnActive:"recordBtnActive_a74d3"}},,function(e,t,r){e.exports={asideTool:"asideTool_faaa6"}},,,,,,,function(e,t,r){var a=r(45),o="object"==typeof self&&self&&self.Object===Object&&self,n=a||o||Function("return this")();e.exports=n},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(46))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){var r=Array.isArray;e.exports=r},function(e,t,r){var a=r(49),o=0;e.exports=function(e){var t=++o;return a(e)+t}},function(e,t,r){var a=r(50);e.exports=function(e){return null==e?"":a(e)}},function(e,t,r){var a=r(51),o=r(52),n=r(47),c=r(53),i=a?a.prototype:void 0,d=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(n(t))return o(t,e)+"";if(c(t))return d?d.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},function(e,t,r){var a=r(44).Symbol;e.exports=a},function(e,t){e.exports=function(e,t){for(var r=-1,a=null==e?0:e.length,o=Array(a);++r<a;)o[r]=t(e[r],r,e);return o}},function(e,t){e.exports=function(){return!1}},function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return _}));var a,o=r(48),n=r.n(o);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,i,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,a=document.createElement("canvas");a.width=e,a.height=t,a.setAttribute("uuid",n()("canvasId-"));var o=a.getContext("2d");return o&&r&&(o.fillStyle=r.toRGBAString(),o.fillRect(0,0,e,t)),a},_=function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return null==r||r.clearRect(0,0,t.width,t.height),null==r||r.drawImage(e,0,0,e.width,e.height),t};(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(d,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),c.register(_,"copyCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))}]]);