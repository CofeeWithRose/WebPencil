(window.webpackJsonp=window.webpackJsonp||[]).push([[1,27,28,29],[,,,,,,,,,function(e,t,n){"use strict";n.r(t),function(e){var r,o=n(0),a=n.n(o),i=n(34),c=n.n(i),l=n(1),u=n(25),s=n(22);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d,p,y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(e){var t=e.value,n=e.onChange,r=e.defaultValue,i=f(Object(o.useState)(!1),2),d=i[0],p=i[1],y=f(Object(o.useState)(r||s.RGBA.BLACK),2),v=y[0],b=y[1];Object(o.useEffect)((function(){t&&b(t)}),[t]);var m=function(){p((function(e){return!e}))};return a.a.createElement(o.Fragment,null,a.a.createElement("div",{style:{backgroundColor:v.toRGBAString()},className:c.a.colorBar,onPointerUp:m}),a.a.createElement(l.Drawer,{title:"colors",visible:d,onClose:m,mask:!1},a.a.createElement(u.default,{value:v,onChange:function(e){b(e),n&&n(e)}})))};y(v,"useState{[showColorPanel, setShowColorPannel](false)}\nuseState{[rgba, setRGBA](defaultValue|| RGBA.BLACK)}\nuseEffect{}"),t.default=v,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(v,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/index.tsx"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,n(3)(e))},function(e,t,n){"use strict";n.r(t),function(e){var r,o=n(0),a=n.n(o),i=n(1),c=n(39),l=n.n(c),u=n(65);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d,p,y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(e){var t=e.pCanvasController,n=f(Object(o.useState)([]),2),r=n[0],c=n[1],d=Object(o.useRef)({}),p=Object(o.useRef)([]),y=Object(u.a)(r,p,d).copyCanvas,v=f(Object(o.useState)(""),2),b=v[0],m=v[1],h=f(Object(o.useState)(!1),2),g=h[0],x=h[1],w=function(){x((function(e){return e||setTimeout(y),!e}))};Object(o.useEffect)((function(){var e=function(){for(var e=t.getLayers(),n=[],r=e.length-1;r>=0;r--){var o=e[r];n.push(o),p.current.push(o)}c((function(e){return[].concat(s(e),n)}))};return t.on("init",e),function(){return t.off("init",e)}}),[]),Object(o.useEffect)((function(){var e=function(e){var t=e.data.layerDetail;console.log("onFocusLayer..."),m(t.layerId)},n=function(e){var t=e.data.layerDetail;console.log("onAddLayer"),p.current.push(t),c((function(e){return[t].concat(s(e))}))},r=function(e){var t=e.data.layerDetail;c((function(e){var n=e.indexOf(t);return n>-1&&e.splice(n,1),s(e)}))},o=function(e){var t=e.data.layerDetail,n=e.creator;t&&(p.current.push(t),setTimeout(y),"user"===n&&x(!1))};return t.on("addLayer",n),t.on("contentChange",o),t.on("focusLayer",e),t.on("removeLayer",r),function(){t.off("contentChange",o),t.off("addLayer",n),t.off("focusLayer",e),t.off("removeLayer",r)}}),[]);return a.a.createElement("div",null,a.a.createElement(i.Tag,{onPointerUp:w},"111"),a.a.createElement(i.Drawer,{title:null,width:200,visible:g,onClose:w,mask:!1},a.a.createElement(i.List,{header:a.a.createElement("span",{onPointerUp:function(){t.addLayer()}},"addlayer +"),className:l.a.pannelWrap,itemLayout:"horizontal",dataSource:r,rowKey:"layerId",renderItem:function(e,n){var o=e.visible,c=e.layerId;e.name;return a.a.createElement(i.List.Item,{className:c===b?l.a.active:""},a.a.createElement(i.List.Item.Meta,{avatar:a.a.createElement("canvas",{onPointerUp:function(){return n=e,void t.focusLayer(n);var n},key:c,id:c,ref:function(e){d.current[c]=e},className:l.a.canvases,width:"45",height:"45"}),title:a.a.createElement("span",null,"layer ".concat(r.length-n)),description:a.a.createElement("div",null,a.a.createElement("span",null,o?"visible":"unvisible"),a.a.createElement("span",{onPointerUp:function(){return n=e,void t.removeLayer(n);var n}},"remove"))}))}})))};y(v,"useState{[layers, setLayers]([])}\nuseRef{canvasesRef}\nuseRef{needUpdateRef}\nuseCopyLayer{{ copyCanvas }}\nuseState{[ activeLayerId, setActiveLayerId ]('')}\nuseState{[ showLayerDraw, setShowLayerDraw ](false)}\nuseEffect{}\nuseEffect{}",(function(){return[u.a]})),t.default=v,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(v,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/layer-pannel/index.tsx"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,n(3)(e))},function(e,t,n){"use strict";n.r(t),function(e){var r,o=n(0),a=n.n(o),i=n(9),c=n(22),l=n(42),u=n.n(l),s=n(10);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var f,d,p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=c.RGBA.BLACK,v=function(e){var t=e.pCanvasController,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;t.setColor(e)};return Object(o.useEffect)((function(){if(t)return t.on("init",(function(){return n()})),t.off("init",(function(){return n()}))}),[]),a.a.createElement("div",{className:u.a.topToolBar},a.a.createElement(s.default,{pCanvasController:t}),a.a.createElement(i.default,{defaultValue:y,onChange:n}))};p(v,"useEffect{}"),t.default=v,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(y,"DEFAULT_COLOR","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/index.tsx"),f.register(v,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/index.tsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}.call(this,n(3)(e))},,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t),function(e){var r,o=n(57),a=n.n(o),i=n(0),c=n.n(i),l=n(34),u=n.n(l),s=n(22);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v,b,m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=function(e,t,n){var r=t.pixX,o=t.pixY,a=t.pixR,i=t.pixWidth,c=t.start,l=t.end,u=a-i,s={x:r+Math.cos(c)*u,y:o+Math.sin(c)*u},f={x:r+Math.cos(c)*a,y:o+Math.sin(c)*a},d={x:r+Math.cos(l)*u,y:o+Math.sin(l)*u},p=n.toRGBAString();e.beginPath(),e.fillStyle=p,e.strokeStyle=p,e.moveTo(s.x,s.y),e.lineTo(f.x,f.y),e.arc(r,o,a,c,l),e.lineTo(d.x,d.y),e.arc(r,o,u,l,c,!0),e.closePath(),e.fill(),e.stroke()},g=function(e,t){for(var n=[new s.RGBA(255,0,0),new s.RGBA(255,255,0),new s.RGBA(0,255,0),new s.RGBA(0,255,255),new s.RGBA(0,0,255),new s.RGBA(255,0,255),new s.RGBA(255,0,0)],r=2*Math.PI/6,o=0;o<n.length-1;o++)for(var a=s.RGBA.Lerp(n[o],n[o+1],255),i=o*r,c=((o+1)*r-i)/a.length,l=0;l<a.length-1;l++)h(e,p({},t,{start:i+c*l,end:i+c*(l+1)}),a[l])},x=function(e,t,n){var r=t.pixX,o=t.pixY,a=t.pixR,i=t.pixWidth,c=Math.sin(.25*Math.PI)*(a-i),l=2*c;e.clearRect(r-c,o-c,l,l);var u=e.createLinearGradient(r-c,o+c,r-c,o-c);u.addColorStop(0,n),u.addColorStop(1,"white"),e.fillStyle=u,e.fillRect(r-c,o-c,l,l);var s=e.createLinearGradient(r-c,o-c,r+c,o-c);s.addColorStop(0,"black"),s.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=s,e.fillRect(r-c,o-c,l,l)},w=function(e,t){var n=t.x,r=t.y,o=t.width,a=t.r,i=Math.sin(.25*Math.PI)*(a-o),c=n-i,l=n+i,u=r-i,s=r+i;return e.x>c&&e.x<l&&e.y>u&&e.y<s},L=function(e,t){var n=t.x,r=t.y,o=t.width,a=t.r,i=Math.pow(e.x-n,2)+Math.pow(e.y-r,2),c=Math.pow(a,2);return i>Math.pow(a-o,2)&&i<c?"circle":w(e,t)?"round":null},P=function(e,t){var n=t.x,r=t.y,o=t.width,a=t.r-.5*o,i=e.x-n,c=e.y-r,l=Math.sqrt(Math.pow(i,2)+Math.pow(c,2));return{x:n+i*a/l,y:r+c*a/l}},G=function(e,t){var n=t.x,r=t.y,o=t.width,a=t.r,i=(Math.sin(.25*Math.PI),e.x-n),c=e.y-r;Math.sqrt(Math.pow(i,2)+Math.pow(c,2));if(w(e,t))return e},S=function(e,t){for(var n=t.x,r=t.y,o=e.x-n,a=r-e.y,i=Math.atan2(a,o),c=1-(i>=0?i:i+2*Math.PI)/(2*Math.PI),l=[new s.RGBA(255,0,0),new s.RGBA(255,255,0),new s.RGBA(0,255,0),new s.RGBA(0,255,255),new s.RGBA(0,0,255),new s.RGBA(255,0,255),new s.RGBA(255,0,0)],u=0;u<6;u++){var f=u*(1/6),d=(u+1)*(1/6);if(c>f&&c<d)return s.RGBA.getLerpColor(l[u],l[u+1],1-(d-c)/(1/6));if(c===f)return l[u];if(c===d)return l[u+1]}return s.RGBA.BLACK},A=function(e,t,n,r,o){var a=n-o,i=r-o,c=2*o,l=1-Math.max(Math.min((e.y-i)/c,1),0),u=Math.max(Math.min((e.x-a)/c,1),0);return s.RGBA.mix(s.RGBA.mix(t,s.RGBA.WHITE,l),s.RGBA.BLACK,1-u)},O=a()((function(e,t,n,r){var o=S(t,{x:r.x,y:r.y}),a=Math.cos(.25*Math.PI)*r.r-r.width;e&&e(A(n,o,r.x,r.y,a))}),200),E=function(e){var t=e.value,n=e.onChange,r=f(Object(i.useState)({x:0,y:0}),2),o=r[0],a=r[1],l=f(Object(i.useState)({x:0,y:0}),2),s=l[0],d=l[1],p=f(Object(i.useState)(null),2),y=p[0],v=p[1],b=f(Object(i.useState)(),2),m=b[0],h=b[1],w=f(Object(i.useState)(),2),A=w[0],E=w[1],j=Object(i.useRef)({isSelecting:!1}),C=Object(i.useRef)(null);Object(i.useEffect)((function(){console.log(t)}),[t]),Object(i.useEffect)((function(){if(C.current){var e=C.current.getContext("2d"),t=C.current.clientWidth*devicePixelRatio;if(C.current.width=t,C.current.height=t,e){E(e);var n=.5*C.current.clientWidth,r=.5*C.current.width,o={x:n,y:n,r:n-10,width:30,pixX:r,pixY:r,pixR:r-10*devicePixelRatio,pixWidth:30*devicePixelRatio};x(e,o,"rgb(255,0,0)"),g(e,o),h(o),a({x:n+o.r,y:n}),d({x:n,y:n})}}}),[C.current]);return Object(i.useMemo)((function(){return m&&O(n,o,s,m)}),[o,s]),c.a.createElement("div",{className:u.a.colorPannelWrap},c.a.createElement("canvas",{ref:C,className:u.a.colorPannel}),c.a.createElement("div",{className:u.a.circlePoint,style:{transform:"translate3d(".concat(o.x-5,"px, ").concat(o.y-5,"px, 0)")}}),c.a.createElement("div",{style:{transform:"translate3d(".concat(s.x-5,"px, ").concat(s.y-5,"px, 0)")},className:u.a.selectPoint}),c.a.createElement("div",{className:u.a.canvasCover,style:{height:"".concat(m&&2*m.x,"px")},onPointerDown:function(e){var t=e.nativeEvent,n=t.offsetX,r=t.offsetY;if(m){j.current.isSelecting=!0,v(L({x:n,y:r},m));var o=L({x:n,y:r},m);"circle"===o&&a(P({x:n,y:r},m)),"round"===o&&d({x:n,y:r})}},onPointerUp:function(){j.current.isSelecting=!1,v(null)},onPointerMove:function(e){var t=e.nativeEvent,n=t.offsetX,r=t.offsetY;if(j.current.isSelecting&&m&&y){if("circle"===y&&A){a(P({x:n,y:r},m));var o=S({x:n,y:r},{x:m.x,y:m.y});x(A,m,o.toRGBAString())}if("round"===y){var i=G({x:n,y:r},m);i&&d(i)}}}}))};m(E,"useState{[circlePoint, setCirclePoint]({x: 0, y:0})}\nuseState{[ selectPoint, setSelectPoint ]({x: 0, y:0})}\nuseState{[ pointType,  setPointType ](null)}\nuseState{[cirleInfo, setCircleInfo ]}\nuseState{[ctx, setCtx]}\nuseRef{operateInfo}\nuseRef{canvas}\nuseEffect{}\nuseEffect{}\nuseMemo{}"),t.default=E,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(h,"drawCircleFragment","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(g,"drawCircle","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(x,"drawSelectArea","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(w,"isInSelectArea","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(L,"getPointType","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(P,"getCirclePosition","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(G,"getSelectPoint","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(S,"getStandardColor","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(A,"getSelectColor","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(O,"handleChange","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx"),v.register(E,"default","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,n(3)(e))},,,,,,,,,function(e,t,n){e.exports={colorBar:"colorBar_22b99",colorPannelWrap:"colorPannelWrap_94f56",colorPannel:"colorPannel_02c11",circlePoint:"circlePoint_0a8ba",selectPoint:"selectPoint_5aa22",canvasCover:"canvasCover_4958d"}},,,,,function(e,t,n){e.exports={layerPannel:"layerPannel_e799a",pannelWrap:"pannelWrap_b4fbf",canvases:"canvases_b0d45",active:"active_1674e"}},,,function(e,t,n){e.exports={topToolBar:"topToolBar_7b6e5"}},,,,,,,,,,,,,,,function(e,t,n){var r=n(58),o=n(59),a=n(60),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,u,s,f,d,p,y=0,v=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=l,r=u;return l=u=void 0,y=t,f=e.apply(r,n)}function g(e){return y=e,d=setTimeout(w,t),v?h(e):f}function x(e){var n=e-p;return void 0===p||n>=t||n<0||b&&e-y>=s}function w(){var e=o();if(x(e))return L(e);d=setTimeout(w,function(e){var n=t-(e-p);return b?c(n,s-(e-y)):n}(e))}function L(e){return d=void 0,m&&l?h(e):(l=u=void 0,f)}function P(){var e=o(),n=x(e);if(l=arguments,u=this,p=e,n){if(void 0===d)return g(p);if(b)return clearTimeout(d),d=setTimeout(w,t),h(p)}return void 0===d&&(d=setTimeout(w,t)),f}return t=a(t)||0,r(n)&&(v=!!n.leading,s=(b="maxWait"in n)?i(a(n.maxWait)||0,t):s,m="trailing"in n?!!n.trailing:m),P.cancel=function(){void 0!==d&&clearTimeout(d),y=0,l=p=u=d=void 0},P.flush=function(){return void 0===d?f:L(o())},P}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(44);e.exports=function(){return r.Date.now()}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},,,,function(e,t,n){"use strict";(function(e){var r,o=n(66),a=n.n(o),i=n(0);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var l,u,s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e,t){var n=t.getContext("2d");n&&(n.clearRect(0,0,t.width,t.height),n.drawImage(e,0,0,e.width,e.height,0,0,t.width,t.height))},d=function(e,t){var n=a()(e.current,(function(e){return e.layerId})),r=t.current;c(n).forEach((function(t){var n=r[t.layerId];if(n){console.log("map..",t.layerId),f(t.canvas,n);var o=e.current.findIndex((function(e){return e.layerId===t.layerId}));e.current.splice(o,1)}}))},p=function(e,t,n){var r=function(){return d(t,n)};return Object(i.useEffect)(r,[e]),{copyCanvas:r}};s(p,"useEffect{}"),t.a=p,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(f,"mapCanvas","/Users/muyin/Documents/code/WebPencil/src/hooks/use-copy-layer.ts"),l.register(d,"copCanvas","/Users/muyin/Documents/code/WebPencil/src/hooks/use-copy-layer.ts"),l.register(p,"default","/Users/muyin/Documents/code/WebPencil/src/hooks/use-copy-layer.ts")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,n(3)(e))},function(e,t,n){var r=n(67),o=n(68);e.exports=function(e,t){return e&&e.length?o(e,r(t,2)):[]}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(69),o=n(70),a=n(71),i=n(72),c=n(73),l=n(74);e.exports=function(e,t,n){var u=-1,s=o,f=e.length,d=!0,p=[],y=p;if(n)d=!1,s=a;else if(f>=200){var v=t?null:c(e);if(v)return l(v);d=!1,s=i,y=new r}else y=t?[]:p;e:for(;++u<f;){var b=e[u],m=t?t(b):b;if(b=n||0!==b?b:0,d&&m==m){for(var h=y.length;h--;)if(y[h]===m)continue e;t&&y.push(m),p.push(b)}else s(y,m,n)||(y!==p&&y.push(m),p.push(b))}return p}},function(e,t,n){var r=n(47);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return r(e)?e:[e]}},function(e,t,n){var r=n(61);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},function(e,t){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},function(e,t,n){var r=n(61);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(){return[]}}]]);