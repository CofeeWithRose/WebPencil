(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6,14,17,26],[,,,,,,,,function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"mapCanvas",(function(){return p}));var a,n=r(0),o=r.n(n),i=r(1),c=r(50),l=r(35),u=r.n(l);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],a=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var d,f,y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e,t){var r=t.getContext("2d");r&&(r.clearRect(0,0,t.width,t.height),r.drawImage(e,0,0,e.width,e.height,0,0,t.width,t.height))},v=function(e){var t=e.pCanvasController,r=_(Object(n.useState)([]),2),a=r[0],l=r[1],d=Object(n.useRef)({}),f=Object(n.useRef)([]),y=_(Object(n.useState)(""),2),v=y[0],b=y[1],h=function(){s(f.current).forEach((function(e){var t=d.current[e.layerId];if(t){p(e.canvas,t);var r=f.current.findIndex((function(t){return t.layerId===e.layerId}));f.current.splice(r,1)}}))};Object(n.useEffect)((function(){var e=function(){for(var e=t.getLayers(),r=[],a=e.length-1;a>=0;a--){var n,o=e[a];if(o.type===c.b.NORMAL&&(r.push(o),f.current.push(o)),o.type===c.b.TEMP_COVER)b(null===(n=e[a+1])||void 0===n?void 0:n.layerId)}l((function(e){return[].concat(s(e),r)}))};return t.addListener("init",e),function(){return t.removeListener("init",e)}}),[]),Object(n.useEffect)((function(){var e=function(e){e.type===c.b.NORMAL&&(f.current.push(e),l((function(t){return[].concat(s(t),[e])})))};return t.addListener("addLayer",e),function(){return t.removeListener("addLayer",e)}}),[]),Object(n.useEffect)(h,[a]);return o.a.createElement(i.Tooltip,{className:u.a.layerPannel,placement:"bottomLeft",trigger:"click",onVisibleChange:function(){return setTimeout(h,100)},title:o.a.createElement(i.List,{header:o.a.createElement("span",{onClick:function(){t.addLayer()}},"+"),className:u.a.pannelWrap,itemLayout:"horizontal",dataSource:a,rowKey:"layerId",renderItem:function(e){var t=e.name,r=e.visible,a=e.layerId;return o.a.createElement(i.List.Item,null,o.a.createElement(i.List.Item.Meta,{className:a===v?u.a.active:"",avatar:o.a.createElement("canvas",{key:a,id:a,ref:function(e){d.current[a]=e},className:u.a.canvases,width:"45",height:"45"}),title:t,description:r?"visible":"unvisible"}))}})},"lll")};y(v,"useState{[layers, setLayers]([])}\nuseRef{canvasesRef}\nuseRef{needCopIdRef}\nuseState{[ activeLayerId, setActiveLayerId ]('')}\nuseEffect{}\nuseEffect{}\nuseEffect{}"),t.default=v,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(p,"mapCanvas","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/layer-pannel/index.tsx"),d.register(v,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/layer-pannel/index.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}.call(this,r(12)(e))},,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=t,this.b=r,this.a=a}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,t,r){for(var a=[],n=(t.r-e.r)/r,o=(t.g-e.g)/r,i=(t.b-e.b)/r,c=(t.a-e.a)/r,l=0;l<r;l++)a.push(new RGBA(e.r+n*l,e.g+o*l,e.b+i*l,e.a+c*l));return a}},{key:"mutipy",value:function(e,t){return new RGBA(e.r*t,e.g*t,e.b*t)}},{key:"add",value:function(e,t){var r=e.r,a=e.g,n=e.b;return new RGBA(r+t.r,a+t.g,n+t.b)}},{key:"mix",value:function(e,t,r){return new RGBA(e.r+(t.r-e.r)*r,e.g+(t.g-e.g)*r,e.b+(t.b-e.b)*r)}},{key:"getLerpColor",value:function(e,t,r){var a=e.r,n=e.g,o=e.b,i=e.a;return new RGBA((t.r-a)*r+a,(t.g-n)*r+n,(t.b-o)*r+o,(t.a-i)*r+i)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(12)(module))},,,,,,,,,,,,,,,function(e,t,r){e.exports={layerPannel:"layerPannel_e799a",pannelWrap:"pannelWrap_b4fbf",canvases:"canvases_b0d45",active:"active_1674e"}},,,,,function(e,t,r){var a=r(42),n="object"==typeof self&&self&&self.Object===Object&&self,o=a||n||Function("return this")();e.exports=o},function(e,t,r){var a=r(44),n=0;e.exports=function(e){var t=++n;return a(e)+t}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(43))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var a=r(45);e.exports=function(e){return null==e?"":a(e)}},function(e,t,r){var a=r(46),n=r(47),o=r(48),i=r(49),c=a?a.prototype:void 0,l=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return n(t,e)+"";if(i(t))return l?l.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},function(e,t,r){var a=r(40).Symbol;e.exports=a},function(e,t){e.exports=function(e,t){for(var r=-1,a=null==e?0:e.length,n=Array(a);++r<a;)n[r]=t(e[r],r,e);return n}},function(e,t){var r=Array.isArray;e.exports=r},function(e,t){e.exports=function(){return!1}},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"c",(function(){return WorkDetail})),__webpack_require__.d(__webpack_exports__,"b",(function(){return LayerDetailType})),__webpack_require__.d(__webpack_exports__,"a",(function(){return LayerDetail})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WorkStorage}));var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_canvas_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51),enterModule;function asyncGeneratorStep(e,t,r,a,n,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,a,n,i,c,"next",e)}function c(e){asyncGeneratorStep(o,a,n,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},WorkInfo=function(){function WorkInfo(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now(),o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Date.now(),i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("work_".concat(Date.now(),"_"));_classCallCheck(this,WorkInfo),this.width=e,this.height=t,this.name=r,this.thumbnail=a,this.createTime=n,this.updateTime=o,this.workId=i}return _createClass(WorkInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkInfo}(),WorkDetail=function(){function WorkDetail(e,t){_classCallCheck(this,WorkDetail),this.workInfo=e,this.contens=t}return _createClass(WorkDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"createEmpty",value:function(e,t,r){var a=new WorkInfo(e,t,"new work",Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(e,t,r)),n=new WorkLayers;return WorkLayers.addLayer(n,a,LayerDetail.create(a,_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE)),WorkLayers.addLayer(n,a,LayerDetail.create(a,void 0,LayerDetailType.TEMP_COVER)),new WorkDetail(a,n)}}]),WorkDetail}(),LayerDetailType;!function(e){e[e.TEMP_COVER=1]="TEMP_COVER",e[e.NORMAL=2]="NORMAL"}(LayerDetailType||(LayerDetailType={}));var LayerDetail=function(){function LayerDetail(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:LayerDetailType.NORMAL,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"new layer",a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("layer-".concat(Date.now(),"-"));_classCallCheck(this,LayerDetail),this.canvas=e,this.type=t,this.name=r,this.visible=a,this.layerId=n}return _createClass(LayerDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"create",value:function(e,t,r){var a=e.width,n=e.height,o=Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(a,n,t),i=new LayerDetail(o,r);return o.setAttribute("layerId",i.layerId),i}}]),LayerDetail}(),WorkLayers=function(){function WorkLayers(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("worklayer-".concat(Date.now(),"-"));_classCallCheck(this,WorkLayers),this.workLayersId=e,this.layers=[]}return _createClass(WorkLayers,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"addLayer",value:function(e,t,r){var a=t.width,n=t.height;r||(r=new LayerDetail(Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(a,n))),e.layers.unshift(r)}}]),WorkLayers}(),WorkStorage=function(){function e(){_classCallCheck(this,e)}var t,r,a,n,o,i;return _createClass(e,null,[{key:"addWork",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})},{key:"removeWork",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"updateWorkInfo",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"batchUpdateLayerDetail",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)})},{key:"getWorkDetail",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",WorkDetail.createEmpty(823,627,_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE));case 1:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"getWorkList",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(WorkInfo,"WorkInfo","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkDetail,"WorkDetail","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(LayerDetail,"LayerDetail","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkLayers,"WorkLayers","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkStorage,"WorkStorage","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(12)(module))},function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var a,n=r(41),o=r.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,a=document.createElement("canvas");a.width=e,a.height=t,a.setAttribute("uuid",o()("canvasId-"));var n=a.getContext("2d");return n&&(n.scale(devicePixelRatio,devicePixelRatio),r&&(n.fillStyle=r.toRGBAString(),n.fillRect(0,0,e,t))),a};(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(l,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(12)(e))}]]);