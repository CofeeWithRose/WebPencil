(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6,14,17],{20:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,r,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=r,this.b=t,this.a=a}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,r,t){for(var a=[],n=(r.r-e.r)/t,o=(r.g-e.g)/t,i=(r.b-e.b)/t,_=(r.a-e.a)/t,c=0;c<t;c++)a.push(new RGBA(e.r+n*c,e.g+o*c,e.b+i*c,e.a+_*c));return a}},{key:"mutipy",value:function(e,r){return new RGBA(e.r*r,e.g*r,e.b*r)}},{key:"add",value:function(e,r){var t=e.r,a=e.g,n=e.b;return new RGBA(t+r.r,a+r.g,n+r.b)}},{key:"mix",value:function(e,r,t){return new RGBA(e.r+(r.r-e.r)*t,e.g+(r.g-e.g)*t,e.b+(r.b-e.b)*t)}},{key:"getLerpColor",value:function(e,r,t){var a=e.r,n=e.g,o=e.b,i=e.a;return new RGBA((r.r-a)*t+a,(r.g-n)*t+n,(r.b-o)*t+o,(r.a-i)*t+i)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(12)(module))},25:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"PcanvasLayers",(function(){return PcanvasLayers}));var _workStorage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),enterModule;function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},PcanvasLayers=function(){function PcanvasLayers(e,r){var t=this;_classCallCheck(this,PcanvasLayers),this.wrapInfo=e,this.layers=r,this.tempcover=void 0;var a=e.wrap,n=null;r.forEach((function(e,r){var o=e.canvas,i=(e.layerId,e.type),_=e.visible;a.insertBefore(o,n),n=o,_||(o.className="unvisible"),i===_workStorage__WEBPACK_IMPORTED_MODULE_0__.b.TEMP_COVER&&(t.tempcover=o)}))}return _createClass(PcanvasLayers,[{key:"getCanvas",value:function(){return this.tempcover}},{key:"addLayer",value:function(){var e=this.wrapInfo.wrap,r=this.layers[this.layers.length-1],t=_workStorage__WEBPACK_IMPORTED_MODULE_0__.a.create(this.wrapInfo);return e.insertBefore(t.canvas,r.canvas),this.layers.push(t),t}},{key:"getContext",value:function(){var e=this.tempcover.getContext("2d");if(null===e)throw"get context faliled.";return e}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PcanvasLayers}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(PcanvasLayers,"PcanvasLayers","/Users/muyin/Documents/code/WebPencil/src/pages/paint/pcanvas/pcanvas.layer.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(12)(module))},40:function(e,r,t){var a=t(42),n="object"==typeof self&&self&&self.Object===Object&&self,o=a||n||Function("return this")();e.exports=o},41:function(e,r,t){var a=t(44),n=0;e.exports=function(e){var r=++n;return a(e)+r}},42:function(e,r,t){(function(r){var t="object"==typeof r&&r&&r.Object===Object&&r;e.exports=t}).call(this,t(43))},43:function(e,r){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},44:function(e,r,t){var a=t(45);e.exports=function(e){return null==e?"":a(e)}},45:function(e,r,t){var a=t(46),n=t(47),o=t(48),i=t(49),_=a?a.prototype:void 0,c=_?_.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(o(r))return n(r,e)+"";if(i(r))return c?c.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t}},46:function(e,r,t){var a=t(40).Symbol;e.exports=a},47:function(e,r){e.exports=function(e,r){for(var t=-1,a=null==e?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}},48:function(e,r){var t=Array.isArray;e.exports=t},49:function(e,r){e.exports=function(){return!1}},50:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"c",(function(){return WorkDetail})),__webpack_require__.d(__webpack_exports__,"b",(function(){return LayerDetailType})),__webpack_require__.d(__webpack_exports__,"a",(function(){return LayerDetail})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WorkStorage}));var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_canvas_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51),enterModule;function asyncGeneratorStep(e,r,t,a,n,o,i){try{var _=e[o](i),c=_.value}catch(e){return void t(e)}_.done?r(c):Promise.resolve(c).then(a,n)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(a,n){var o=e.apply(r,t);function i(e){asyncGeneratorStep(o,a,n,i,_,"next",e)}function _(e){asyncGeneratorStep(o,a,n,i,_,"throw",e)}i(void 0)}))}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},WorkInfo=function(){function WorkInfo(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now(),o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Date.now(),i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("work_".concat(Date.now(),"_"));_classCallCheck(this,WorkInfo),this.width=e,this.height=r,this.name=t,this.thumbnail=a,this.createTime=n,this.updateTime=o,this.workId=i}return _createClass(WorkInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkInfo}(),WorkDetail=function(){function WorkDetail(e,r){_classCallCheck(this,WorkDetail),this.workInfo=e,this.contens=r}return _createClass(WorkDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"createEmpty",value:function(e,r,t){var a=new WorkInfo(e,r,"new work",Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(e,r,t)),n=new WorkLayers;return WorkLayers.addLayer(n,a,LayerDetail.create(a,_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE)),WorkLayers.addLayer(n,a,LayerDetail.create(a,void 0,LayerDetailType.TEMP_COVER)),new WorkDetail(a,n)}}]),WorkDetail}(),LayerDetailType;!function(e){e[e.TEMP_COVER=1]="TEMP_COVER",e[e.NORMAL=2]="NORMAL"}(LayerDetailType||(LayerDetailType={}));var LayerDetail=function(){function LayerDetail(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:LayerDetailType.NORMAL,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"new layer",a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("layer-".concat(Date.now(),"-"));_classCallCheck(this,LayerDetail),this.canvas=e,this.type=r,this.name=t,this.visible=a,this.layerId=n}return _createClass(LayerDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"create",value:function(e,r,t){var a=e.width,n=e.height,o=Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(a,n,r),i=new LayerDetail(o,t);return o.setAttribute("layerId",i.layerId),i}}]),LayerDetail}(),WorkLayers=function(){function WorkLayers(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("worklayer-".concat(Date.now(),"-"));_classCallCheck(this,WorkLayers),this.workLayersId=e,this.layers=[]}return _createClass(WorkLayers,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"addLayer",value:function(e,r,t){var a=r.width,n=r.height;t||(t=new LayerDetail(Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(a,n))),e.layers.unshift(t)}}]),WorkLayers}(),WorkStorage=function(){function e(){_classCallCheck(this,e)}var r,t,a,n,o,i;return _createClass(e,null,[{key:"addWork",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})},{key:"removeWork",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"updateWorkInfo",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"batchUpdateLayerDetail",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e,r){return a.apply(this,arguments)})},{key:"getWorkDetail",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",WorkDetail.createEmpty(823,627,_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE));case 1:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"getWorkList",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})}]),e}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(WorkInfo,"WorkInfo","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkDetail,"WorkDetail","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(LayerDetail,"LayerDetail","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkLayers,"WorkLayers","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkStorage,"WorkStorage","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(12)(module))},51:function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return c}));var a,n=t(41),o=t.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,_,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0,a=document.createElement("canvas");a.width=e,a.height=r,a.setAttribute("uuid",o()("canvasId-"));var n=a.getContext("2d");return n&&(n.scale(devicePixelRatio,devicePixelRatio),t&&(n.fillStyle=t.toRGBAString(),n.fillRect(0,0,e,r))),a};(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(c,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,t(12)(e))}}]);