(window.webpackJsonp=window.webpackJsonp||[]).push([[10,24],{21:function(t,n,e){"use strict";e.r(n),e.d(n,"RGBA",(function(){return r}));class r{static Lerp(t,n,e){const o=[],c=(n.r-t.r)/e,i=(n.g-t.g)/e,a=(n.b-t.b)/e,s=(n.a-t.a)/e;for(let n=0;n<e;n++)o.push(new r(t.r+c*n,t.g+i*n,t.b+a*n,t.a+s*n));return o}static mutipy({r:t,g:n,b:e},o){return new r(t*o,n*o,e*o)}static add({r:t,g:n,b:e},o){return new r(t+o.r,n+o.g,e+o.b)}static mix(t,n,e){return new r(t.r+(n.r-t.r)*e,t.g+(n.g-t.g)*e,t.b+(n.b-t.b)*e)}static getLerpColor(t,n,e){const{r:o,g:c,b:i,a:a}=t;return new r((n.r-o)*e+o,(n.g-c)*e+c,(n.b-i)*e+i,(n.a-a)*e+a)}constructor(t,n,e,r=1){this.r=t,this.g=n,this.b=e,this.a=r}toRGBAString(){return`rgba(${this.r},${this.g},${this.b},${this.a})`}}r.BLACK=new r(0,0,0),r.WHITE=new r(255,255,255)},47:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return l})),e.d(n,"e",(function(){return d})),e.d(n,"d",(function(){return g}));var r=e(48),o=e.n(r),c=e(58);new(e.n(c).a);const i=(t=0,n=0,e)=>{const r=document.createElement("canvas");r.width=t,r.height=n,r.setAttribute("uuid",o()("canvasId-"));const c=r.getContext("2d");return c&&e&&(c.fillStyle=e.toRGBAString(),c.fillRect(0,0,t,n)),r},a=(t,n)=>{const e=t.getContext("2d");null==e||e.drawImage(n,0,0)},s=t=>{const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const e=n.getContext("2d"),r=t.getContext("2d");return e&&r&&(e.imageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.clearRect(0,0,n.width,n.height),e.drawImage(t,0,0,t.width,t.height)),n},u=[];let f=0;const l=async t=>new Promise(n=>{u.push({file:t,cb:n}),(async()=>{if(f<1){let t=u.shift();for(;t;){f++;const{file:n,cb:e}=t,r=new Image,o=URL.createObjectURL(new Blob([n]));r.src=o;const c=document.createElement("canvas");try{await r.decode(),c.width=r.width,c.height=r.height,a(c,r)}catch(t){}URL.revokeObjectURL(o),e(c),f--,t=u.shift()}}})()}),d=t=>new Promise(n=>{t.toBlob(t=>(async(t,n)=>{if(t){const e=URL.createObjectURL(t);n(await(await fetch(e)).arrayBuffer())}else n(null)})(t,n),"image/png",1)});let h=()=>{const t=i(0,0).toDataURL();return h=()=>t,h()};const g=()=>h()},48:function(t,n,e){var r=e(54),o=0;t.exports=function(t){var n=++o;return r(t)+n}},49:function(t,n,e){var r=e(51),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},50:function(t,n){t.exports=function(){return!1}},51:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(52))},52:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},53:function(t,n){var e=Array.isArray;t.exports=e},54:function(t,n,e){var r=e(55);t.exports=function(t){return null==t?"":r(t)}},55:function(t,n,e){var r=e(56),o=e(57),c=e(53),i=e(50),a=r?r.prototype:void 0,s=a?a.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(c(n))return o(n,t)+"";if(i(n))return s?s.call(n):"";var e=n+"";return"0"==e&&1/n==-1/0?"-0":e}},56:function(t,n,e){var r=e(49).Symbol;t.exports=r},57:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}},58:function(t,n,e){t.exports=function(){return new Worker(e.p+"WorkerName.4812e85ebc24635efccf.js")}},7:function(t,n,e){"use strict";e.r(n),e.d(n,"Export",(function(){return s}));var r=e(0),o=e.n(r),c=e(1),i=e(47),a=e(21);function s({pCanvasController:t}){const n=Object(r.useRef)({workInfo:null});Object(r.useRef)(null);Object(r.useEffect)(()=>{if(t){const e=({data:t})=>{n.current.workInfo=t};return t.on("init",e),()=>{t.off("init",e)}}},[t]);return o.a.createElement(c.Button,{size:"small",style:{margin:"0 10px"},onClick:async()=>{var e;if(null===(e=n.current)||void 0===e?void 0:e.workInfo){var r;const{width:e,height:o,name:s}=null===(r=n.current)||void 0===r?void 0:r.workInfo,u=Object(i.b)(e,o,new a.RGBA(100,0,0)),f=await t.getLayers(),l=u.getContext("2d");l&&f.reduceRight((t,{canvas:n})=>{l.drawImage(n,0,0,e,o)},{});const d=document.createElement("a");d.href=u.toDataURL(),d.download=`${s}.png`,d.onclick=()=>{d.onload=null;const{destroy:t}=c.Modal.info({title:"export",content:"success",onOk:()=>t()})},d.click()}}},"export")}}}]);