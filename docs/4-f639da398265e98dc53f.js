(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9,16,17,19,20],{10:function(e,t,r){"use strict";r.r(t),function(e){var a,n=r(0),o=r.n(n),i=r(57),c=r(36),l=r.n(c),u=r(4),s=r(74),d=r(13),_=r(23),f=r(61),p=r.n(f),v=r(50),y=r(20);function m(e,t,r,a,n,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){m(o,a,n,i,c,"next",e)}function c(e){m(o,a,n,i,c,"throw",e)}i(void 0)}))}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],a=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var k,g,L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(){var e=b(Object(n.useState)(!1),2),t=e[0],r=e[1],a=b(Object(n.useState)([]),2),c=a[0],f=a[1];Object(n.useEffect)((function(){h(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.d.getWorkList();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var m=function(){var e=h(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.width,a=t.height,n=v.c.createEmpty(r,a,y.RGBA.WHITE),e.next=4,v.d.addWork(n);case 4:k(n.workInfo.workId);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){d.b.push({pathname:"/paint",search:p.a.stringify({workId:e})})};return o.a.createElement(i.a,{showBackButton:!1,asideClass:l.a.asideClass},o.a.createElement("main",{className:l.a.listWrap},o.a.createElement(u.default,{id:"add",name:"新建",content:o.a.createElement(s.a,{style:{fontSize:"30px"}}),onClick:function(){return r(!0)}}),c.map((function(e){var t=e.workId,r=e.name,a=e.thumbnail;return o.a.createElement(u.default,{id:t,name:r,content:a,onClick:function(){return k(t)}})}))),o.a.createElement(_.FileMenu,{isVisibale:t,onComplete:m}))};L(w,"useState{[ isShowSetting , setIsShowSetting ](false)}\nuseState{[ workList, setWorkList ]([])}\nuseEffect{}"),t.default=w,(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&k.register(w,"default","/Users/muyin/Documents/code/WebPencil/src/pages/home/index.tsx"),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}.call(this,r(12)(e))},20:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=t,this.b=r,this.a=a}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,t,r){for(var a=[],n=(t.r-e.r)/r,o=(t.g-e.g)/r,i=(t.b-e.b)/r,c=(t.a-e.a)/r,l=0;l<r;l++)a.push(new RGBA(e.r+n*l,e.g+o*l,e.b+i*l,e.a+c*l));return a}},{key:"mutipy",value:function(e,t){return new RGBA(e.r*t,e.g*t,e.b*t)}},{key:"add",value:function(e,t){var r=e.r,a=e.g,n=e.b;return new RGBA(r+t.r,a+t.g,n+t.b)}},{key:"mix",value:function(e,t,r){return new RGBA(e.r+(t.r-e.r)*r,e.g+(t.g-e.g)*r,e.b+(t.b-e.b)*r)}},{key:"getLerpColor",value:function(e,t,r){var a=e.r,n=e.g,o=e.b,i=e.a;return new RGBA((t.r-a)*r+a,(t.g-n)*r+n,(t.b-o)*r+o,(t.a-i)*r+i)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(12)(module))},23:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"FileMenu",(function(){return _}));var a,n=r(0),o=r.n(n),i=r(1);function c(e,t,r,a,n,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],a=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var u,s,d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},_=function(e){var t=e.className,r=void 0===t?"":t,a=e.isVisibale,n=e.onComplete,u=l(i.Form.useForm(),1)[0],s=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.validateFields();case 2:t=e.sent,n&&n(t);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){c(o,a,n,i,l,"next",e)}function l(e){c(o,a,n,i,l,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),d=function(e){return"".concat(e||0,"px")},_=function(e){return(e||"").replace("px","")};return o.a.createElement("div",null,o.a.createElement(i.Form,{form:u,initialValues:{width:2048,height:2048}},o.a.createElement(i.Modal,{visible:a,title:"创建",className:r,okButtonProps:{onClick:s}},o.a.createElement(i.Form.Item,{name:"width",label:"宽度",rules:[{required:!0,message:"请填写画布宽度"}]},o.a.createElement(i.InputNumber,{min:1,max:4096,precision:0,formatter:d,parser:_})),o.a.createElement(i.Form.Item,{name:"height",label:"高度",rules:[{required:!0,message:"请填写画布高度"}]},o.a.createElement(i.InputNumber,{min:1,max:4096,precision:0,formatter:d,parser:_})))))};d(_,"useForm{[form]}"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(_,"FileMenu","/Users/muyin/Documents/code/WebPencil/src/pages/home/FileMenu.tsx"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,r(12)(e))},32:function(e,t,r){e.exports={workItem:"workItem_b96c1",imgBox:"imgBox_8e40a"}},36:function(e,t,r){e.exports={listWrap:"listWrap_fdcf4",asideClass:"asideClass_03988"}},4:function(e,t,r){"use strict";r.r(t),function(e){var a,n=r(0),o=r.n(n),i=r(32),c=r.n(i);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,u,s=function(e){var t=e.name,r=e.content,a=e.id,n=e.onClick;return o.a.createElement("section",{className:c.a.workItem,onClick:function(){return n&&n(a)}},o.a.createElement("div",{className:c.a.imgBox},r),o.a.createElement("p",null,t))};t.default=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(s,"default","/Users/muyin/Documents/code/WebPencil/src/pages/home/component/WorkItem/index.tsx"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}.call(this,r(12)(e))},50:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"c",(function(){return WorkDetail})),__webpack_require__.d(__webpack_exports__,"b",(function(){return LayerDetailType})),__webpack_require__.d(__webpack_exports__,"a",(function(){return LayerDetail})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WorkStorage}));var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_canvas_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51),enterModule;function asyncGeneratorStep(e,t,r,a,n,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,a,n,i,c,"next",e)}function c(e){asyncGeneratorStep(o,a,n,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},WorkInfo=function(){function WorkInfo(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now(),o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Date.now(),i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("work_".concat(Date.now(),"_"));_classCallCheck(this,WorkInfo),this.width=e,this.height=t,this.name=r,this.thumbnail=a,this.createTime=n,this.updateTime=o,this.workId=i}return _createClass(WorkInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkInfo}(),WorkDetail=function(){function WorkDetail(e,t){_classCallCheck(this,WorkDetail),this.workInfo=e,this.contens=t}return _createClass(WorkDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"createEmpty",value:function(e,t,r){var a=new WorkInfo(e,t,"new work",Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(e,t,r)),n=new WorkLayers;return WorkLayers.addLayer(n,a,LayerDetail.create(a,_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE)),WorkLayers.addLayer(n,a,LayerDetail.create(a,void 0,LayerDetailType.TEMP_COVER)),new WorkDetail(a,n)}}]),WorkDetail}(),LayerDetailType;!function(e){e[e.TEMP_COVER=1]="TEMP_COVER",e[e.NORMAL=2]="NORMAL"}(LayerDetailType||(LayerDetailType={}));var LayerDetail=function(){function LayerDetail(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:LayerDetailType.NORMAL,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"new layer",a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("layer-".concat(Date.now(),"-"));_classCallCheck(this,LayerDetail),this.canvas=e,this.type=t,this.name=r,this.visible=a,this.layerId=n}return _createClass(LayerDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"create",value:function(e,t,r){var a=e.width,n=e.height,o=Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(a,n,t),i=new LayerDetail(o,r);return o.setAttribute("layerId",i.layerId),i}}]),LayerDetail}(),WorkLayers=function(){function WorkLayers(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("worklayer-".concat(Date.now(),"-"));_classCallCheck(this,WorkLayers),this.workLayersId=e,this.layers=[]}return _createClass(WorkLayers,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"addLayer",value:function(e,t,r){var a=t.width,n=t.height;r||(r=new LayerDetail(Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(a,n))),e.layers.unshift(r)}}]),WorkLayers}(),WorkStorage=function(){function e(){_classCallCheck(this,e)}var t,r,a,n,o,i;return _createClass(e,null,[{key:"addWork",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})},{key:"removeWork",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"updateWorkInfo",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"batchUpdateLayerDetail",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)})},{key:"getWorkDetail",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",WorkDetail.createEmpty(823,627,_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE));case 1:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"getWorkList",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(WorkInfo,"WorkInfo","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkDetail,"WorkDetail","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(LayerDetail,"LayerDetail","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkLayers,"WorkLayers","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts"),reactHotLoader.register(WorkStorage,"WorkStorage","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(12)(module))},51:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var a,n=r(41),o=r.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,a=document.createElement("canvas");a.width=e,a.height=t,a.setAttribute("uuid",o()("canvasId-"));var n=a.getContext("2d");return n&&(n.scale(devicePixelRatio,devicePixelRatio),r&&(n.fillStyle=r.toRGBAString(),n.fillRect(0,0,e,t))),a};(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(l,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(12)(e))},57:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return p}));var a,n=r(0),o=r.n(n),i=r(58),c=r.n(i),l=r(13),u=r(1),s=r(73);function d(e,t,r,a,n,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(a,n)}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var _,f;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function p(e){var t=e.className,r=void 0===t?"":t,a=e.headNode,n=void 0===a?null:a,i=e.asideClass,_=void 0===i?"":i,f=e.asideNode,p=void 0===f?null:f,v=e.children,y=void 0===v?null:v,m=e.beforeBack,h=e.showBackButton,b=void 0===h||h,k=e.contentClassName,g=void 0===k?"":k,L=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t1=m,!e.t1){e.next=5;break}return e.next=4,m();case 4:e.t1=e.sent;case 5:if(e.t0=e.t1,e.t0){e.next=8;break}e.t0=!m;case 8:if(!e.t0){e.next=10;break}l.b.goBack();case 10:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){d(o,a,n,i,c,"next",e)}function c(e){d(o,a,n,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return o.a.createElement("section",{className:"".concat(c.a.section," ").concat(r)},o.a.createElement("header",null,b&&o.a.createElement(u.Button,{ghost:!0,onClick:L,shape:"circle",size:"small",icon:o.a.createElement(s.a,null)}),!1,n),o.a.createElement("div",{className:c.a.wrapper},o.a.createElement("aside",{className:_},p),o.a.createElement("main",{className:g},y)))}(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&_.register(p,"Home","/Users/muyin/Documents/code/WebPencil/src/lauout/BasicLayout.tsx"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(12)(e))},58:function(e,t,r){e.exports={section:"section_c21f7",wrapper:"wrapper_e44d8"}},74:function(e,t,r){"use strict";var a=r(0),n={name:"plus",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]}},o=r(63),i=function(e,t){return a.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};i.displayName="PlusOutlined";t.a=a.forwardRef(i)}}]);