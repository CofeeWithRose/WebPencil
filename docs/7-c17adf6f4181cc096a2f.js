(window.webpackJsonp=window.webpackJsonp||[]).push([[7,17,29],{23:function(t,e,a){"use strict";a.r(e),a.d(e,"RecordData",(function(){return o})),a.d(e,"RecordInfo",(function(){return i})),a.d(e,"recordListReducer",(function(){return d}));var n=a(16),r=a(47);class o{constructor(){this.add=void 0,this.remove=void 0,this.modify=void 0}}const c=async({type:t,data:e})=>{switch(t){case"add":e=e;const{path:t,name:a}=n.a.analyzePath(e.canvasPath);await n.a.remove(t,a);break;case"modify":const{fromCanvasPath:r,toCanvasPath:o}=e,{path:c,name:i}=n.a.analyzePath(o),{path:s,name:d}=n.a.analyzePath(r);await Promise.all([n.a.remove(c,i),n.a.remove(s,d)]);break;case"remove":const{canvasPath:u}=e,{path:f,name:h}=n.a.analyzePath(u);await n.a.remove(f,h)}};class i{constructor(t,e){this.type=t,this.data=e}}const s=async(t,e)=>{const{type:a,data:o}=t;if("add"!==a)if("modify"!==a)if("remove"!==a);else{const{index:t}=o;e.removeLayerByIndex(t,"history")}else{const{index:t,fromCanvasPath:a,toCanvasPath:c}=o,{path:i,name:s}=n.a.analyzePath(c),[{data:d}]=await n.a.get(i,s),u=await Object(r.c)(d),f=e.setLayerContent(t,u,"history");e.focusLayer(f)}else{const{index:t,canvasPath:a}=o,{path:c,name:i}=n.a.analyzePath(a),[{data:s}]=await n.a.get(c,i),d=await Object(r.c)(s),u=e.addLayerContent(t,d,"history");e.focusLayer(u)}},d=({cursor:t,recorderList:e},{type:a,payload:n,pCanvasController:r})=>{switch(a){case"add":if(t<e.length-1){e.splice(Math.max(t,0)).map(t=>c(t))}if(100<=e.length){e.splice(0,e.length-100+1).map(t=>c(t))}t++,n&&e.push(n);break;case"redo":if(++t<=e.length-1){const a=e[t];r&&s(a,r)}break;case"undo":if(t>-1){const a=e[t];r&&s((({type:t,data:e})=>{if("add"===t){const{index:t,canvasPath:a}=e;return new i("remove",{index:t,canvasPath:a})}if("modify"===t){const{index:t,fromCanvasPath:a,toCanvasPath:n}=e;return new i("modify",{index:t,fromCanvasPath:n,toCanvasPath:a})}const{index:a,canvasPath:n}=e;return new i("add",{index:a,canvasPath:n})})(a),r)}t--}return{cursor:Math.max(Math.min(t,e.length-1),-1),recorderList:e}}},37:function(t,e,a){t.exports={recordBtn:"recordBtn_81954",recordBtnActive:"recordBtnActive_a74d3"}},4:function(t,e,a){"use strict";a.r(e);var n=a(48),r=a.n(n),o=a(0),c=a.n(o),i=a(1),s=a(37),d=a.n(s),u=a(47),f=a(23),h=a(16);const l=async t=>{const e=`record_${Date.now()}_${r()()}.png`,a=await Object(u.e)(t),n=`record/${e}`;return a&&await h.a.save({type:"image/png",data:a,path:"record",name:e}),n};e.default=({pCanvasController:t})=>{const[{cursor:e,recorderList:a},n]=Object(o.useReducer)(f.recordListReducer,{cursor:-1,recorderList:[]}),r=e>=0,s=e<a.length-1;Object(o.useEffect)(()=>{const e=async t=>{const{data:{layerDetail:{canvas:e},index:a},tag:r}=t;if("history"===r)return;const o=await l(e);n({type:"add",payload:new f.RecordInfo("add",{index:a,canvasPath:o})})},a=async t=>{const{data:{layerDetail:{canvas:e},preContent:a,index:r},tag:o}=t;"history"!==o&&n({type:"add",payload:new f.RecordInfo("modify",{index:r,fromCanvasPath:await l(a),toCanvasPath:await l(e)})})},r=async t=>{const{data:{layerDetail:{canvas:e},index:a},tag:r}=t;if("history"===r)return;const o=await l(e);n({type:"add",payload:new f.RecordInfo("remove",{index:a,canvasPath:o})})};return t.on("addLayer",e),t.on("contentChange",a),t.on("removeLayer",r),()=>{t.off("addLayer",e),t.off("contentChange",a),t.off("removeLayer",r),h.a.remove("record")}},[]);return c.a.createElement(o.Fragment,null,c.a.createElement("span",{className:`${d.a.recordBtn} ${s&&d.a.recordBtnActive||""} `,onPointerUp:s&&(()=>{n({type:"redo",pCanvasController:t})})||void 0},"redo"),c.a.createElement(i.Divider,null),c.a.createElement("span",{className:`${d.a.recordBtn} ${r&&d.a.recordBtnActive||""}`,onPointerUp:r&&(()=>{n({type:"undo",pCanvasController:t})})||void 0},"undo"))}},47:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return f})),a.d(e,"e",(function(){return h})),a.d(e,"f",(function(){return l})),a.d(e,"d",(function(){return y}));var n=a(48),r=a.n(n),o=a(58);new(a.n(o).a);const c=(t=0,e=0,a)=>{const n=document.createElement("canvas");n.width=t,n.height=e,n.setAttribute("uuid",r()("canvasId-"));const o=n.getContext("2d");return o&&a&&(o.fillStyle=a.toRGBAString(),o.fillRect(0,0,t,e)),n},i=(t,e)=>{const a=t.getContext("2d");null==a||a.drawImage(e,0,0)},s=t=>{const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d"),n=t.getContext("2d");return a&&n&&(a.imageSmoothingEnabled=!1,a.webkitImageSmoothingEnabled=!1,a.clearRect(0,0,e.width,e.height),a.drawImage(t,0,0,t.width,t.height)),e},d=[];let u=0;const f=async t=>new Promise(e=>{d.push({file:t,cb:e}),(async()=>{if(u<1){let t=d.shift();for(;t;){u++;const{file:e,cb:a}=t,n=new Image,r=URL.createObjectURL(new Blob([e]));n.src=r;const o=document.createElement("canvas");try{await n.decode(),o.width=n.width,o.height=n.height,i(o,n)}catch(t){}URL.revokeObjectURL(r),a(o),u--,t=d.shift()}}})()}),h=t=>new Promise(e=>{t.toBlob(t=>(async(t,e)=>{if(t){const a=URL.createObjectURL(t);e(await(await fetch(a)).arrayBuffer())}else e(null)})(t,e),"image/png",1)}),l=t=>new Promise(e=>{t.toBlob(e)});let v=()=>{const t=c(0,0).toDataURL();return v=()=>t,v()};const y=()=>v()},48:function(t,e,a){var n=a(54),r=0;t.exports=function(t){var e=++r;return n(t)+e}},49:function(t,e,a){var n=a(51),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();t.exports=o},50:function(t,e){t.exports=function(){return!1}},51:function(t,e,a){(function(e){var a="object"==typeof e&&e&&e.Object===Object&&e;t.exports=a}).call(this,a(52))},52:function(t,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"==typeof window&&(a=window)}t.exports=a},53:function(t,e){var a=Array.isArray;t.exports=a},54:function(t,e,a){var n=a(55);t.exports=function(t){return null==t?"":n(t)}},55:function(t,e,a){var n=a(56),r=a(57),o=a(53),c=a(50),i=n?n.prototype:void 0,s=i?i.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return r(e,t)+"";if(c(e))return s?s.call(e):"";var a=e+"";return"0"==a&&1/e==-1/0?"-0":a}},56:function(t,e,a){var n=a(49).Symbol;t.exports=n},57:function(t,e){t.exports=function(t,e){for(var a=-1,n=null==t?0:t.length,r=Array(n);++a<n;)r[a]=e(t[a],a,t);return r}},58:function(t,e,a){t.exports=function(){return new Worker(a.p+"WorkerName.4812e85ebc24635efccf.js")}}}]);