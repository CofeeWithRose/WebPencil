(window.webpackJsonp=window.webpackJsonp||[]).push([[0,20],{24:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=t,this.b=r,this.a=a}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,t,r){for(var a=[],n=(t.r-e.r)/r,o=(t.g-e.g)/r,i=(t.b-e.b)/r,_=(t.a-e.a)/r,c=0;c<r;c++)a.push(new RGBA(e.r+n*c,e.g+o*c,e.b+i*c,e.a+_*c));return a}},{key:"mutipy",value:function(e,t){return new RGBA(e.r*t,e.g*t,e.b*t)}},{key:"add",value:function(e,t){var r=e.r,a=e.g,n=e.b;return new RGBA(r+t.r,a+t.g,n+t.b)}},{key:"mix",value:function(e,t,r){return new RGBA(e.r+(t.r-e.r)*r,e.g+(t.g-e.g)*r,e.b+(t.b-e.b)*r)}},{key:"getLerpColor",value:function(e,t,r){var a=e.r,n=e.g,o=e.b,i=e.a;return new RGBA((t.r-a)*r+a,(t.g-n)*r+n,(t.b-o)*r+o,(t.a-i)*r+i)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},56:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return s}));var a,n=r(51),o=r.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,_,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,a=document.createElement("canvas");a.width=e,a.height=t,a.setAttribute("uuid",o()("canvasId-"));var n=a.getContext("2d");return n&&r&&(n.fillStyle=r.toRGBAString(),n.fillRect(0,0,e,t)),a},l=function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return null==r||r.clearRect(0,0,t.width,t.height),null==r||r.drawImage(e,0,0,e.width,e.height),t},u=function(e){return new Promise((function(t){var r=new Image;r.onload=function(){r.onload=null,t(l(r))},r.src=URL.createObjectURL(e)}))},s=function(e){return new Promise((function(t){e.toBlob(t,"image/png",1)}))};(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"createCanvas","D:\\code\\WebPencil\\src\\util\\canvas.ts"),i.register(l,"copyCanvas","D:\\code\\WebPencil\\src\\util\\canvas.ts"),i.register(u,"createCanvasByFile","D:\\code\\WebPencil\\src\\util\\canvas.ts"),i.register(s,"toBlob","D:\\code\\WebPencil\\src\\util\\canvas.ts")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,r(3)(e))},58:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"c",(function(){return WorkStorage}));var _work_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64);__webpack_require__.d(__webpack_exports__,"b",(function(){return _work_data__WEBPACK_IMPORTED_MODULE_0__.b})),__webpack_require__.d(__webpack_exports__,"a",(function(){return _work_data__WEBPACK_IMPORTED_MODULE_0__.a}));var _file_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),_util_canvas__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(56),enterModule;function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var i,_=e[Symbol.iterator]();!(a=(i=_.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==_.return||_.return()}finally{if(n)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function asyncGeneratorStep(e,t,r,a,n,o,i){try{var _=e[o](i),c=_.value}catch(e){return void r(e)}_.done?t(c):Promise.resolve(c).then(a,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,a,n,i,_,"next",e)}function _(e){asyncGeneratorStep(o,a,n,i,_,"throw",e)}i(void 0)}))}}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},WorkLayerFile=function(){function WorkLayerFile(e){var t=this,r=e.workLayersId,a=e.layers;_classCallCheck(this,WorkLayerFile),this.workLayersId=void 0,this.workDetailFiles=[],this.workLayersId=r,a.forEach((function(e){e.canvas;var a=e.layerId,n=_objectWithoutProperties(e,["canvas","layerId"]);t.workDetailFiles.push(_objectSpread({},n,{layerId:a,filePath:"layers/".concat(r,"/").concat(a,".png")}))}))}return _createClass(WorkLayerFile,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkLayerFile}(),WorkDetailDesFile=function(){function WorkDetailDesFile(e){_classCallCheck(this,WorkDetailDesFile),this.workInfo=void 0,this.content=void 0;var t=e.workInfo,r=e.contens,a=(t.thumbnail,_objectWithoutProperties(t,["thumbnail"]));this.workInfo=_objectSpread({},a,{thumbnail:"thumbnail/".concat(e.workInfo.workId,".png")}),this.content=new WorkLayerFile(r)}return _createClass(WorkDetailDesFile,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkDetailDesFile}(),WorkStorage=function(){function e(){_classCallCheck(this,e)}var t,r,a,n,o,i;return _createClass(e,null,[{key:"saveWork",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,a,n,o,i,_,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return console.time("saveWork"),r=new WorkDetailDesFile(t),e.next=6,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.save({type:"text",path:"".concat(t.workInfo.workId,".json"),data:JSON.stringify(r)});case 6:a=this.getCanvasFileList(t,r),n=0;case 8:if(!(n<a.length)){e.next=19;break}return o=a[n],i=o.path,_=o.canvas,e.next=12,Object(_util_canvas__WEBPACK_IMPORTED_MODULE_2__.d)(_);case 12:if(!(c=e.sent)){e.next=16;break}return e.next=16,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.save({type:"blob",path:i,data:c});case 16:n++,e.next=8;break;case 19:console.timeEnd("saveWork");case 20:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"getCanvasFileList",value:function(e,t){var r=e.contens.layers,a=t.content.workDetailFiles,n=[{path:t.workInfo.thumbnail,canvas:this.combimeCanvas(100,100,e.contens.layers.map((function(e){return e.canvas})))}];return r.forEach((function(e,t){var r=e.canvas;n.push({canvas:r,path:a[t].filePath})})),n}},{key:"combimeCanvas",value:function(e,t,r){var a=Object(_util_canvas__WEBPACK_IMPORTED_MODULE_2__.b)(e,t),n=a.getContext("2d");if(n)for(var o=r.length-1;o>-1;o--){var i=r[o];n.drawImage(i,0,0,i.width,i.height,0,0,e,t)}return a}},{key:"removeWork",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"updateWorkInfo",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"updateLayerDetail",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)})},{key:"getWorkDetail",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,a,n,o,i,_,c,l,u,s,d,f,y,b,v,p,k,h,w,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.time("getWorkDetail"),e.next=3,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.get("".concat(t,".json"),{isDir:!1});case 3:return r=e.sent,a=_slicedToArray(r,1),n=a[0],e.next=8,n.text();case 8:return o=e.sent,i=JSON.parse(o),_=i.workInfo,c=i.content,l=c.workLayersId,u=c.workDetailFiles,s=new _work_data__WEBPACK_IMPORTED_MODULE_0__.c(l),e.next=13,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.get("layers/".concat(l),{isDir:!0});case 13:for(d=e.sent.reduce((function(e,t){return _objectSpread({},e,_defineProperty({},t.name,t))}),{}),f=[],y=0;y<u.length;y++)b=u[y],v=b.layerId,p=b.visible,k=b.name,(h=d["".concat(v,".png")])?(w=Object(_util_canvas__WEBPACK_IMPORTED_MODULE_2__.c)(h),f.push({canvasPromise:w,name:k,visible:p,layerId:v})):console.error("no match file"+v);return e.next=18,Promise.all(f.map((function(e){return e.canvasPromise})));case 18:return g=e.sent,f.forEach((function(e,t){e.canvasPromise;var r=e.name,a=e.visible,n=e.layerId,o=new _work_data__WEBPACK_IMPORTED_MODULE_0__.a(g[t],r,a,n);s.layers.push(o)})),console.timeEnd("getWorkDetail"),e.abrupt("return",new _work_data__WEBPACK_IMPORTED_MODULE_0__.b(_,s));case 22:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"getWorkList",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,a,n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.time("getWorkList"),e.next=3,Promise.all([_file_system__WEBPACK_IMPORTED_MODULE_1__.a.get("",{isDir:!0}),_file_system__WEBPACK_IMPORTED_MODULE_1__.a.get("thumbnail",{isDir:!0})]);case 3:return r=e.sent,a=_slicedToArray(r,2),n=a[0],o=a[1],e.next=9,Promise.all(n.map((function(e){return e.text()})));case 9:return i=e.sent,t=i.map((function(e){var t=JSON.parse(e).workInfo,r=(t.thumbnail,t.workId);return _objectSpread({},_objectWithoutProperties(t,["thumbnail","workId"]),{workId:r,thumbnail:URL.createObjectURL(o.find((function(e){return e.name==="".concat(r,".png")})))})})),console.timeEnd("getWorkList"),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(WorkLayerFile,"WorkLayerFile","D:\\code\\WebPencil\\src\\workStorage\\index.ts"),reactHotLoader.register(WorkDetailDesFile,"WorkDetailDesFile","D:\\code\\WebPencil\\src\\workStorage\\index.ts"),reactHotLoader.register(WorkStorage,"WorkStorage","D:\\code\\WebPencil\\src\\workStorage\\index.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},64:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"b",(function(){return WorkDetail})),__webpack_require__.d(__webpack_exports__,"a",(function(){return LayerDetail})),__webpack_require__.d(__webpack_exports__,"c",(function(){return WorkLayers}));var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(51),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_util_canvas__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(56),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},WorkInfo=function(){function WorkInfo(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now(),o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Date.now(),i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("work_".concat(Date.now(),"_"));_classCallCheck(this,WorkInfo),this.width=e,this.height=t,this.name=r,this.thumbnail=a,this.createTime=n,this.updateTime=o,this.workId=i}return _createClass(WorkInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkInfo}(),WorkDetail=function(){function WorkDetail(e,t){_classCallCheck(this,WorkDetail),this.workInfo=e,this.contens=t}return _createClass(WorkDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"createEmpty",value:function(e,t,r){var a=new WorkInfo(e,t,"new work",Object(_util_canvas__WEBPACK_IMPORTED_MODULE_2__.b)(e,t,r)),n=new WorkLayers;return WorkLayers.addLayer(n,a,LayerDetail.create(a,_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE)),new WorkDetail(a,n)}}]),WorkDetail}(),LayerDetail=function(){function LayerDetail(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"new layer",r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("layer-".concat(Date.now(),"-"));_classCallCheck(this,LayerDetail),this.canvas=e,this.name=t,this.visible=r,this.layerId=a}return _createClass(LayerDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"create",value:function(e,t){var r=e.width,a=e.height,n=Object(_util_canvas__WEBPACK_IMPORTED_MODULE_2__.b)(r,a,t),o=new LayerDetail(n);return n.setAttribute("layerId",o.layerId),o}}]),LayerDetail}(),WorkLayers=function(){function WorkLayers(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("worklayer-".concat(Date.now(),"-"));_classCallCheck(this,WorkLayers),this.workLayersId=e,this.layers=[]}return _createClass(WorkLayers,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"addLayer",value:function(e,t,r){var a=t.width,n=t.height;r||(r=new LayerDetail(Object(_util_canvas__WEBPACK_IMPORTED_MODULE_2__.b)(a,n))),e.layers.unshift(r)}}]),WorkLayers}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(WorkInfo,"WorkInfo","D:\\code\\WebPencil\\src\\workStorage\\work-data.ts"),reactHotLoader.register(WorkDetail,"WorkDetail","D:\\code\\WebPencil\\src\\workStorage\\work-data.ts"),reactHotLoader.register(LayerDetail,"LayerDetail","D:\\code\\WebPencil\\src\\workStorage\\work-data.ts"),reactHotLoader.register(WorkLayers,"WorkLayers","D:\\code\\WebPencil\\src\\workStorage\\work-data.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))}}]);