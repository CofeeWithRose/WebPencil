(window.webpackJsonp=window.webpackJsonp||[]).push([[1,13,18,22,23,29],{11:function(t,e,a){"use strict";a.r(e),a.d(e,"PCanvas",(function(){return m})),a.d(e,"PCanvasController",(function(){return w.PCanvasController})),a.d(e,"usePCanvas",(function(){return p})),a.d(e,"CanvasEventData",(function(){return w.CanvasEventData})),a.d(e,"CanvasEvent",(function(){return w.CanvasEvent}));var n=a(0),r=a.n(n),s=a(43),i=a.n(s),o=a(83),c=a.n(o),h=a(44),l=a.n(h),u=a(79);const d=(t,e,a)=>Math.abs(t-e)<a?e:t,y=(t,e,a,n,r)=>u.a.add(((t,e,a)=>{const n=u.a.subtract(t,e);return u.a.add(u.a.rotate(n,a),e)})(((t,e,a)=>{const n=u.a.subtract(t,e);return u.a.add(u.a.multipy(n,a),e)})(t,e,n),e,r),a);new u.a;function v(t){const{maxScale:e=2,minScale:a=.5,transRef:r,viewRef:s}=t||{},i=Object(n.useRef)({gestrueStartRotate:0,eleStartRotate:0,rotate:0,gestrueStartscale:1,eleStartScale:1,scale:a,gestrueStartTranslate:new u.a,eleStartTanslate:new u.a,translate:new u.a,center:new u.a});Object(n.useEffect)(()=>{if((null==s?void 0:s.current)&&r&&r.current){const t=getComputedStyle(r.current);i.current.center=new u.a(.5*parseFloat(t.width),.5*parseFloat(t.height)),r.current.style.transition="transform 0.1s";const n=new l.a.Manager(s.current);n.add(new l.a.Pan({threshold:0,pointers:2,enable:(t,e)=>{if(e&&e.pointers.length>1){const{pointers:[t,a]}=e;return u.a.dist(t,a)<200}return!1}})),n.add(new l.a.Pinch({enable:(t,e)=>{if(e&&e.pointers.length>1){const{pointers:[t,a]}=e;return u.a.dist(t,a)>200}return!1}})).recognizeWith([n.get("pan")]);const o=c()(()=>new Promise(t=>{requestAnimationFrame(()=>{if(!r.current)return;const{rotate:e,scale:a,translate:{x:n,y:s},center:o}=i.current;r.current.style.transform=`translate3d( ${n}px, ${s}px, 0)  scale(${a}) rotate(${e}deg)`,t()})}),10),h=({deltaX:t,deltaY:e})=>{const{translate:a}=i.current;i.current.gestrueStartTranslate=new u.a(t,e),i.current.eleStartTanslate=a,r.current&&(r.current.style.transition="",requestAnimationFrame(()=>{r.current&&(r.current.style.transition="transform 0.1s")}))},v=({deltaX:t,deltaY:e,center:a})=>{const{scale:n,gestrueStartTranslate:r,eleStartTanslate:s}=i.current,c=s.x+(t-r.x),h=s.y+(e-r.y),l=1==n?new u.a(d(c,0,10),d(h,0,10)):new u.a(c,h);i.current.translate=l,o()},w=async({scale:t,center:e})=>{const{translate:a,scale:n,center:s,rotate:c}=i.current;i.current.gestrueStartscale=t,i.current.eleStartScale=n;const h=u.a.subtract(e,a);i.current.translate=((t,e,a,n,r)=>{const s=y(new u.a,t,a,n,r),i=y(new u.a,e,a,n,r);return u.a.add(u.a.subtract(i,s),a)})(s,h,a,t,c),i.current.center=h,await o(),r.current&&(r.current.style.transition="",requestAnimationFrame(()=>{r.current&&(r.current.style.transition="transform 0.1s")}))},f=({scale:t,center:n})=>{const{eleStartScale:r,gestrueStartscale:s,translate:c}=i.current,h=(l=r+(t-s),u=a,y=e,Math.min(Math.max(u,l),y));var l,u,y;i.current.scale=d(h,1,.2),o()};return n.on("panstart",h),n.on("panmove",v),n.on("pinchstart",w),n.on("pinchmove",f),o(),()=>{n.off("panstart",h),n.off("panmove",v),n.off("pinchstart",w),n.off("pinchmove",f),n.destroy()}}},[...Object.values(t||{})])}var w=a(24),f=a(1);const p=()=>{const{current:t}=Object(n.useRef)(new w.PCanvasController);return{pCanvas:t}},m=({initValue:t,pCanvasController:e,loading:a})=>{const s=Object(n.useRef)(null),o=Object(n.useRef)(null),c=Object(n.useRef)(null),[h,l]=Object(n.useState)(.1);return v({minScale:h,maxScale:1,viewRef:c,transRef:o,scaleRef:o}),Object(n.useEffect)(()=>{if(t&&e&&o.current&&s.current){const a={wrap:o.current,cover:s.current};return e.init(a,t),()=>{}}},[t]),Object(n.useEffect)(()=>{if(!t)return;const a=s.current;if(a){const t=t=>{e&&e.onPointerDown(t)},n=t=>{e&&e.onPointerMove(t)},r=t=>{e&&e.onPointerUp(t)};return a.addEventListener("pointerdown",t,{passive:!1}),a.addEventListener("pointermove",n,{passive:!1}),a.addEventListener("pointerup",r,{passive:!1}),()=>{a.removeEventListener("pointerdown",t),a.removeEventListener("pointermove",n),a.removeEventListener("pointerup",r)}}},[s.current,t]),r.a.createElement("main",{ref:c,className:i.a.pCanvas},r.a.createElement("section",{ref:o,className:i.a.canvasWrap},r.a.createElement("div",{ref:s,className:i.a.cover})),a&&r.a.createElement("div",{className:i.a.mask,onMouseMove:({nativeEvent:t})=>t.stopPropagation()},r.a.createElement(f.Spin,null)))}},20:function(t,e,a){"use strict";a.r(e),a.d(e,"RGBA",(function(){return n}));class n{static Lerp(t,e,a){const r=[],s=(e.r-t.r)/a,i=(e.g-t.g)/a,o=(e.b-t.b)/a,c=(e.a-t.a)/a;for(let e=0;e<a;e++)r.push(new n(t.r+s*e,t.g+i*e,t.b+o*e,t.a+c*e));return r}static mutipy({r:t,g:e,b:a},r){return new n(t*r,e*r,a*r)}static add({r:t,g:e,b:a},r){return new n(t+r.r,e+r.g,a+r.b)}static mix(t,e,a){return new n(t.r+(e.r-t.r)*a,t.g+(e.g-t.g)*a,t.b+(e.b-t.b)*a)}static getLerpColor(t,e,a){const{r:r,g:s,b:i,a:o}=t;return new n((e.r-r)*a+r,(e.g-s)*a+s,(e.b-i)*a+i,(e.a-o)*a+o)}constructor(t,e,a,n=1){this.r=t,this.g=e,this.b=a,this.a=n}toRGBAString(){return`rgba(${this.r},${this.g},${this.b},${this.a})`}}n.BLACK=new n(0,0,0),n.WHITE=new n(255,255,255)},21:function(t,e,a){"use strict";a.r(e),a.d(e,"BrushStatus",(function(){return n})),a.d(e,"BrushType",(function(){return r})),a.d(e,"AbstractBrush",(function(){return s}));class n{constructor(t,e,a,n,r){this.x=t,this.y=e,this.pressure=a,this.tiltX=n,this.tiltY=r}}let r;!function(t){t[t.pen=1]="pen",t[t.selector=2]="selector"}(r||(r={}));class s{constructor(t,e){this.type=t,this.name=e}init(){}destory(){}onStart(t,e){}onDraw(t,e){}onEnd(t,e){}}},24:function(t,e,a){"use strict";a.r(e),a.d(e,"CanvasEvent",(function(){return l})),a.d(e,"PCanvasController",(function(){return d}));var n=a(20),r=a(25),s=a(58),i=a(26),o=a(75);var c=a(45),h=a(21);class l{constructor(t,e="user"){this.data=t,this.tag=e}}const u=({offsetX:t,offsetY:e,tiltX:a,tiltY:n,pressure:r})=>(r=r>1?.01*r:0===r?1:r,new h.BrushStatus(t,e,r,a,n));class d extends class{constructor(){this.eventEmitter=new o.EventEmitter}on(t,e){const a=e;this.eventEmitter.addListener(t,a)}off(t,e){const a=e;this.eventEmitter.removeListener(t,a)}emit(t,e){setTimeout(()=>{this.eventEmitter.emit(t,e)},1)}}{constructor(...t){super(...t),this.context=void 0,this.layerManager=void 0,this.color=n.RGBA.BLACK,this.pointerIds={},this.workId=void 0,this.onBrushEnd=()=>{const t=this.layerManager.getFocusDetail(),e=Object(c.a)(t.canvas);this.layerManager.applyTempCanvas();const a=this.layerManager.layers.indexOf(t);this.emit("contentChange",new l({workId:this.workId,layerDetail:t,preContent:e,index:a}))}}async init({wrap:t,cover:e},a){const{width:n,height:s,workId:o}=a.workInfo;t.style.width=`${n}px`,t.style.height=`${s}px`,this.workId=o,this.layerManager=new i.PcanvasLayers({cover:e,wrap:t,width:n,height:s}),this.layerManager.init(a.layers),this.context=new r.PCanvasContext(this.layerManager.getCanvas(),this.layerManager.getContext(),n,s,this.onBrushEnd),this.emit("init",new l(null)),this.emit("focusLayer",new l({layerDetail:this.layerManager.getFocusDetail()}))}setColor({r:t,g:e,b:a}){const r=new n.RGBA(t,e,a,this.color.a);this.setRGBA(r)}setRGBA(t){this.context.color=t.toRGBAString(),this.color=t,this.emit("colorchange",new l({color:t}))}setOpacity(t){const{r:e,g:a,b:r}=this.color,s=new n.RGBA(e,a,r,t);this.setRGBA(s)}async getLayers(){return[...this.layerManager.layers]}addLayer(){const t=this.layerManager.addLayer(s.a.create(this.layerManager.wrapInfo));this.layerManager.focusLayer(t);const e=this.layerManager.layers.indexOf(t);this.emit("addLayer",new l({workId:this.workId,layerDetail:t,index:e})),this.emit("focusLayer",new l({layerDetail:t}))}addLayerContent(t,e,a="user"){const{width:n,height:r}=e,i=s.a.create({width:n,height:r}),o=i.canvas.getContext("2d");return null==o||o.drawImage(e,0,0,n,r),this.layerManager.addLayer(i,t),this.emit("addLayer",new l({workId:this.workId,layerDetail:i,index:t},a)),i}setLayerContent(t,e,a="user"){const n=this.layerManager.layers[t],r=n.canvas,{width:s,height:i}=r,o=Object(c.a)(n.canvas),h=n.canvas.getContext("2d");return null==h||h.clearRect(0,0,s,i),null==h||h.drawImage(e,0,0,s,i),this.emit("contentChange",new l({workId:this.workId,layerDetail:n,index:t,preContent:o},a)),n}focusLayer(t){this.layerManager.focusLayer(t),this.emit("focusLayer",new l({layerDetail:t}))}removeLayer(t,e="user"){const{index:a,isFocus:n}=this.layerManager.removeLayer(t);if(this.emit("removeLayer",new l({workId:this.workId,layerDetail:t,index:a},e)),n){const t=this.layerManager.layers[0];this.focusLayer(t),this.emit("focusLayer",new l({layerDetail:t},e))}}removeLayerByIndex(t,e="user"){const a=this.layerManager.layers[t];this.removeLayer(a,e)}setBrushWidth(t){this.context.brushWidth=t}setBrush(t){this.context.brush&&this.context.brush.destory(),t.init(),this.context.brush=t}onPointerDown(t){this.pointerIds[t.pointerId]=!0;const e=u(t);this.context.brush.onStart(e,this.context)}onPointerMove(t){if(Object.keys(this.pointerIds).length>1)return;let e;e=t.getCoalescedEvents?t.getCoalescedEvents():[t],this.context.brush.onDraw(e.map(t=>u(t)),this.context)}onPointerUp(t){delete this.pointerIds[t.pointerId],this.context.brush.onEnd(u(t),this.context)}}},25:function(t,e,a){"use strict";a.r(e),a.d(e,"PCanvasContext",(function(){return s}));var n=a(20),r=a(3);class s{constructor(t,e,a,s,i,o=new r.Brush,c=n.RGBA.BLACK.toRGBAString(),h=100){this.curCanvas=t,this.curCanvasContext2D=e,this.width=a,this.height=s,this.onBrushEnd=i,this.brush=o,this.color=c,this.brushWidth=h}}},26:function(t,e,a){"use strict";a.r(e),a.d(e,"PcanvasLayers",(function(){return r}));var n=a(58);class r{constructor(t){this.wrapInfo=t,this.tempLayer=void 0,this.layers=void 0,this.focusedLayerDetail=void 0}async init(t){const e=this.wrapInfo,{wrap:a,cover:r}=e;let s=r;this.layers=t,t.forEach((t,e)=>{const{canvas:n,layerId:r,visible:i}=t;a.insertBefore(n,s),s=n,i||(n.className="unvisible")}),this.tempLayer=n.a.create(e),a.insertBefore(this.tempLayer.canvas,r),this.focusedLayerDetail=t[0]}getCanvas(){return this.tempLayer.canvas}applyTempCanvas(){const t=this.focusedLayerDetail.canvas.getContext("2d"),e=this.tempLayer.canvas.getContext("2d");if(t&&e){const{width:a,height:n}=this.tempLayer.canvas;t.drawImage(this.tempLayer.canvas,0,0,a,n),e.clearRect(0,0,a,n)}}getFocusDetail(){return this.focusedLayerDetail}focusLayer(t){const e=this.layers[this.layers.indexOf(t)-1],a=e&&e.canvas&&e!==this.tempLayer?e.canvas:this.wrapInfo.cover;this.wrapInfo.wrap.insertBefore(this.tempLayer.canvas,a),this.focusedLayerDetail=t}addLayer(t,e=0){const{wrap:a}=this.wrapInfo,n=this.layers[e-1],r=n&&n.canvas||this.wrapInfo.cover;return a.insertBefore(t.canvas,r),this.layers.splice(e,0,t),t}removeLayer(t){const e=this.layers.indexOf(t);return e>-1&&(this.wrapInfo.wrap.removeChild(t.canvas),this.layers.splice(e,1)),{index:e,isFocus:this.focusedLayerDetail===t}}getContext(){const t=this.tempLayer.canvas.getContext("2d");if(null===t)throw"get context faliled.";return t.imageSmoothingEnabled=!1,t}}},3:function(t,e,a){"use strict";a.r(e),a.d(e,"Brush",(function(){return r}));var n=a(21);class r{constructor(){this.type=n.BrushType.pen,this.name="default",this.isPainting=!1,this.pathList=[],this.animeHandle=void 0,this.paintPath=t=>{t.clearRect(0,0,t.canvas.width,t.canvas.height),t.beginPath();const e=this.pathList[0];t.moveTo(e.x,e.y);for(let e=1;e<this.pathList.length;e++){const{x:a,y:n}=this.pathList[e];t.lineTo(a,n)}t.stroke()}}init(){}destory(){}onStart(t,e){const{curCanvasContext2D:a,color:n,brushWidth:r}=e;this.isPainting=!0,this.pathList.push(t),a.strokeStyle=n,a.lineWidth=r,a.lineCap="round",a.lineJoin="round"}onDraw(t,e){if(this.isPainting){const{curCanvasContext2D:a}=e;for(let e=0;e<t.length;e++)this.pathList.push(t[e]);cancelAnimationFrame(this.animeHandle),this.animeHandle=requestAnimationFrame(()=>{this.paintPath(a)})}}onEnd(t,{onBrushEnd:e}){requestAnimationFrame(()=>{this.isPainting=!1,this.pathList=[],e()})}}},43:function(t,e,a){t.exports={pCanvas:"pCanvas_efb40",mask:"mask_d19cf",canvasWrap:"canvasWrap_4e8dd",unvisible:"unvisible_0b5e4",cover:"cover_edb6c"}},45:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"e",(function(){return d})),a.d(e,"d",(function(){return v}));var n=a(46),r=a.n(n),s=a(56);new(a.n(s).a);const i=(t=0,e=0,a)=>{const n=document.createElement("canvas");n.width=t,n.height=e,n.setAttribute("uuid",r()("canvasId-"));const s=n.getContext("2d");return s&&a&&(s.fillStyle=a.toRGBAString(),s.fillRect(0,0,t,e)),n},o=(t,e)=>{const a=t.getContext("2d");null==a||a.drawImage(e,0,0)},c=t=>{const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d"),n=t.getContext("2d");return a&&n&&(a.imageSmoothingEnabled=!1,a.putImageData(n.getImageData(0,0,t.width,t.height),0,0)),e},h=[];let l=0;const u=async t=>new Promise(e=>{h.push({file:t,cb:e}),(async()=>{if(l<1){let t=h.shift();for(;t;){l++;const{file:e,cb:a}=t,n=new Image,r=URL.createObjectURL(new Blob([e]));n.src=r;const s=document.createElement("canvas");try{await n.decode(),s.width=n.width,s.height=n.height,o(s,n)}catch(t){}URL.revokeObjectURL(r),a(s),l--,t=h.shift()}}})()}),d=t=>new Promise(e=>{t.toBlob(t=>(async(t,e)=>{if(t){const a=URL.createObjectURL(t);e(await(await fetch(a)).arrayBuffer())}else e(null)})(t,e),"image/png",1)});let y=()=>{const t=i(0,0).toDataURL();return y=()=>t,y()};const v=()=>y()},56:function(t,e,a){t.exports=function(){return new Worker(a.p+"WorkerName.b03f5c6277ae088ef23e.js")}},58:function(t,e,a){"use strict";a.d(e,"c",(function(){return f})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return u}));var n=a(59),r=a.n(n),s=a(46),i=a.n(s),o=a(20),c=a(45);class h{constructor(t,e,a="",n,r=Date.now(),s=Date.now(),o=i()(`work_${Date.now()}_`)){this.width=t,this.height=e,this.name=a,this.thumbnail=n,this.createTime=r,this.updateTime=s,this.workId=o}}class l{constructor(t,e=[]){this.workInfo=t,this.layers=e}static createEmpty(t,e,a){const n=new h(t,e,"new work",Object(c.d)()),r=[];return r.push(u.create(n,o.RGBA.WHITE)),new l(n,r)}}class u{constructor(t,e="new layer",a=!0,n=i()(`layer-${Date.now()}-`)){this.canvas=t,this.name=e,this.visible=a,this.layerId=n}static create({width:t,height:e},a){const n=Object(c.b)(t,e,a),r=new u(n);return n.setAttribute("layerId",r.layerId),r}}var d=a(15);const y=(t,e)=>e?`layers/${t}/${e}.png`:`layers/${t}`,v=t=>`thumbnail/${t}.png`;class w{constructor(t){this.workInfo=void 0,this.layers=void 0;const{workInfo:e,layers:a}=t,{thumbnail:n,workId:r,...s}=e;this.workInfo={workId:r,...s,thumbnail:v(r)},this.layers=a.map(({canvas:t,layerId:e,...a})=>({layerId:e,...a,canvas:y(r,e)}))}}class f{static async saveWork(t){if(!t)return;const e=new w(t);await this.saveWorkInfo(e);const a=this.getCanvasFileList(t,e);for(let t=0;t<a.length;t++){const{path:e,canvas:n}=a[t],{path:r,name:s}=d.a.analyzePath(e),i=await Object(c.e)(n);i&&await d.a.save({type:"image/png",path:r,data:i,name:s})}}static async saveWorkInfo(t){await d.a.save({type:"application/json",path:"",name:`${t.workInfo.workId}.json`,data:JSON.stringify(t)})}static getCanvasFileList(t,e){const{layers:a}=t,{layers:n}=e,r=[{path:e.workInfo.thumbnail,canvas:this.combimeCanvas(100,100,a.map(({canvas:t})=>t))}];return a.forEach(({canvas:t},e)=>{r.push({canvas:t,path:n[e].canvas})}),r}static combimeCanvas(t,e,a){const n=Object(c.b)(t,e),r=n.getContext("2d");if(r)for(let t=a.length-1;t>-1;t--){const e=a[t];r.drawImage(e,0,0,e.width,e.height)}return n}static async saveLayerDetail(t,e,a){const{canvas:n,layerId:s,...i}=e,o=await Object(c.e)(n);if(!o)return;const{path:h,name:l}=d.a.analyzePath(y(t,s));d.a.save({type:"image/png",path:h,name:l,data:o});const[{data:u}]=await d.a.get("",`${t}.json`),v=JSON.parse(u),w=v.layers.find(({layerId:t})=>t===s);if(!w&&r()(a)&&(v.layers.splice(a,0,{canvas:y(t,s),layerId:s,...i}),await this.saveWorkInfo(v)),w&&r()(a))throw"add layer fail: "+s}static async removeWork(t){}static async updateLayerDetail(t,e){}static async getWorkDetail(t){const[{data:e}]=await d.a.get("",`${t}.json`),{workInfo:a,layers:n}=JSON.parse(e),r=[],s=(await d.a.get(y(t))).reduce((t,{data:e,name:a})=>({...t,[a]:e}),{}),i=[];for(let t=0;t<n.length;t++){const{layerId:e,visible:a,name:r}=n[t],o=s[`${e}.png`];if(o)try{const t=await Object(c.c)(o);i.push({canvas:t,name:r,visible:a,layerId:e})}catch(t){}}return i.forEach(({canvas:t,name:e,visible:a,layerId:n},s)=>{const i=new u(t,e,a,n);r.push(i)}),new l(a,r)}static async getWorkList(){let t;const[e,a]=await Promise.all([d.a.get(""),d.a.get("thumbnail")]);return t=e.map(({data:t})=>t).map(t=>{const{workInfo:{thumbnail:e,workId:n,...r}}=JSON.parse(t),s=a.find(({name:t})=>t===`${n}.png`);if(s)return{...r,workId:n,thumbnail:URL.createObjectURL(new Blob([s.data]))};throw"workInfoList error "+n}),t}}},79:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));const n=t=>t<0?2*Math.PI+t:t;class r{constructor(t=0,e=0){this.x=t,this.y=e}static normalize(t){const e=1/r.magnitude(t);return new r(t.x*e,t.y*e)}static vertical({x:t,y:e}){return new r(e,-t)}static dist(t,e){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}static magnitude(t){return Math.sqrt(t.x**2+t.y**2)}static degree(t,e,a){const r=n(Math.atan2(e.y-t.y,e.x-t.x)),s=n(Math.atan2(a.y-t.y,a.x-t.x));return Math.abs(s-r)}static add(t,e){return new r(t.x+e.x,t.y+e.y)}static rotate(t,e){const a=r.magnitude(t),s=n(Math.atan2(t.y,t.x))-e%360/180*Math.PI;return new r(Math.cos(s)*a,Math.sin(s)*a)}static multipy({x:t,y:e},a){return new r(t*a,e*a)}static subtract(t,e){return new r(t.x-e.x,t.y-e.y)}static move(t,e,a){const n=a.x-e.x,s=a.y-e.y;return new r(t.x+n,t.y+s)}static floor({x:t,y:e}){return new r(Math.floor(t),Math.floor(e))}}r.ZERO=new r}}]);