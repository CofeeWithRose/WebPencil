(window.webpackJsonp=window.webpackJsonp||[]).push([[6,23],[,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var a=n(0),r=n(58);function o({pCanvasController:t}){return Object(a.useEffect)(()=>{if(t){const e=({data:{workId:t,layerDetail:e}})=>{r.c.saveLayerDetail(t,e)},n=({data:{workId:t,layerDetail:e,index:n}})=>{r.c.saveLayerDetail(t,e,n)};return t.on("contentChange",e),t.on("addLayer",n),()=>{t.off("contentChange",e),t.off("addLayer",n)}}},[t]),null}},,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"RGBA",(function(){return a}));class a{static Lerp(t,e,n){const r=[],o=(e.r-t.r)/n,s=(e.g-t.g)/n,i=(e.b-t.b)/n,c=(e.a-t.a)/n;for(let e=0;e<n;e++)r.push(new a(t.r+o*e,t.g+s*e,t.b+i*e,t.a+c*e));return r}static mutipy({r:t,g:e,b:n},r){return new a(t*r,e*r,n*r)}static add({r:t,g:e,b:n},r){return new a(t+r.r,e+r.g,n+r.b)}static mix(t,e,n){return new a(t.r+(e.r-t.r)*n,t.g+(e.g-t.g)*n,t.b+(e.b-t.b)*n)}static getLerpColor(t,e,n){const{r:r,g:o,b:s,a:i}=t;return new a((e.r-r)*n+r,(e.g-o)*n+o,(e.b-s)*n+s,(e.a-i)*n+i)}constructor(t,e,n,a=1){this.r=t,this.g=e,this.b=n,this.a=a}toRGBAString(){return`rgba(${this.r},${this.g},${this.b},${this.a})`}}a.BLACK=new a(0,0,0),a.WHITE=new a(255,255,255)},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return w}));var a=n(46),r=n.n(a),o=n(56);new(n.n(o).a);const s=(t=0,e=0,n)=>{const a=document.createElement("canvas");a.width=t,a.height=e,a.setAttribute("uuid",r()("canvasId-"));const o=a.getContext("2d");return o&&n&&(o.fillStyle=n.toRGBAString(),o.fillRect(0,0,t,e)),a},i=(t,e)=>{const n=t.getContext("2d");null==n||n.drawImage(e,0,0)},c=t=>{const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d"),a=t.getContext("2d");return n&&a&&(n.imageSmoothingEnabled=!1,n.putImageData(a.getImageData(0,0,t.width,t.height),0,0)),e},u=[];let l=0;const f=async t=>new Promise(e=>{u.push({file:t,cb:e}),(async()=>{if(l<1){let t=u.shift();for(;t;){l++;const{file:e,cb:n}=t,a=new Image,r=URL.createObjectURL(new Blob([e]));a.src=r;const o=document.createElement("canvas");try{await a.decode(),o.width=a.width,o.height=a.height,i(o,a)}catch(t){}URL.revokeObjectURL(r),n(o),l--,t=u.shift()}}})()}),h=t=>new Promise(e=>{t.toBlob(t=>(async(t,e)=>{if(t){const n=URL.createObjectURL(t);e(await(await fetch(n)).arrayBuffer())}else e(null)})(t,e),"image/png",1)});let d=()=>{const t=s(0,0).toDataURL();return d=()=>t,d()};const w=()=>d()},function(t,e,n){var a=n(52),r=0;t.exports=function(t){var e=++r;return a(t)+e}},function(t,e,n){var a=n(49),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();t.exports=o},function(t,e){t.exports=function(){return!1}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(50))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var a=n(53);t.exports=function(t){return null==t?"":a(t)}},function(t,e,n){var a=n(54),r=n(55),o=n(51),s=n(48),i=a?a.prototype:void 0,c=i?i.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return r(e,t)+"";if(s(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},function(t,e,n){var a=n(47).Symbol;t.exports=a},function(t,e){t.exports=function(t,e){for(var n=-1,a=null==t?0:t.length,r=Array(a);++n<a;)r[n]=e(t[n],n,t);return r}},function(t,e,n){t.exports=function(){return new Worker(n.p+"WorkerName.b03f5c6277ae088ef23e.js")}},,function(t,e,n){"use strict";n.d(e,"c",(function(){return g})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f}));var a=n(59),r=n.n(a),o=n(46),s=n.n(o),i=n(20),c=n(45);class u{constructor(t,e,n="",a,r=Date.now(),o=Date.now(),i=s()(`work_${Date.now()}_`)){this.width=t,this.height=e,this.name=n,this.thumbnail=a,this.createTime=r,this.updateTime=o,this.workId=i}}class l{constructor(t,e=[]){this.workInfo=t,this.layers=e}static createEmpty(t,e,n){const a=new u(t,e,"new work",Object(c.d)()),r=[];return r.push(f.create(a,i.RGBA.WHITE)),new l(a,r)}}class f{constructor(t,e="new layer",n=!0,a=s()(`layer-${Date.now()}-`)){this.canvas=t,this.name=e,this.visible=n,this.layerId=a}static create({width:t,height:e},n){const a=Object(c.b)(t,e,n),r=new f(a);return a.setAttribute("layerId",r.layerId),r}}var h=n(15);const d=(t,e)=>e?`layers/${t}/${e}.png`:`layers/${t}`,w=t=>`thumbnail/${t}.png`;class p{constructor(t){this.workInfo=void 0,this.layers=void 0;const{workInfo:e,layers:n}=t,{thumbnail:a,workId:r,...o}=e;this.workInfo={workId:r,...o,thumbnail:w(r)},this.layers=n.map(({canvas:t,layerId:e,...n})=>({layerId:e,...n,canvas:d(r,e)}))}}class g{static async saveWork(t){if(!t)return;const e=new p(t);await this.saveWorkInfo(e);const n=this.getCanvasFileList(t,e);for(let t=0;t<n.length;t++){const{path:e,canvas:a}=n[t],{path:r,name:o}=h.a.analyzePath(e),s=await Object(c.e)(a);s&&await h.a.save({type:"image/png",path:r,data:s,name:o})}}static async saveWorkInfo(t){await h.a.save({type:"application/json",path:"",name:`${t.workInfo.workId}.json`,data:JSON.stringify(t)})}static getCanvasFileList(t,e){const{layers:n}=t,{layers:a}=e,r=[{path:e.workInfo.thumbnail,canvas:this.combimeCanvas(100,100,n.map(({canvas:t})=>t))}];return n.forEach(({canvas:t},e)=>{r.push({canvas:t,path:a[e].canvas})}),r}static combimeCanvas(t,e,n){const a=Object(c.b)(t,e),r=a.getContext("2d");if(r)for(let t=n.length-1;t>-1;t--){const e=n[t];r.drawImage(e,0,0,e.width,e.height)}return a}static async saveLayerDetail(t,e,n){const{canvas:a,layerId:o,...s}=e,i=await Object(c.e)(a);if(!i)return;const{path:u,name:l}=h.a.analyzePath(d(t,o));h.a.save({type:"image/png",path:u,name:l,data:i});const[{data:f}]=await h.a.get("",`${t}.json`),w=JSON.parse(f),p=w.layers.find(({layerId:t})=>t===o);if(!p&&r()(n)&&(w.layers.splice(n,0,{canvas:d(t,o),layerId:o,...s}),await this.saveWorkInfo(w)),p&&r()(n))throw"add layer fail: "+o}static async removeWork(t){}static async updateLayerDetail(t,e){}static async getWorkDetail(t){const[{data:e}]=await h.a.get("",`${t}.json`),{workInfo:n,layers:a}=JSON.parse(e),r=[],o=(await h.a.get(d(t))).reduce((t,{data:e,name:n})=>({...t,[n]:e}),{}),s=[];for(let t=0;t<a.length;t++){const{layerId:e,visible:n,name:r}=a[t],i=o[`${e}.png`];if(i)try{const t=await Object(c.c)(i);s.push({canvas:t,name:r,visible:n,layerId:e})}catch(t){}}return s.forEach(({canvas:t,name:e,visible:n,layerId:a},o)=>{const s=new f(t,e,n,a);r.push(s)}),new l(n,r)}static async getWorkList(){let t;const[e,n]=await Promise.all([h.a.get(""),h.a.get("thumbnail")]);return t=e.map(({data:t})=>t).map(t=>{const{workInfo:{thumbnail:e,workId:a,...r}}=JSON.parse(t),o=n.find(({name:t})=>t===`${a}.png`);if(o)return{...r,workId:a,thumbnail:URL.createObjectURL(new Blob([o.data]))};throw"workInfoList error "+a}),t}}},function(t,e,n){var a=n(60),r=n(61);t.exports=function(t){return"number"==typeof t||r(t)&&"[object Number]"==a(t)}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}}]]);