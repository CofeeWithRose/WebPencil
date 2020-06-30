(window.webpackJsonp=window.webpackJsonp||[]).push([[15,14,16,19,23,24],[,,,function(t,e,n){"use strict";n.r(e),n.d(e,"Brush",(function(){return i}));var r=n(22);class i{constructor(){this.type=r.BrushType.pen,this.name="default",this.isPainting=!1,this.pathList=[],this.animeHandle=void 0,this.paintPath=t=>{t.clearRect(0,0,t.canvas.width,t.canvas.height),t.beginPath();const e=this.pathList[0];t.moveTo(e.x,e.y);for(let e=1;e<this.pathList.length;e++){const{x:n,y:r}=this.pathList[e];t.lineTo(n,r)}t.stroke()}}init(){}destory(){}onStart(t,e){requestAnimationFrame(()=>{const{curCanvasContext2D:n,color:r,brushWidth:i}=e;this.isPainting=!0,this.pathList.push(t),n.strokeStyle=r,n.lineWidth=i,n.lineCap="round",n.lineJoin="round"})}onDraw(t,e){if(this.isPainting){const{curCanvasContext2D:n}=e;for(let e=0;e<t.length;e++)this.pathList.push(t[e]);cancelAnimationFrame(this.animeHandle),this.animeHandle=requestAnimationFrame(()=>{this.paintPath(n)})}}onEnd(t,{onBrushEnd:e}){requestAnimationFrame(()=>{this.isPainting=!1,this.pathList=[],e()})}}},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"RGBA",(function(){return r}));class r{static Lerp(t,e,n){const i=[],s=(e.r-t.r)/n,a=(e.g-t.g)/n,o=(e.b-t.b)/n,c=(e.a-t.a)/n;for(let e=0;e<n;e++)i.push(new r(t.r+s*e,t.g+a*e,t.b+o*e,t.a+c*e));return i}static mutipy({r:t,g:e,b:n},i){return new r(t*i,e*i,n*i)}static add({r:t,g:e,b:n},i){return new r(t+i.r,e+i.g,n+i.b)}static mix(t,e,n){return new r(t.r+(e.r-t.r)*n,t.g+(e.g-t.g)*n,t.b+(e.b-t.b)*n)}static getLerpColor(t,e,n){const{r:i,g:s,b:a,a:o}=t;return new r((e.r-i)*n+i,(e.g-s)*n+s,(e.b-a)*n+a,(e.a-o)*n+o)}constructor(t,e,n,r=1){this.r=t,this.g=e,this.b=n,this.a=r}toRGBAString(){return`rgba(${this.r},${this.g},${this.b},${this.a})`}}r.BLACK=new r(0,0,0),r.WHITE=new r(255,255,255)},function(t,e,n){"use strict";n.r(e),n.d(e,"BrushStatus",(function(){return r})),n.d(e,"BrushType",(function(){return i})),n.d(e,"AbstractBrush",(function(){return s}));class r{constructor(t,e,n,r,i){this.x=t,this.y=e,this.pressure=n,this.tiltX=r,this.tiltY=i}}let i;!function(t){t[t.pen=1]="pen",t[t.selector=2]="selector"}(i||(i={}));class s{constructor(t,e){this.type=t,this.name=e}init(){}destory(){}onStart(t,e){}onDraw(t,e){}onEnd(t,e){}}},,,function(t,e,n){"use strict";n.r(e),n.d(e,"CanvasEvent",(function(){return u})),n.d(e,"PCanvasController",(function(){return f}));var r=n(21),i=n(26),s=n(60),a=n(27),o=n(77);var c=n(47),h=n(22);class u{constructor(t,e="user"){this.data=t,this.tag=e}}const l=({offsetX:t,offsetY:e,tiltX:n,tiltY:r,pressure:i})=>(i=i>1?.01*i:0===i?1:i,new h.BrushStatus(t,e,i,n,r));class f extends class{constructor(){this.eventEmitter=new o.EventEmitter}on(t,e){const n=e;this.eventEmitter.addListener(t,n)}off(t,e){const n=e;this.eventEmitter.removeListener(t,n)}emit(t,e){setTimeout(()=>{this.eventEmitter.emit(t,e)},1)}}{constructor(...t){super(...t),this.context=void 0,this.layerManager=void 0,this.color=r.RGBA.BLACK,this.tracePointerId=void 0,this.workId=void 0,this.onBrushEnd=()=>{const t=this.layerManager.getFocusDetail(),e=Object(c.a)(t.canvas);this.layerManager.applyTempCanvas();const n=this.layerManager.layers.indexOf(t);this.emit("contentChange",new u({workId:this.workId,layerDetail:t,preContent:e,index:n}))}}async init({wrap:t,cover:e},n){const{width:r,height:s,workId:o}=n.workInfo;t.style.width=`${r}px`,t.style.height=`${s}px`,this.workId=o,this.layerManager=new a.PcanvasLayers({cover:e,wrap:t,width:r,height:s}),this.layerManager.init(n.layers),this.context=new i.PCanvasContext(this.layerManager.getCanvas(),this.layerManager.getContext(),r,s,this.onBrushEnd),this.emit("init",new u(n.workInfo)),this.emit("focusLayer",new u({layerDetail:this.layerManager.getFocusDetail()}))}setColor({r:t,g:e,b:n}){const i=new r.RGBA(t,e,n,this.color.a);this.setRGBA(i)}setRGBA(t){this.context.color=t.toRGBAString(),this.color=t,this.emit("colorchange",new u({color:t}))}setOpacity(t){const{r:e,g:n,b:i}=this.color,s=new r.RGBA(e,n,i,t);this.setRGBA(s)}async getLayers(){return[...this.layerManager.layers]}addLayer(){const t=this.layerManager.addLayer(s.a.create(this.layerManager.wrapInfo));this.layerManager.focusLayer(t);const e=this.layerManager.layers.indexOf(t);this.emit("addLayer",new u({workId:this.workId,layerDetail:t,index:e})),this.emit("focusLayer",new u({layerDetail:t}))}addLayerContent(t,e,n="user"){const{width:r,height:i}=e,a=s.a.create({width:r,height:i}),o=a.canvas.getContext("2d");return null==o||o.drawImage(e,0,0,r,i),this.layerManager.addLayer(a,t),this.emit("addLayer",new u({workId:this.workId,layerDetail:a,index:t},n)),a}setLayerContent(t,e,n="user"){const r=this.layerManager.layers[t],i=r.canvas,{width:s,height:a}=i,o=Object(c.a)(r.canvas),h=r.canvas.getContext("2d");return null==h||h.clearRect(0,0,s,a),null==h||h.drawImage(e,0,0,s,a),this.emit("contentChange",new u({workId:this.workId,layerDetail:r,index:t,preContent:o},n)),r}focusLayer(t){this.layerManager.focusLayer(t),this.emit("focusLayer",new u({layerDetail:t}))}removeLayer(t,e="user"){const{index:n,isFocus:r}=this.layerManager.removeLayer(t);if(this.emit("removeLayer",new u({workId:this.workId,layerDetail:t,index:n},e)),r){const t=this.layerManager.layers[0];this.focusLayer(t),this.emit("focusLayer",new u({layerDetail:t},e))}}removeLayerByIndex(t,e="user"){const n=this.layerManager.layers[t];this.removeLayer(n,e)}setBrushWidth(t){this.context.brushWidth=t}setBrush(t){this.context.brush&&this.context.brush.destory(),t.init(),this.context.brush=t}onPointerDown(t){if(this.tracePointerId)return void(this.tracePointerId=-1);this.tracePointerId=t.pointerId;const e=l(t);this.context.brush.onStart(e,this.context)}onPointerMove(t){if(this.tracePointerId!==t.pointerId)return;let e;e=t.getCoalescedEvents?t.getCoalescedEvents():[t],this.context.brush.onDraw(e.map(t=>l(t)),this.context)}onPointerUp(t){this.tracePointerId=0,this.context.brush.onEnd(l(t),this.context)}}},function(t,e,n){"use strict";n.r(e),n.d(e,"PCanvasContext",(function(){return s}));var r=n(21),i=n(3);class s{constructor(t,e,n,s,a,o=new i.Brush,c=r.RGBA.BLACK.toRGBAString(),h=100){this.curCanvas=t,this.curCanvasContext2D=e,this.width=n,this.height=s,this.onBrushEnd=a,this.brush=o,this.color=c,this.brushWidth=h}}},function(t,e,n){"use strict";n.r(e),n.d(e,"PcanvasLayers",(function(){return i}));var r=n(60);class i{constructor(t){this.wrapInfo=t,this.tempLayer=void 0,this.layers=void 0,this.focusedLayerDetail=void 0}async init(t){const e=this.wrapInfo,{wrap:n,cover:i}=e;let s=i;this.layers=t,t.forEach((t,e)=>{const{canvas:r,layerId:i,visible:a}=t;n.insertBefore(r,s),s=r,a||(r.className="unvisible")}),this.tempLayer=r.a.create(e),n.insertBefore(this.tempLayer.canvas,i),this.focusedLayerDetail=t[0]}getCanvas(){return this.tempLayer.canvas}applyTempCanvas(){const t=this.focusedLayerDetail.canvas.getContext("2d"),e=this.tempLayer.canvas.getContext("2d");if(t&&e){const{width:n,height:r}=this.tempLayer.canvas;t.drawImage(this.tempLayer.canvas,0,0,n,r),e.clearRect(0,0,n,r)}}getFocusDetail(){return this.focusedLayerDetail}focusLayer(t){const e=this.layers[this.layers.indexOf(t)-1],n=e&&e.canvas&&e!==this.tempLayer?e.canvas:this.wrapInfo.cover;this.wrapInfo.wrap.insertBefore(this.tempLayer.canvas,n),this.focusedLayerDetail=t}addLayer(t,e=0){const{wrap:n}=this.wrapInfo,r=this.layers[e-1],i=r&&r.canvas||this.wrapInfo.cover;return n.insertBefore(t.canvas,i),this.layers.splice(e,0,t),t}removeLayer(t){const e=this.layers.indexOf(t);return e>-1&&(this.wrapInfo.wrap.removeChild(t.canvas),this.layers.splice(e,1)),{index:e,isFocus:this.focusedLayerDetail===t}}getContext(){const t=this.tempLayer.canvas.getContext("2d");if(null===t)throw"get context faliled.";return t.imageSmoothingEnabled=!1,t.webkitImageSmoothingEnabled=!1,t}}},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return v}));var r=n(48),i=n.n(r),s=n(58);new(n.n(s).a);const a=(t=0,e=0,n)=>{const r=document.createElement("canvas");r.width=t,r.height=e,r.setAttribute("uuid",i()("canvasId-"));const s=r.getContext("2d");return s&&n&&(s.fillStyle=n.toRGBAString(),s.fillRect(0,0,t,e)),r},o=(t,e)=>{const n=t.getContext("2d");null==n||n.drawImage(e,0,0)},c=t=>{const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d"),r=t.getContext("2d");return n&&r&&(n.imageSmoothingEnabled=!1,n.webkitImageSmoothingEnabled=!1,n.clearRect(0,0,e.width,e.height),n.drawImage(t,0,0,t.width,t.height)),e},h=[];let u=0;const l=async t=>new Promise(e=>{h.push({file:t,cb:e}),(async()=>{if(u<1){let t=h.shift();for(;t;){u++;const{file:e,cb:n}=t,r=new Image,i=URL.createObjectURL(new Blob([e]));r.src=i;const s=document.createElement("canvas");try{await r.decode(),s.width=r.width,s.height=r.height,o(s,r)}catch(t){}URL.revokeObjectURL(i),n(s),u--,t=h.shift()}}})()}),f=t=>new Promise(e=>{t.toBlob(t=>(async(t,e)=>{if(t){const n=URL.createObjectURL(t);e(await(await fetch(n)).arrayBuffer())}else e(null)})(t,e),"image/png",1)}),d=t=>new Promise(e=>{t.toBlob(e)});let y=()=>{const t=a(0,0).toDataURL();return y=()=>t,y()};const v=()=>y()},function(t,e,n){var r=n(54),i=0;t.exports=function(t){var e=++i;return r(t)+e}},function(t,e,n){var r=n(51),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();t.exports=s},function(t,e){t.exports=function(){return!1}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(52))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var r=n(55);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(56),i=n(57),s=n(53),a=n(50),o=r?r.prototype:void 0,c=o?o.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(s(e))return i(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},function(t,e,n){var r=n(49).Symbol;t.exports=r},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},function(t,e,n){t.exports=function(){return new Worker(n.p+"WorkerName.4812e85ebc24635efccf.js")}},,function(t,e,n){"use strict";n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n(61),i=n.n(r),s=n(48),a=n.n(s),o=n(21),c=n(47);class h{constructor(t,e,n="",r,i=Date.now(),s=Date.now(),o=a()(`work_${Date.now()}_`)){this.width=t,this.height=e,this.name=n,this.thumbnail=r,this.createTime=i,this.updateTime=s,this.workId=o}}class u{constructor(t,e=[]){this.workInfo=t,this.layers=e}static createEmpty(t,e,n){const r=new h(t,e,"new work",Object(c.d)()),i=[];return i.push(l.create(r,o.RGBA.WHITE)),new u(r,i)}}class l{constructor(t,e="new layer",n=!0,r=a()(`layer-${Date.now()}-`)){this.canvas=t,this.name=e,this.visible=n,this.layerId=r}static create({width:t,height:e},n){const r=Object(c.b)(t,e,n),i=new l(r);return r.setAttribute("layerId",i.layerId),i}}var f=n(16);const d=(t,e)=>e?`layers/${t}/${e}.png`:`layers/${t}`,y=t=>`thumbnail/${t}.png`;class v{constructor(t){this.workInfo=void 0,this.layers=void 0;const{workInfo:e,layers:n}=t,{thumbnail:r,workId:i,...s}=e;this.workInfo={workId:i,...s,thumbnail:y(i)},this.layers=n.map(({canvas:t,layerId:e,...n})=>({layerId:e,...n,canvas:d(i,e)}))}}class p{static async saveWork(t){if(!t)return;const e=new v(t);await this.saveWorkInfo(e);const n=this.getCanvasFileList(t,e);for(let t=0;t<n.length;t++){const{path:e,canvas:r}=n[t],{path:i,name:s}=f.a.analyzePath(e),a=await Object(c.e)(r);a&&await f.a.save({type:"image/png",path:i,data:a,name:s})}}static async saveWorkInfo(t){await f.a.save({type:"application/json",path:"",name:`${t.workInfo.workId}.json`,data:JSON.stringify(t)})}static getCanvasFileList(t,e){const{layers:n}=t,{layers:r}=e,i=[{path:e.workInfo.thumbnail,canvas:this.combimeCanvas(100,100,n.map(({canvas:t})=>t))}];return n.forEach(({canvas:t},e)=>{i.push({canvas:t,path:r[e].canvas})}),i}static combimeCanvas(t,e,n){const r=Object(c.b)(t,e),i=r.getContext("2d");if(i)for(let t=n.length-1;t>-1;t--){const e=n[t];i.drawImage(e,0,0,e.width,e.height)}return r}static async saveLayerDetail(t,e,n){const{canvas:r,layerId:s,...a}=e,o=await Object(c.e)(r);if(!o)return;const{path:h,name:u}=f.a.analyzePath(d(t,s));f.a.save({type:"image/png",path:h,name:u,data:o});const[{data:l}]=await f.a.get("",`${t}.json`),y=JSON.parse(l),v=y.layers.find(({layerId:t})=>t===s);if(!v&&i()(n)&&(y.layers.splice(n,0,{canvas:d(t,s),layerId:s,...a}),await this.saveWorkInfo(y)),v&&i()(n))throw"add layer fail: "+s}static async removeWork(t){}static async updateLayerDetail(t,e){}static async getWorkDetail(t){const[{data:e}]=await f.a.get("",`${t}.json`),{workInfo:n,layers:r}=JSON.parse(e),i=[],s=(await f.a.get(d(t))).reduce((t,{data:e,name:n})=>({...t,[n]:e}),{}),a=[];for(let t=0;t<r.length;t++){const{layerId:e,visible:n,name:i}=r[t],o=s[`${e}.png`];if(o)try{const t=await Object(c.c)(o);a.push({canvas:t,name:i,visible:n,layerId:e})}catch(t){}}return a.forEach(({canvas:t,name:e,visible:n,layerId:r},s)=>{const a=new l(t,e,n,r);i.push(a)}),new u(n,i)}static async getWorkList(){let t;const[e,n]=await Promise.all([f.a.get(""),f.a.get("thumbnail")]);return t=e.map(({data:t})=>t).map(t=>{const{workInfo:{thumbnail:e,workId:r,...i}}=JSON.parse(t),s=n.find(({name:t})=>t===`${r}.png`);if(s)return{...i,workId:r,thumbnail:URL.createObjectURL(new Blob([s.data]))};throw"workInfoList error "+r}),t}}},function(t,e,n){var r=n(62),i=n(63);t.exports=function(t){return"number"==typeof t||i(t)&&"[object Number]"==r(t)}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},,,,,,,,,,,,,,function(t,e,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,s=i&&"function"==typeof i.apply?i.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var a=Number.isNaN||function(t){return t!=t};function o(){o.init.call(this)}t.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var c=10;function h(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function l(t,e,n,r){var i,s,a;if(h(n),void 0===(s=t._events)?(s=t._events=Object.create(null),t._eventsCount=0):(void 0!==s.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),a=s[e]),void 0===a)a=s[e]=n,++t._eventsCount;else if("function"==typeof a?a=s[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=u(t))>0&&a.length>i&&!a.warned){a.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=t,o.type=e,o.count=a.length,console&&console.warn}return t}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function y(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):p(i,i.length)}function v(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");c=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var c=i[t];if(void 0===c)return!1;if("function"==typeof c)s(c,this,e);else{var h=c.length,u=p(c,h);for(n=0;n<h;++n)s(u[n],this,e)}return!0},o.prototype.addListener=function(t,e){return l(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return l(this,t,e,!0)},o.prototype.once=function(t,e){return h(e),this.on(t,d(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return h(e),this.prependListener(t,d(this,t,e)),this},o.prototype.removeListener=function(t,e){var n,r,i,s,a;if(h(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===e||n[s].listener===e){a=n[s].listener,i=s;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,s=Object.keys(n);for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},o.prototype.listeners=function(t){return y(this,t,!0)},o.prototype.rawListeners=function(t){return y(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},o.prototype.listenerCount=v,o.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}}]]);