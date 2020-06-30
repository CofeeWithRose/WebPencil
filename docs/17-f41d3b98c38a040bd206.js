(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{23:function(t,e,n){"use strict";n.r(e),n.d(e,"RecordData",(function(){return o})),n.d(e,"RecordInfo",(function(){return i})),n.d(e,"recordListReducer",(function(){return d}));var a=n(16),r=n(47);class o{constructor(){this.add=void 0,this.remove=void 0,this.modify=void 0}}const c=async({type:t,data:e})=>{switch(t){case"add":e=e;const{path:t,name:n}=a.a.analyzePath(e.canvasPath);await a.a.remove(t,n);break;case"modify":const{fromCanvasPath:r,toCanvasPath:o}=e,{path:c,name:i}=a.a.analyzePath(o),{path:s,name:d}=a.a.analyzePath(r);await Promise.all([a.a.remove(c,i),a.a.remove(s,d)]);break;case"remove":const{canvasPath:u}=e,{path:h,name:f}=a.a.analyzePath(u);await a.a.remove(h,f)}};class i{constructor(t,e){this.type=t,this.data=e}}const s=async(t,e)=>{const{type:n,data:o}=t;if("add"!==n)if("modify"!==n)if("remove"!==n);else{const{index:t}=o;e.removeLayerByIndex(t,"history")}else{const{index:t,fromCanvasPath:n,toCanvasPath:c}=o,{path:i,name:s}=a.a.analyzePath(c),[{data:d}]=await a.a.get(i,s),u=await Object(r.c)(d),h=e.setLayerContent(t,u,"history");e.focusLayer(h)}else{const{index:t,canvasPath:n}=o,{path:c,name:i}=a.a.analyzePath(n),[{data:s}]=await a.a.get(c,i),d=await Object(r.c)(s),u=e.addLayerContent(t,d,"history");e.focusLayer(u)}},d=({cursor:t,recorderList:e},{type:n,payload:a,pCanvasController:r})=>{switch(n){case"add":if(t<e.length-1){e.splice(Math.max(t,0)).map(t=>c(t))}if(100<=e.length){e.splice(0,e.length-100+1).map(t=>c(t))}t++,a&&e.push(a);break;case"redo":if(++t<=e.length-1){const n=e[t];r&&s(n,r)}break;case"undo":if(t>-1){const n=e[t];r&&s((({type:t,data:e})=>{if("add"===t){const{index:t,canvasPath:n}=e;return new i("remove",{index:t,canvasPath:n})}if("modify"===t){const{index:t,fromCanvasPath:n,toCanvasPath:a}=e;return new i("modify",{index:t,fromCanvasPath:a,toCanvasPath:n})}const{index:n,canvasPath:a}=e;return new i("add",{index:n,canvasPath:a})})(n),r)}t--}return{cursor:Math.max(Math.min(t,e.length-1),-1),recorderList:e}}},47:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return v}));var a=n(48),r=n.n(a),o=n(58);new(n.n(o).a);const c=(t=0,e=0,n)=>{const a=document.createElement("canvas");a.width=t,a.height=e,a.setAttribute("uuid",r()("canvasId-"));const o=a.getContext("2d");return o&&n&&(o.fillStyle=n.toRGBAString(),o.fillRect(0,0,t,e)),a},i=(t,e)=>{const n=t.getContext("2d");null==n||n.drawImage(e,0,0)},s=t=>{const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d"),a=t.getContext("2d");return n&&a&&(n.imageSmoothingEnabled=!1,n.webkitImageSmoothingEnabled=!1,n.clearRect(0,0,e.width,e.height),n.drawImage(t,0,0,t.width,t.height)),e},d=[];let u=0;const h=async t=>new Promise(e=>{d.push({file:t,cb:e}),(async()=>{if(u<1){let t=d.shift();for(;t;){u++;const{file:e,cb:n}=t,a=new Image,r=URL.createObjectURL(new Blob([e]));a.src=r;const o=document.createElement("canvas");try{await a.decode(),o.width=a.width,o.height=a.height,i(o,a)}catch(t){}URL.revokeObjectURL(r),n(o),u--,t=d.shift()}}})()}),f=t=>new Promise(e=>{t.toBlob(t=>(async(t,e)=>{if(t){const n=URL.createObjectURL(t);e(await(await fetch(n)).arrayBuffer())}else e(null)})(t,e),"image/png",1)});let l=()=>{const t=c(0,0).toDataURL();return l=()=>t,l()};const v=()=>l()},48:function(t,e,n){var a=n(54),r=0;t.exports=function(t){var e=++r;return a(t)+e}},49:function(t,e,n){var a=n(51),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();t.exports=o},50:function(t,e){t.exports=function(){return!1}},51:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(52))},52:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},53:function(t,e){var n=Array.isArray;t.exports=n},54:function(t,e,n){var a=n(55);t.exports=function(t){return null==t?"":a(t)}},55:function(t,e,n){var a=n(56),r=n(57),o=n(53),c=n(50),i=a?a.prototype:void 0,s=i?i.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return r(e,t)+"";if(c(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},56:function(t,e,n){var a=n(49).Symbol;t.exports=a},57:function(t,e){t.exports=function(t,e){for(var n=-1,a=null==t?0:t.length,r=Array(a);++n<a;)r[n]=e(t[n],n,t);return r}},58:function(t,e,n){t.exports=function(){return new Worker(n.p+"canvas-worker.96b5b223f1d16ebece7a.js")}}}]);