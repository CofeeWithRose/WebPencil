(window.webpackJsonp=window.webpackJsonp||[]).push([[6,29],{36:function(e,t,n){e.exports={layerPannel:"layerPannel_e799a",pannelWrap:"pannelWrap_b4fbf",canvases:"canvases_b0d45",active:"active_1674e"}},50:function(e,t){e.exports=function(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}},56:function(e,t){var n=Array.isArray;e.exports=n},59:function(e,t,n){"use strict";(function(e){var r,a=n(60),o=n.n(a),c=n(0);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u,l,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},s=function(e,t){var n=t.getContext("2d");n&&(n.clearRect(0,0,t.width,t.height),n.drawImage(e,0,0,e.width,e.height,0,0,t.width,t.height))},d=function(e,t){var n=o()(e.current,(function(e){return e.layerId})),r=t.current;i(n).forEach((function(t){var n=r[t.layerId];if(n){console.log("map..",t.layerId),s(t.canvas,n);var a=e.current.findIndex((function(e){return e.layerId===t.layerId}));e.current.splice(a,1)}}))},y=function(e,t,n){var r=function(){return d(t,n)};return Object(c.useEffect)(r,[e]),{copyCanvas:r}};f(y,"useEffect{}"),t.a=y,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"mapCanvas","D:\\code\\WebPencil\\src\\hooks\\use-copy-layer.ts"),u.register(d,"copCanvas","D:\\code\\WebPencil\\src\\hooks\\use-copy-layer.ts"),u.register(y,"default","D:\\code\\WebPencil\\src\\hooks\\use-copy-layer.ts")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,n(3)(e))},60:function(e,t,n){var r=n(61),a=n(62);e.exports=function(e,t){return e&&e.length?a(e,r(t,2)):[]}},61:function(e,t){e.exports=function(e){return e}},62:function(e,t,n){var r=n(63),a=n(64),o=n(65),c=n(66),i=n(67),u=n(68);e.exports=function(e,t,n){var l=-1,f=a,s=e.length,d=!0,y=[],p=y;if(n)d=!1,f=o;else if(s>=200){var v=t?null:i(e);if(v)return u(v);d=!1,f=c,p=new r}else p=t?[]:y;e:for(;++l<s;){var b=e[l],h=t?t(b):b;if(b=n||0!==b?b:0,d&&h==h){for(var m=p.length;m--;)if(p[m]===h)continue e;t&&p.push(h),y.push(b)}else f(p,h,n)||(p!==y&&p.push(h),y.push(b))}return y}},63:function(e,t,n){var r=n(56);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return r(e)?e:[e]}},64:function(e,t,n){var r=n(50);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},65:function(e,t){e.exports=function(e,t,n){for(var r=-1,a=null==e?0:e.length;++r<a;)if(n(t,e[r]))return!0;return!1}},66:function(e,t,n){var r=n(50);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},67:function(e,t){e.exports=function(){}},68:function(e,t){e.exports=function(){return[]}},7:function(e,t,n){"use strict";n.r(t),function(e){var r,a=n(0),o=n.n(a),c=n(1),i=n(36),u=n.n(i),l=n(59);function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d,y,p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(e){var t=e.pCanvasController,n=s(Object(a.useState)([]),2),r=n[0],i=n[1],d=Object(a.useRef)({}),y=Object(a.useRef)([]),p=Object(l.a)(r,y,d).copyCanvas,v=s(Object(a.useState)(""),2),b=v[0],h=v[1],m=s(Object(a.useState)(!1),2),g=m[0],L=m[1],w=function(){L((function(e){return e||setTimeout(p),!e}))};Object(a.useEffect)((function(){var e=function(){var e,n=t.getLayers(),r=f(n);(e=y.current).push.apply(e,f(n)),i((function(e){return[].concat(f(e),f(r))}))};return t.on("init",e),function(){return t.off("init",e)}}),[]),Object(a.useEffect)((function(){var e=function(e){var t=e.data.layerDetail;console.log("onFocusLayer..."),h(t.layerId)},n=function(e){var t=e.data.layerDetail;console.log("onAddLayer"),y.current.push(t),i((function(e){return[t].concat(f(e))}))},r=function(e){var t=e.data.layerDetail;i((function(e){var n=e.indexOf(t);return n>-1&&e.splice(n,1),f(e)}))},a=function(e){var t=e.data.layerDetail,n=e.creator;t&&(y.current.push(t),setTimeout(p),"user"===n&&L(!1))};return t.on("addLayer",n),t.on("contentChange",a),t.on("focusLayer",e),t.on("removeLayer",r),function(){t.off("contentChange",a),t.off("addLayer",n),t.off("focusLayer",e),t.off("removeLayer",r)}}),[]);return o.a.createElement("div",null,o.a.createElement(c.Tag,{onPointerUp:w},"111"),o.a.createElement(c.Drawer,{title:null,width:200,visible:g,onClose:w,mask:!1},o.a.createElement(c.List,{header:o.a.createElement("span",{onPointerUp:function(){t.addLayer()}},"addlayer +"),className:u.a.pannelWrap,itemLayout:"horizontal",dataSource:r,rowKey:"layerId",renderItem:function(e,n){var a=e.visible,i=e.layerId;e.name;return o.a.createElement(c.List.Item,{className:i===b?u.a.active:""},o.a.createElement(c.List.Item.Meta,{avatar:o.a.createElement("canvas",{onPointerUp:function(){return n=e,void t.focusLayer(n);var n},key:i,id:i,ref:function(e){d.current[i]=e},className:u.a.canvases,width:"45",height:"45"}),title:o.a.createElement("span",null,"layer ".concat(r.length-n)),description:o.a.createElement("div",null,o.a.createElement("span",null,a?"visible":"unvisible"),o.a.createElement("span",{onPointerUp:function(){return n=e,void t.removeLayer(n);var n}},"remove"))}))}})))};p(v,"useState{[layers, setLayers]([])}\nuseRef{canvasesRef}\nuseRef{needUpdateRef}\nuseCopyLayer{{ copyCanvas }}\nuseState{[ activeLayerId, setActiveLayerId ]('')}\nuseState{[ showLayerDraw, setShowLayerDraw ](false)}\nuseEffect{}\nuseEffect{}",(function(){return[l.a]})),t.default=v,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(v,"default","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\layer-pannel\\index.tsx"),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,n(3)(e))}}]);