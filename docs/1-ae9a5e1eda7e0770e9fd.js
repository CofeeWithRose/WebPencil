(window.webpackJsonp=window.webpackJsonp||[]).push([[1,24,25,26],[,,,,,,,,function(e,t,r){"use strict";r.r(t),function(e){var n,o=r(0),a=r.n(o),i=r(32),c=r.n(i),l=r(1),u=r(23),f=r(21);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var d,p,v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=function(e){var t=e.value,r=e.onChange,n=e.defaultValue,i=s(Object(o.useState)(!1),2),d=i[0],p=i[1],v=s(Object(o.useState)(n||f.RGBA.BLACK),2),y=v[0],b=v[1];Object(o.useEffect)((function(){t&&b(t)}),[t]);var h=function(){p((function(e){return!e}))};return a.a.createElement(o.Fragment,null,a.a.createElement("div",{style:{backgroundColor:y.toRGBAString()},className:c.a.colorBar,onClick:h}),a.a.createElement(l.Drawer,{title:"colors",visible:d,onClose:h},a.a.createElement(u.default,{value:y,onChange:function(e){b(e),r&&r(e)}})))};v(y,"useState{[showColorPanel, setShowColorPannel](false)}\nuseState{[rgba, setRGBA](defaultValue|| RGBA.BLACK)}\nuseEffect{}"),t.default=y,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(y,"default","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\index.tsx"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,r(3)(e))},function(e,t,r){"use strict";r.r(t),function(e){var n,o=r(0),a=r.n(o),i=r(1),c=r(51),l=r(36),u=r.n(l),f=r(62);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var p,v,y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=e.pCanvasController,r=d(Object(o.useState)([]),2),n=r[0],l=r[1],p=Object(o.useRef)({}),v=Object(o.useRef)([]),y=Object(f.a)(n,v,p).copyCanvas,b=d(Object(o.useState)(""),2),h=b[0],g=b[1],x=d(Object(o.useState)(!1),2),m=x[0],w=x[1],L=function(){w((function(e){return e||setTimeout(y),!e}))};Object(o.useEffect)((function(){var e=function(){for(var e=t.getLayers(),r=[],n=e.length-1;n>=0;n--){var o,a=e[n];if(a.type===c.b.NORMAL&&(r.push(a),v.current.push(a)),a.type===c.b.TEMP_COVER)g(null===(o=e[n+1])||void 0===o?void 0:o.layerId)}l((function(e){return[].concat(s(e),r)}))};return t.on("init",e),function(){return t.off("init",e)}}),[]),Object(o.useEffect)((function(){var e=function(e){console.log("onFocusLayer..."),g(e.layerId)},r=function(e){console.log("onAddLayer"),e.type===c.b.NORMAL&&(v.current.push(e),l((function(t){return[e].concat(s(t))})))},n=function(e){l((function(t){var r=t.indexOf(e);return r>-1&&t.splice(r,1),s(t)}))},o=function(e){e&&v.current.push(e)};return t.on("addLayer",r),t.on("contentChange",o),t.on("focusLayer",e),t.on("removeLayer",n),function(){t.off("contentChange",o),t.off("addLayer",r),t.off("focusLayer",e),t.off("removeLayer",n)}}),[]);return a.a.createElement("div",null,a.a.createElement(i.Tag,{onClick:L},"111"),a.a.createElement(i.Drawer,{title:null,width:200,visible:m,onClose:L},a.a.createElement(i.List,{header:a.a.createElement("span",{onClick:function(){t.addLayer()}},"+"),className:u.a.pannelWrap,itemLayout:"horizontal",dataSource:n,rowKey:"layerId",renderItem:function(e,r){var o=e.visible,c=e.layerId;e.name;return a.a.createElement(i.List.Item,{className:c===h?u.a.active:""},a.a.createElement(i.List.Item.Meta,{avatar:a.a.createElement("canvas",{onClick:function(){return r=e,void t.focusLayer(r);var r},key:c,id:c,ref:function(e){p.current[c]=e},className:u.a.canvases,width:"45",height:"45"}),title:a.a.createElement("span",null,"layer ".concat(n.length-r)),description:a.a.createElement("div",null,a.a.createElement("span",null,o?"visible":"unvisible"),a.a.createElement("span",{onClick:function(){return r=e,void t.removeLayer(r);var r}},"remove"))}))}})))};y(b,"useState{[layers, setLayers]([])}\nuseRef{canvasesRef}\nuseRef{needUpdateRef}\nuseCopyLayer{{ copyCanvas }}\nuseState{[ activeLayerId, setActiveLayerId ]('')}\nuseState{[ showLayerDraw, setShowLayerDraw ](false)}\nuseEffect{}\nuseEffect{}",(function(){return[f.a]})),t.default=b,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&p.register(b,"default","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\layer-pannel\\index.tsx"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}.call(this,r(3)(e))},function(e,t,r){"use strict";r.r(t),function(e){var n,o=r(0),a=r.n(o),i=r(8),c=r(21),l=r(39),u=r.n(l),f=r(9);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var s,d,p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=c.RGBA.BLACK,y=function(e){var t=e.pCanvasController,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;t.setColor(e)};return Object(o.useEffect)((function(){if(t)return t.on("init",r),t.off("init",r)}),[]),a.a.createElement("div",{className:u.a.topToolBar},a.a.createElement(f.default,{pCanvasController:t}),a.a.createElement(i.default,{defaultValue:v,onChange:r}))};p(y,"useEffect{}"),t.default=y,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(v,"DEFAULT_COLOR","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\index.tsx"),s.register(y,"default","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\index.tsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}.call(this,r(3)(e))},,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t),function(e){var n,o=r(54),a=r.n(o),i=r(0),c=r.n(i),l=r(32),u=r.n(l),f=r(21);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var y,b,h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(e,t,r){var n=t.pixX,o=t.pixY,a=t.pixR,i=t.pixWidth,c=t.start,l=t.end,u=a-i,f={x:n+Math.cos(c)*u,y:o+Math.sin(c)*u},s={x:n+Math.cos(c)*a,y:o+Math.sin(c)*a},d={x:n+Math.cos(l)*u,y:o+Math.sin(l)*u},p=r.toRGBAString();e.beginPath(),e.fillStyle=p,e.strokeStyle=p,e.moveTo(f.x,f.y),e.lineTo(s.x,s.y),e.arc(n,o,a,c,l),e.lineTo(d.x,d.y),e.arc(n,o,u,l,c,!0),e.closePath(),e.fill(),e.stroke()},x=function(e,t){for(var r=[new f.RGBA(255,0,0),new f.RGBA(255,255,0),new f.RGBA(0,255,0),new f.RGBA(0,255,255),new f.RGBA(0,0,255),new f.RGBA(255,0,255),new f.RGBA(255,0,0)],n=2*Math.PI/6,o=0;o<r.length-1;o++)for(var a=f.RGBA.Lerp(r[o],r[o+1],255),i=o*n,c=((o+1)*n-i)/a.length,l=0;l<a.length-1;l++)g(e,p({},t,{start:i+c*l,end:i+c*(l+1)}),a[l])},m=function(e,t,r){var n=t.pixX,o=t.pixY,a=t.pixR,i=t.pixWidth,c=Math.sin(.25*Math.PI)*(a-i),l=2*c;e.clearRect(n-c,o-c,l,l);var u=e.createLinearGradient(n-c,o+c,n-c,o-c);u.addColorStop(0,r),u.addColorStop(1,"white"),e.fillStyle=u,e.fillRect(n-c,o-c,l,l);var f=e.createLinearGradient(n-c,o-c,n+c,o-c);f.addColorStop(0,"black"),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.fillRect(n-c,o-c,l,l)},w=function(e,t){var r=t.x,n=t.y,o=t.width,a=t.r,i=Math.sin(.25*Math.PI)*(a-o),c=r-i,l=r+i,u=n-i,f=n+i;return e.x>c&&e.x<l&&e.y>u&&e.y<f},L=function(e,t){var r=t.x,n=t.y,o=t.width,a=t.r,i=Math.pow(e.x-r,2)+Math.pow(e.y-n,2),c=Math.pow(a,2);return i>Math.pow(a-o,2)&&i<c?"circle":w(e,t)?"round":null},G=function(e,t){var r=t.x,n=t.y,o=t.width,a=t.r-.5*o,i=e.x-r,c=e.y-n,l=Math.sqrt(Math.pow(i,2)+Math.pow(c,2));return{x:r+i*a/l,y:n+c*a/l}},P=function(e,t){var r=t.x,n=t.y,o=t.width,a=t.r,i=(Math.sin(.25*Math.PI),e.x-r),c=e.y-n;Math.sqrt(Math.pow(i,2)+Math.pow(c,2));if(w(e,t))return e},A=function(e,t){for(var r=t.x,n=t.y,o=e.x-r,a=n-e.y,i=Math.atan2(a,o),c=1-(i>=0?i:i+2*Math.PI)/(2*Math.PI),l=[new f.RGBA(255,0,0),new f.RGBA(255,255,0),new f.RGBA(0,255,0),new f.RGBA(0,255,255),new f.RGBA(0,0,255),new f.RGBA(255,0,255),new f.RGBA(255,0,0)],u=0;u<6;u++){var s=u*(1/6),d=(u+1)*(1/6);if(c>s&&c<d)return f.RGBA.getLerpColor(l[u],l[u+1],1-(d-c)/(1/6));if(c===s)return l[u];if(c===d)return l[u+1]}return f.RGBA.BLACK},S=function(e,t,r,n,o){var a=r-o,i=n-o,c=2*o,l=1-Math.max(Math.min((e.y-i)/c,1),0),u=Math.max(Math.min((e.x-a)/c,1),0);return f.RGBA.mix(f.RGBA.mix(t,f.RGBA.WHITE,l),f.RGBA.BLACK,1-u)},O=a()((function(e,t,r,n){var o=A(t,{x:n.x,y:n.y}),a=Math.cos(.25*Math.PI)*n.r-n.width;e&&e(S(r,o,n.x,n.y,a))}),200),C=function(e){var t=e.value,r=e.onChange,n=s(Object(i.useState)({x:0,y:0}),2),o=n[0],a=n[1],l=s(Object(i.useState)({x:0,y:0}),2),f=l[0],d=l[1],p=s(Object(i.useState)(null),2),v=p[0],y=p[1],b=s(Object(i.useState)(),2),h=b[0],g=b[1],w=s(Object(i.useState)(),2),S=w[0],C=w[1],E=Object(i.useRef)({isSelecting:!1}),R=Object(i.useRef)(null);Object(i.useEffect)((function(){console.log(t)}),[t]),Object(i.useEffect)((function(){if(R.current){var e=R.current.getContext("2d"),t=R.current.clientWidth*devicePixelRatio;if(R.current.width=t,R.current.height=t,e){C(e);var r=.5*R.current.clientWidth,n=.5*R.current.width,o={x:r,y:r,r:r-10,width:30,pixX:n,pixY:n,pixR:n-10*devicePixelRatio,pixWidth:30*devicePixelRatio};m(e,o,"rgb(255,0,0)"),x(e,o),g(o),a({x:r+o.r,y:r}),d({x:r,y:r})}}}),[R.current]);return Object(i.useMemo)((function(){return h&&O(r,o,f,h)}),[o,f]),c.a.createElement("div",{className:u.a.colorPannelWrap},c.a.createElement("canvas",{ref:R,className:u.a.colorPannel}),c.a.createElement("div",{className:u.a.circlePoint,style:{transform:"translate3d(".concat(o.x-5,"px, ").concat(o.y-5,"px, 0)")}}),c.a.createElement("div",{style:{transform:"translate3d(".concat(f.x-5,"px, ").concat(f.y-5,"px, 0)")},className:u.a.selectPoint}),c.a.createElement("div",{className:u.a.canvasCover,style:{height:"".concat(h&&2*h.x,"px")},onPointerDown:function(e){var t=e.nativeEvent,r=t.offsetX,n=t.offsetY;if(h){E.current.isSelecting=!0,y(L({x:r,y:n},h));var o=L({x:r,y:n},h);"circle"===o&&a(G({x:r,y:n},h)),"round"===o&&d({x:r,y:n})}},onPointerUp:function(){E.current.isSelecting=!1,y(null)},onPointerMove:function(e){var t=e.nativeEvent,r=t.offsetX,n=t.offsetY;if(E.current.isSelecting&&h&&v){if("circle"===v&&S){a(G({x:r,y:n},h));var o=A({x:r,y:n},{x:h.x,y:h.y});m(S,h,o.toRGBAString())}if("round"===v){var i=P({x:r,y:n},h);i&&d(i)}}}}))};h(C,"useState{[circlePoint, setCirclePoint]({x: 0, y:0})}\nuseState{[ selectPoint, setSelectPoint ]({x: 0, y:0})}\nuseState{[ pointType,  setPointType ](null)}\nuseState{[cirleInfo, setCircleInfo ]}\nuseState{[ctx, setCtx]}\nuseRef{operateInfo}\nuseRef{canvas}\nuseEffect{}\nuseEffect{}\nuseMemo{}"),t.default=C,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"drawCircleFragment","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(x,"drawCircle","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(m,"drawSelectArea","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(w,"isInSelectArea","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(L,"getPointType","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(G,"getCirclePosition","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(P,"getSelectPoint","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(A,"getStandardColor","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(S,"getSelectColor","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(O,"handleChange","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),y.register(C,"default","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,r(3)(e))},,,,,,,,,function(e,t,r){e.exports={colorBar:"colorBar_22b99",colorPannelWrap:"colorPannelWrap_94f56",colorPannel:"colorPannel_02c11",circlePoint:"circlePoint_0a8ba",selectPoint:"selectPoint_5aa22",canvasCover:"canvasCover_4958d"}},,,,function(e,t,r){e.exports={layerPannel:"layerPannel_e799a",pannelWrap:"pannelWrap_b4fbf",canvases:"canvases_b0d45",active:"active_1674e"}},,,function(e,t,r){e.exports={topToolBar:"topToolBar_7b6e5"}},,,,,,,,,,,,,,,function(e,t,r){var n=r(55),o=r(56),a=r(57),i=Math.max,c=Math.min;e.exports=function(e,t,r){var l,u,f,s,d,p,v=0,y=!1,b=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=l,n=u;return l=u=void 0,v=t,s=e.apply(n,r)}function x(e){return v=e,d=setTimeout(w,t),y?g(e):s}function m(e){var r=e-p;return void 0===p||r>=t||r<0||b&&e-v>=f}function w(){var e=o();if(m(e))return L(e);d=setTimeout(w,function(e){var r=t-(e-p);return b?c(r,f-(e-v)):r}(e))}function L(e){return d=void 0,h&&l?g(e):(l=u=void 0,s)}function G(){var e=o(),r=m(e);if(l=arguments,u=this,p=e,r){if(void 0===d)return x(p);if(b)return clearTimeout(d),d=setTimeout(w,t),g(p)}return void 0===d&&(d=setTimeout(w,t)),s}return t=a(t)||0,n(r)&&(y=!!r.leading,f=(b="maxWait"in r)?i(a(r.maxWait)||0,t):f,h="trailing"in r?!!r.trailing:h),G.cancel=function(){void 0!==d&&clearTimeout(d),v=0,l=p=u=d=void 0},G.flush=function(){return void 0===d?s:L(o())},G}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,r){var n=r(41);e.exports=function(){return n.Date.now()}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}},,,,function(e,t,r){"use strict";(function(e){var n,o=r(63),a=r.n(o),i=r(0);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var l,u,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},s=function(e,t){var r=t.getContext("2d");r&&(r.clearRect(0,0,t.width,t.height),r.drawImage(e,0,0,e.width,e.height,0,0,t.width,t.height))},d=function(e,t){var r=a()(e.current,(function(e){return e.layerId})),n=t.current;c(r).forEach((function(t){var r=n[t.layerId];if(r){console.log("map..",t.layerId),s(t.canvas,r);var o=e.current.findIndex((function(e){return e.layerId===t.layerId}));e.current.splice(o,1)}}))},p=function(e,t,r){var n=function(){return d(t,r)};return Object(i.useEffect)(n,[e]),{copyCanvas:n}};f(p,"useEffect{}"),t.a=p,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(s,"mapCanvas","D:\\code\\WebPencil\\src\\hooks\\use-copy-layer.ts"),l.register(d,"copCanvas","D:\\code\\WebPencil\\src\\hooks\\use-copy-layer.ts"),l.register(p,"default","D:\\code\\WebPencil\\src\\hooks\\use-copy-layer.ts")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(3)(e))},function(e,t,r){var n=r(64),o=r(65);e.exports=function(e,t){return e&&e.length?o(e,n(t,2)):[]}},function(e,t){e.exports=function(e){return e}},function(e,t,r){var n=r(66),o=r(67),a=r(68),i=r(69),c=r(70),l=r(71);e.exports=function(e,t,r){var u=-1,f=o,s=e.length,d=!0,p=[],v=p;if(r)d=!1,f=a;else if(s>=200){var y=t?null:c(e);if(y)return l(y);d=!1,f=i,v=new n}else v=t?[]:p;e:for(;++u<s;){var b=e[u],h=t?t(b):b;if(b=r||0!==b?b:0,d&&h==h){for(var g=v.length;g--;)if(v[g]===h)continue e;t&&v.push(h),p.push(b)}else f(v,h,r)||(v!==p&&v.push(h),p.push(b))}return p}},function(e,t,r){var n=r(45);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return n(e)?e:[e]}},function(e,t,r){var n=r(58);e.exports=function(e,t){return!!(null==e?0:e.length)&&n(e,t,0)>-1}},function(e,t){e.exports=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}},function(e,t,r){var n=r(58);e.exports=function(e,t){return!!(null==e?0:e.length)&&n(e,t,0)>-1}},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(){return[]}}]]);