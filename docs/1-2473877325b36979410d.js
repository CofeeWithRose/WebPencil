(window.webpackJsonp=window.webpackJsonp||[]).push([[1,13],{25:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"CanvasEvent",(function(){return CanvasEvent})),__webpack_require__.d(__webpack_exports__,"PCanvasController",(function(){return PCanvasController}));var _top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),_pcanvas_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(29),_top_tool_bar_tool_item_brush__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_workStorage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58),_pcanvas_layer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(30),_util_event__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(89),_util_canvas__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(56),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},CanvasEvent=function(){function CanvasEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";_classCallCheck(this,CanvasEvent),this.data=e,this.creator=t}return _createClass(CanvasEvent,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),CanvasEvent}(),pointEvent2BrunshStatus=function(e){var t=e.offsetX,r=e.offsetY,a=e.tiltX,n=e.tiltY,o=e.pressure;return o=o>1?.01*o:0===o?1:o,new _top_tool_bar_tool_item_brush__WEBPACK_IMPORTED_MODULE_2__.BrushStatus(t,r,o,a,n)},PCanvasController=function(_PEventEmiter){function PCanvasController(){var e,t;_classCallCheck(this,PCanvasController);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(PCanvasController)).call.apply(e,[this].concat(a)))).context=void 0,t.layerManager=void 0,t.color=_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_0__.RGBA.BLACK,t}return _inherits(PCanvasController,_PEventEmiter),_createClass(PCanvasController,[{key:"init",value:function(e,t){var r=e.wrap,a=e.cover,n=t.workInfo,o=n.width,i=n.height;r.style.width="".concat(o,"px"),r.style.height="".concat(i,"px"),this.layerManager=new _pcanvas_layer__WEBPACK_IMPORTED_MODULE_4__.PcanvasLayers({cover:a,wrap:r,width:o,height:i},t.contens.layers),this.context=new _pcanvas_context__WEBPACK_IMPORTED_MODULE_1__.PCanvasContext(this.layerManager.getCanvas(),this.layerManager.getContext(),o,i),this.emit("init",new CanvasEvent(null)),this.emit("focusLayer",new CanvasEvent({layerDetail:this.layerManager.getFocusDetail()}))}},{key:"setColor",value:function(e){var t=e.r,r=e.g,a=e.b,n=new _top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_0__.RGBA(t,r,a,this.color.a);this.setRGBA(n)}},{key:"setRGBA",value:function(e){this.context.color=e.toRGBAString(),this.color=e,this.emit("colorchange",new CanvasEvent({color:e}))}},{key:"setOpacity",value:function(e){var t=this.color,r=t.r,a=t.g,n=t.b,o=new _top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_0__.RGBA(r,a,n,e);this.setRGBA(o)}},{key:"getLayers",value:function(){return _toConsumableArray(this.layerManager.layers)}},{key:"addLayer",value:function(){var e=this.layerManager.addLayer(_workStorage__WEBPACK_IMPORTED_MODULE_3__.a.create(this.layerManager.wrapInfo));this.layerManager.focusLayer(e);var t=this.layerManager.layers.indexOf(e);this.emit("addLayer",new CanvasEvent({layerDetail:e,index:t})),this.emit("focusLayer",new CanvasEvent({layerDetail:e}))}},{key:"addLayerContent",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user",a=t.width,n=t.height,o=_workStorage__WEBPACK_IMPORTED_MODULE_3__.a.create({width:a,height:n}),i=o.canvas.getContext("2d");return null==i||i.drawImage(t,0,0,a,n),this.layerManager.addLayer(o,e),this.emit("addLayer",new CanvasEvent({layerDetail:o,index:e},r)),o}},{key:"setLayerContent",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user",a=this.layerManager.layers[e],n=a.canvas,o=n.width,i=n.height,s=Object(_util_canvas__WEBPACK_IMPORTED_MODULE_6__.a)(a.canvas),_=a.canvas.getContext("2d");return null==_||_.clearRect(0,0,o,i),null==_||_.drawImage(t,0,0,o,i),this.emit("contentChange",new CanvasEvent({layerDetail:a,index:e,preContent:s},r)),a}},{key:"focusLayer",value:function(e){this.layerManager.focusLayer(e),this.emit("focusLayer",new CanvasEvent({layerDetail:e}))}},{key:"removeLayer",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user",r=this.layerManager.removeLayer(e),a=r.index,n=r.isFocus;if(this.emit("removeLayer",new CanvasEvent({layerDetail:e,index:a},t)),n){var o=this.layerManager.layers[0];this.focusLayer(o),this.emit("focusLayer",new CanvasEvent({layerDetail:o},t))}}},{key:"removeLayerByIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user",r=this.layerManager.layers[e];this.removeLayer(r,t)}},{key:"setBrushWidth",value:function(e){this.context.brushWidth=e}},{key:"setBrush",value:function(e){this.context.brush&&this.context.brush.destory(),e.init(),this.context.brush=e}},{key:"onPointerDown",value:function(e){this.context.brush.onStart(pointEvent2BrunshStatus(e),this.context)}},{key:"onPointerMove",value:function(e){var t;t=e.getCoalescedEvents?e.getCoalescedEvents():[e],this.context.brush.onDraw(t.map((function(e){return pointEvent2BrunshStatus(e)})),this.context)}},{key:"onPointerUp",value:function(e){this.context.brush.onEnd(pointEvent2BrunshStatus(e),this.context);var t=this.layerManager.getFocusDetail(),r=Object(_util_canvas__WEBPACK_IMPORTED_MODULE_6__.a)(t.canvas);this.layerManager.applyTempCanvas();var a=this.layerManager.layers.indexOf(t);this.emit("contentChange",new CanvasEvent({layerDetail:t,preContent:r,index:a}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PCanvasController}(_util_event__WEBPACK_IMPORTED_MODULE_5__.a),reactHotLoader,leaveModule;function logCanvasData(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=t.getContext("2d");console.log(e,null==r?void 0:r.getImageData(0,0,1,1).data)}reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(CanvasEvent,"CanvasEvent","D:\\code\\WebPencil\\src\\pages\\paint\\pcanvas\\pcnvas.controller.ts"),reactHotLoader.register(pointEvent2BrunshStatus,"pointEvent2BrunshStatus","D:\\code\\WebPencil\\src\\pages\\paint\\pcanvas\\pcnvas.controller.ts"),reactHotLoader.register(PCanvasController,"PCanvasController","D:\\code\\WebPencil\\src\\pages\\paint\\pcanvas\\pcnvas.controller.ts"),reactHotLoader.register(logCanvasData,"logCanvasData","D:\\code\\WebPencil\\src\\pages\\paint\\pcanvas\\pcnvas.controller.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},29:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"PCanvasContext",(function(){return PCanvasContext}));var _top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),_top_tool_bar_tool_item_brush__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},PCanvasContext=function(){function PCanvasContext(e,t,r,a){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new _top_tool_bar_tool_item_brush__WEBPACK_IMPORTED_MODULE_1__.Brush,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_0__.RGBA.BLACK.toRGBAString(),i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100;_classCallCheck(this,PCanvasContext),this.curCanvas=e,this.curCanvasContext2D=t,this.width=r,this.height=a,this.brush=n,this.color=o,this.brushWidth=i}return _createClass(PCanvasContext,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PCanvasContext}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(PCanvasContext,"PCanvasContext","D:\\code\\WebPencil\\src\\pages\\paint\\pcanvas\\pcanvas.context.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},30:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"PcanvasLayers",(function(){return PcanvasLayers}));var _workStorage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(58),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},PcanvasLayers=function(){function PcanvasLayers(e,t){_classCallCheck(this,PcanvasLayers),this.wrapInfo=e,this.layers=t,this.tempLayer=void 0,this.focusedLayerDetail=void 0;var r=e,a=r.wrap,n=r.cover,o=n;t.forEach((function(e,t){var r=e.canvas,n=(e.layerId,e.visible);a.insertBefore(r,o),o=r,n||(r.className="unvisible")})),this.tempLayer=_workStorage__WEBPACK_IMPORTED_MODULE_0__.a.create(e),a.insertBefore(this.tempLayer.canvas,n),this.focusedLayerDetail=t[0]}return _createClass(PcanvasLayers,[{key:"getCanvas",value:function(){return this.tempLayer.canvas}},{key:"applyTempCanvas",value:function(){var e=this.focusedLayerDetail.canvas.getContext("2d"),t=this.tempLayer.canvas.getContext("2d");if(e&&t){var r=this.tempLayer.canvas,a=r.width,n=r.height;e.drawImage(this.tempLayer.canvas,0,0,a,n),t.clearRect(0,0,a,n)}}},{key:"getFocusDetail",value:function(){return this.focusedLayerDetail}},{key:"focusLayer",value:function(e){var t=this.layers[this.layers.indexOf(e)-1],r=t&&t.canvas&&t!==this.tempLayer?t.canvas:this.wrapInfo.cover;this.wrapInfo.wrap.insertBefore(this.tempLayer.canvas,r),this.focusedLayerDetail=e}},{key:"addLayer",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this.wrapInfo.wrap,a=this.layers[t-1],n=a&&a.canvas||this.wrapInfo.cover;return r.insertBefore(e.canvas,n),this.layers.splice(t,0,e),e}},{key:"removeLayer",value:function(e){var t=this.layers.indexOf(e);return t>-1?(this.wrapInfo.wrap.removeChild(e.canvas),this.layers.splice(t,1)):console.warn("layerDetail has been removed"),{index:t,isFocus:this.focusedLayerDetail===e}}},{key:"getContext",value:function(){var e=this.tempLayer.canvas.getContext("2d");if(null===e)throw"get context faliled.";return e}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PcanvasLayers}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(PcanvasLayers,"PcanvasLayers","D:\\code\\WebPencil\\src\\pages\\paint\\pcanvas\\pcanvas.layer.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"BrushStatus",(function(){return BrushStatus})),__webpack_require__.d(__webpack_exports__,"BrushType",(function(){return BrushType})),__webpack_require__.d(__webpack_exports__,"Brush",(function(){return Brush}));var _util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59),enterModule;function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},BrushStatus=function(){function BrushStatus(e,t,r,a,n){_classCallCheck(this,BrushStatus),this.x=e,this.y=t,this.pressure=r,this.tiltX=a,this.tiltY=n}return _createClass(BrushStatus,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),BrushStatus}(),BrushType;!function(e){e[e.pen=1]="pen",e[e.selector=2]="selector"}(BrushType||(BrushType={}));var Brush=function(){function Brush(){_classCallCheck(this,Brush),this.type=BrushType.pen,this.name="default",this.isPainting=!1,this.lastBrush=void 0,this.lastNormalizedDirection=void 0,this.pathList=[[],[]],this.getVerticalPath=function(e,t){return[_util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__.a.add(e,t),_util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__.a.subtract(e,t)]}}return _createClass(Brush,[{key:"init",value:function(){}},{key:"destory",value:function(){}},{key:"onStart",value:function(e,t){var r=t.curCanvasContext2D,a=t.color;this.lastBrush=e,this.isPainting=!0,r.fillStyle=a}},{key:"onDraw",value:function(e,t){var r=this;if(this.isPainting){var a=t.curCanvasContext2D,n=t.brushWidth;e.forEach((function(e){var t,a=e.x,o=e.y,i=e.pressure,s=new _util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__.a(a-r.lastBrush.x,o-r.lastBrush.y),_=_util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__.a.normalize(s),l=_util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__.a.vertical(_);t=i*n*.5;var u=_util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__.a.multipy(l,t),c=_slicedToArray(r.getVerticalPath(e,u),2),d=c[0],v=c[1];r.lastNormalizedDirection&&_util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__.a.degree(_util_data_Vector2__WEBPACK_IMPORTED_MODULE_0__.a.ZERO,r.lastNormalizedDirection,_)>180?(r.pathList[1].push(d),r.pathList[0].push(v)):(r.pathList[0].push(d),r.pathList[1].push(v)),r.lastBrush=e,r.lastNormalizedDirection=_})),this.fillPathList(a)}}},{key:"fillPathList",value:function(e){var t=this.pathList[0],r=this.pathList[1],a=t.concat(_toConsumableArray(r).reverse());e.clearRect(0,0,e.canvas.width,e.canvas.height),e.beginPath();var n=a.length-1;e.moveTo(a[n].x,a[n].y),a.forEach((function(t){var r=t.x,a=t.y;e.lineTo(r,a)})),e.closePath(),e.fill()}},{key:"onEnd",value:function(e,t){this.isPainting=!1,this.pathList=[[],[]]}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Brush}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(BrushStatus,"BrushStatus","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\brush\\index.tsx"),reactHotLoader.register(Brush,"Brush","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\brush\\index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},59:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"a",(function(){return Vector2})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},normalizeAtant2=function(e){return e<0?2*Math.PI+e:e},Vector2=function(){function Vector2(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;_classCallCheck(this,Vector2),this.x=e,this.y=t}return _createClass(Vector2,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"normalize",value:function(e){var t=1/Vector2.magnitude(e);return new Vector2(e.x*t,e.y*t)}},{key:"vertical",value:function(e){var t=e.x;return new Vector2(e.y,-t)}},{key:"dist",value:function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}},{key:"magnitude",value:function(e){return Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))}},{key:"degree",value:function(e,t,r){var a=normalizeAtant2(Math.atan2(t.y-e.y,t.x-e.x)),n=normalizeAtant2(Math.atan2(r.y-e.y,r.x-e.x));return Math.abs(n-a)}},{key:"add",value:function(e,t){return new Vector2(e.x+t.x,e.y+t.y)}},{key:"rotate",value:function(e,t){var r=Vector2.magnitude(e),a=normalizeAtant2(Math.atan2(e.y,e.x))-t%360/180*Math.PI;return new Vector2(Math.cos(a)*r,Math.sin(a)*r)}},{key:"multipy",value:function(e,t){return new Vector2(e.x*t,e.y*t)}},{key:"subtract",value:function(e,t){return new Vector2(e.x-t.x,e.y-t.y)}},{key:"move",value:function(e,t,r){var a=r.x-t.x,n=r.y-t.y;return new Vector2(e.x+a,e.y+n)}},{key:"floor",value:function(e){var t=e.x,r=e.y;return new Vector2(Math.floor(t),Math.floor(r))}}]),Vector2}(),reactHotLoader,leaveModule;Vector2.ZERO=new Vector2,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(normalizeAtant2,"normalizeAtant2","D:\\code\\WebPencil\\src\\util\\data\\Vector2.ts"),reactHotLoader.register(Vector2,"Vector2","D:\\code\\WebPencil\\src\\util\\data\\Vector2.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},89:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return PEventEmiter}));var events__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(90),events__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},PEventEmiter=function(){function PEventEmiter(){_classCallCheck(this,PEventEmiter),this.eventEmitter=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}return _createClass(PEventEmiter,[{key:"on",value:function(e,t){var r=t;this.eventEmitter.addListener(e,r)}},{key:"off",value:function(e,t){var r=t;this.eventEmitter.removeListener(e,r)}},{key:"emit",value:function(e,t){var r=this;setTimeout((function(){r.eventEmitter.emit(e,t)}),1)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PEventEmiter}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(PEventEmiter,"PEventEmiter","D:\\code\\WebPencil\\src\\util\\event.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},90:function(e,t,r){"use strict";var a,n="object"==typeof Reflect?Reflect:null,o=n&&"function"==typeof n.apply?n.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};a=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var _=10;function l(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function c(e,t,r,a){var n,o,i,s;if(l(r),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),i=o[t]),void 0===i)i=o[t]=r,++e._eventsCount;else if("function"==typeof i?i=o[t]=a?[r,i]:[i,r]:a?i.unshift(r):i.push(r),(n=u(e))>0&&i.length>n&&!i.warned){i.warned=!0;var _=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");_.name="MaxListenersExceededWarning",_.emitter=e,_.type=t,_.count=i.length,s=_,console&&console.warn&&console.warn(s)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function v(e,t,r){var a={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},n=d.bind(a);return n.listener=r,a.wrapFn=n,n}function f(e,t,r){var a=e._events;if(void 0===a)return[];var n=a[t];return void 0===n?[]:"function"==typeof n?r?[n.listener||n]:[n]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(n):p(n,n.length)}function h(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function p(e,t){for(var r=new Array(t),a=0;a<t;++a)r[a]=e[a];return r}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return _},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");_=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var a="error"===e,n=this._events;if(void 0!==n)a=a&&void 0===n.error;else if(!a)return!1;if(a){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var _=n[e];if(void 0===_)return!1;if("function"==typeof _)o(_,this,t);else{var l=_.length,u=p(_,l);for(r=0;r<l;++r)o(u[r],this,t)}return!0},s.prototype.addListener=function(e,t){return c(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return c(this,e,t,!0)},s.prototype.once=function(e,t){return l(t),this.on(e,v(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,v(this,e,t)),this},s.prototype.removeListener=function(e,t){var r,a,n,o,i;if(l(t),void 0===(a=this._events))return this;if(void 0===(r=a[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete a[e],a.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(n=-1,o=r.length-1;o>=0;o--)if(r[o]===t||r[o].listener===t){i=r[o].listener,n=o;break}if(n<0)return this;0===n?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,n),1===r.length&&(a[e]=r[0]),void 0!==a.removeListener&&this.emit("removeListener",e,i||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,r,a;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var n,o=Object.keys(r);for(a=0;a<o.length;++a)"removeListener"!==(n=o[a])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(a=t.length-1;a>=0;a--)this.removeListener(e,t[a]);return this},s.prototype.listeners=function(e){return f(this,e,!0)},s.prototype.rawListeners=function(e){return f(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h,s.prototype.eventNames=function(){return this._eventsCount>0?a(this._events):[]}}}]);