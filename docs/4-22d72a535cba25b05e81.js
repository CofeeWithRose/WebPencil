(window.webpackJsonp=window.webpackJsonp||[]).push([[4,18,23,24,25,26],{13:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return L}));var a,n,o,c=r(0),i=r.n(c),d=r(62),l=r(41),u=r.n(l),s=r(8),f=r(14),v=r(76),p=r.n(v),b=r(55),y=r(11),_=r(7);function m(e,t,r,a,n,o,c){try{var i=e[o](c),d=i.value}catch(e){return void r(e)}i.done?t(d):Promise.resolve(d).then(a,n)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],a=!0,n=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(){var e=h(Object(c.useState)(),2),t=e[0],r=e[1],a=Object(s.usePCanvas)().pCanvas;return Object(c.useEffect)((function(){var e;(e=regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.a.parse(f.b.location.search.substr(1)),a=t.workId,e.next=3,b.c.getWorkDetail(a);case 3:n=e.sent,r(n);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function c(e){m(o,a,n,c,i,"next",e)}function i(e){m(o,a,n,c,i,"throw",e)}c(void 0)}))})()}),[]),i.a.createElement(d.a,{contentClassName:u.a.layout,headNode:i.a.createElement(y.default,{pCanvasController:a}),asideNode:i.a.createElement(_.default,{pCanvasController:a})},t&&i.a.createElement(s.PCanvas,{pCanvasController:a,initValue:t}))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(L,"useState{[ workDetail, setWorkDetail ]}\nusePCanvas{{pCanvas}}\nuseEffect{}",(function(){return[s.usePCanvas]})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(L,"Paint","D:\\code\\WebPencil\\src\\pages\\paint\\index.tsx"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}.call(this,r(3)(e))},24:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RecordData",(function(){return RecordData})),__webpack_require__.d(__webpack_exports__,"RecordInfo",(function(){return RecordInfo})),__webpack_require__.d(__webpack_exports__,"recordListReducer",(function(){return recordListReducer})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RecordData=function(){function RecordData(){_classCallCheck(this,RecordData),this.add=void 0,this.remove=void 0,this.modify=void 0}return _createClass(RecordData,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordData}(),RecordInfo=function(){function RecordInfo(e,t){_classCallCheck(this,RecordInfo),this.type=e,this.data=t}return _createClass(RecordInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RecordInfo}(),getRevertRecor=function(e){var t=e.type,r=e.data;if("add"===t){var a=r,n=a.index,o=a.canvas;return new RecordInfo("remove",{index:n,canvas:o})}if("modify"===t){var c=r,i=c.index,d=c.from,l=c.to;return new RecordInfo("modify",{index:i,from:l,to:d})}var u=r,s=u.index,f=u.canvas;return new RecordInfo("add",{index:s,canvas:f})},handleOperate=function(e,t){var r=e.type,a=e.data;if(console.log("handleOperate: ",r),"add"!==r)if("modify"!==r)if("remove"!==r);else{var n=a.index;t.removeLayerByIndex(n,"history")}else{var o=a,c=o.index,i=(o.from,o.to),d=t.setLayerContent(c,i,"history");t.focusLayer(d)}else{var l=a,u=l.index,s=l.canvas,f=t.addLayerContent(u,s,"history");t.focusLayer(f)}},MAX_ROCORD_NUMBER=100,recordListReducer=function(e,t){var r=e.cursor,a=e.recorderList,n=t.type,o=t.payload,c=t.pCanvasController;switch(n){case"add":r<a.length-1&&a.splice(Math.max(r,0)),MAX_ROCORD_NUMBER<=a.length&&a.splice(0,a.length-MAX_ROCORD_NUMBER+1),r++,o&&a.push(o),console.log("recorlength: ",a.length);break;case"redo":if(++r<=a.length-1){var i=a[r];c&&handleOperate(i,c)}break;case"undo":if(r>-1){var d=a[r];c&&handleOperate(getRevertRecor(d),c)}r--}return{cursor:Math.max(Math.min(r,a.length-1),-1),recorderList:a}},reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(RecordData,"RecordData","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\record\\reducer.ts"),reactHotLoader.register(RecordInfo,"RecordInfo","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\record\\reducer.ts"),reactHotLoader.register(getRevertRecor,"getRevertRecor","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\record\\reducer.ts"),reactHotLoader.register(handleOperate,"handleOperate","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\record\\reducer.ts"),reactHotLoader.register(MAX_ROCORD_NUMBER,"MAX_ROCORD_NUMBER","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\record\\reducer.ts"),reactHotLoader.register(recordListReducer,"recordListReducer","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\record\\reducer.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},35:function(e,t,r){e.exports={recordBtnActive:"recordBtnActive_a74d3"}},37:function(e,t,r){e.exports={asideTool:"asideTool_faaa6"}},38:function(e,t,r){e.exports={pCanvas:"pCanvas_efb40",canvasWrap:"canvasWrap_4e8dd",unvisible:"unvisible_0b5e4",cover:"cover_edb6c"}},41:function(e,t,r){e.exports={layout:"layout_72e38"}},5:function(e,t,r){"use strict";r.r(t),function(e){var a,n=r(0),o=r.n(n),c=r(1),i=r(35),d=r.n(i),l=r(54),u=r(24);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],a=!0,n=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var f,v,p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=e.pCanvasController,r=s(Object(n.useReducer)(u.recordListReducer,{cursor:-1,recorderList:[]}),2),a=r[0],i=a.cursor,f=a.recorderList,v=r[1],p=i>=0,b=i<f.length-1;Object(n.useEffect)((function(){var e=function(e){var t=e.data,r=t.layerDetail.canvas,a=t.index;"history"!==e.creator&&v({type:"add",payload:new u.RecordInfo("add",{index:a,canvas:Object(l.a)(r)})})},r=function(e){var t=e.data,r=t.layerDetail.canvas,a=t.preContent,n=t.index;"history"!==e.creator&&v({type:"add",payload:new u.RecordInfo("modify",{index:n,from:a,to:Object(l.a)(r)})})},a=function(e){var t=e.data,r=t.layerDetail.canvas,a=t.index;"history"!==e.creator&&v({type:"add",payload:new u.RecordInfo("remove",{index:a,canvas:Object(l.a)(r)})})};return t.on("addLayer",e),t.on("contentChange",r),t.on("removeLayer",a),function(){t.off("addLayer",e),t.off("contentChange",r),t.off("removeLayer",a)}}),[]);return o.a.createElement(n.Fragment,null,o.a.createElement("span",{className:b&&d.a.recordBtnActive||"",onPointerUp:b&&function(){v({type:"redo",pCanvasController:t})}||void 0},"redo"),o.a.createElement(c.Divider,null),o.a.createElement("span",{className:p&&d.a.recordBtnActive||"",onPointerUp:p&&function(){v({type:"undo",pCanvasController:t})}||void 0},"undo"))};p(b,"useReducer{[ {cursor, recorderList}, dispatchRecord ]({ cursor: -1, recorderList: []})}\nuseEffect{}"),t.default=b,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&f.register(b,"default","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\record\\index.tsx"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}.call(this,r(3)(e))},62:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return p}));var a,n=r(0),o=r.n(n),c=r(63),i=r.n(c),d=r(14),l=r(1),u=r(88);function s(e,t,r,a,n,o,c){try{var i=e[o](c),d=i.value}catch(e){return void r(e)}i.done?t(d):Promise.resolve(d).then(a,n)}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var f,v;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function p(e){var t=e.className,r=void 0===t?"":t,a=e.headNode,n=void 0===a?null:a,c=e.asideClass,f=void 0===c?"":c,v=e.asideNode,p=void 0===v?null:v,b=e.children,y=void 0===b?null:b,_=e.beforeBack,m=e.showBackButton,h=void 0===m||m,L=e.contentClassName,g=void 0===L?"":L,C=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t1=_,!e.t1){e.next=5;break}return e.next=4,_();case 4:e.t1=e.sent;case 5:if(e.t0=e.t1,e.t0){e.next=8;break}e.t0=!_;case 8:if(!e.t0){e.next=10;break}d.b.goBack();case 10:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function c(e){s(o,a,n,c,i,"next",e)}function i(e){s(o,a,n,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return o.a.createElement("section",{className:"".concat(i.a.section," ").concat(r)},o.a.createElement("header",null,h&&o.a.createElement(l.Button,{ghost:!0,onPointerUp:C,shape:"circle",size:"small",icon:o.a.createElement(u.a,null)}),!1,n),o.a.createElement("div",{className:i.a.wrapper},o.a.createElement("aside",{className:f},p),o.a.createElement("main",{className:g},y)))}(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&f.register(p,"Home","D:\\code\\WebPencil\\src\\lauout\\BasicLayout.tsx"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,r(3)(e))},63:function(e,t,r){e.exports={section:"section_c21f7",wrapper:"wrapper_e44d8"}},7:function(e,t,r){"use strict";r.r(t),function(e){var a,n=r(0),o=r.n(n),c=r(1),i=r(37),d=r.n(i),l=r(5);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var u,s,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(e){var t=e.pCanvasController;Object(n.useEffect)((function(){if(t){var e=function(){t.setBrushWidth(1),t.setOpacity(1)};return t.on("init",e),function(){return t.off("init",e)}}}),[]);return o.a.createElement("div",{className:d.a.asideTool},o.a.createElement(c.Divider,null),o.a.createElement(c.Slider,{defaultValue:1,vertical:!0,min:1,max:200,step:2,onChange:function(e){t&&t.setBrushWidth(e)}}),o.a.createElement(c.Divider,null),o.a.createElement(c.Slider,{vertical:!0,defaultValue:1,min:0,max:1,step:.01,onChange:function(e){t&&t.setOpacity(e)}}),o.a.createElement(c.Divider,null),o.a.createElement(l.default,{pCanvasController:t}),o.a.createElement(c.Divider,null))};f(v,"useEffect{}"),t.default=v,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(1,"defaultWidth","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\index.tsx"),u.register(1,"defaultOpacity","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\index.tsx"),u.register(v,"default","D:\\code\\WebPencil\\src\\pages\\paint\\aside-tool-bar\\index.tsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,r(3)(e))},8:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"PCanvas",(function(){return v})),r.d(t,"usePCanvas",(function(){return u}));var a,n=r(0),o=r.n(n),c=r(38),i=r.n(c),d=r(23);r.d(t,"PCanvasController",(function(){return d.PCanvasController})),r.d(t,"CanvasEventData",(function(){return d.CanvasEventData})),r.d(t,"CanvasEvent",(function(){return d.CanvasEvent})),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=function(){return{pCanvas:Object(n.useRef)(new d.PCanvasController).current}};l(u,"useRef{{current: pCanvas}}");var s,f,v=function(e){var t=e.initValue,r=e.pCanvasController,a=Object(n.useRef)(null),c=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(r&&c.current&&a.current){var e={wrap:c.current,cover:a.current};r.init(e,t)}}),[]),Object(n.useEffect)((function(){var e=a.current;if(e){var t=function(e){r&&r.onPointerDown(e)},n=function(e){r&&r.onPointerMove(e)},o=function(e){r&&r.onPointerUp(e)};return e.addEventListener("pointerdown",t,{passive:!1}),e.addEventListener("pointermove",n,{passive:!1}),e.addEventListener("pointerup",o,{passive:!1}),console.log("add...."),function(){e.removeEventListener("pointerdown",t),e.removeEventListener("pointermove",n),e.removeEventListener("pointerup",o)}}}),[a.current]),o.a.createElement("main",{className:i.a.pCanvas},o.a.createElement("section",{ref:c,className:i.a.canvasWrap},o.a.createElement("div",{ref:a,className:i.a.cover})))};l(v,"useRef{coverRef}\nuseRef{wrapRef}\nuseEffect{}\nuseEffect{}"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(u,"usePCanvas","D:\\code\\WebPencil\\src\\pages\\paint\\pcanvas\\index.tsx"),s.register(v,"PCanvas","D:\\code\\WebPencil\\src\\pages\\paint\\pcanvas\\index.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}.call(this,r(3)(e))}}]);