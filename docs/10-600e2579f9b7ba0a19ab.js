(window.webpackJsonp=window.webpackJsonp||[]).push([[10,33],{37:function(e,t,n){e.exports={layerPannel:"layerPannel_e799a",layerDrawer:"layerDrawer_edc15",pannelWrap:"pannelWrap_b4fbf",canvases:"canvases_b0d45",active:"active_1674e"}},51:function(e,t){var n=Array.isArray;e.exports=n},65:function(e,t){e.exports=function(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}},66:function(e,t,n){var r=n(67),a=n(68);e.exports=function(e,t){return e&&e.length?a(e,r(t,2)):[]}},67:function(e,t){e.exports=function(e){return e}},68:function(e,t,n){var r=n(69),a=n(70),o=n(71),c=n(72),s=n(73),u=n(74);e.exports=function(e,t,n){var i=-1,l=a,f=e.length,p=!0,d=[],v=d;if(n)p=!1,l=o;else if(f>=200){var y=t?null:s(e);if(y)return u(y);p=!1,l=c,v=new r}else v=t?[]:d;e:for(;++i<f;){var h=e[i],m=t?t(h):h;if(h=n||0!==h?h:0,p&&m==m){for(var g=v.length;g--;)if(v[g]===m)continue e;t&&v.push(m),d.push(h)}else l(v,m,n)||(v!==d&&v.push(m),d.push(h))}return d}},69:function(e,t,n){var r=n(51);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return r(e)?e:[e]}},7:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),c=n(37),s=n.n(c),u=n(66),i=n.n(u);var l=(e,t,n)=>{const a=()=>((e,t)=>{const n=i()(e.current,({layerId:e})=>e),r=t.current;[...n].forEach(t=>{const n=r[t.layerId];if(n){((e,t)=>{const n=t.getContext("2d");n&&(n.clearRect(0,0,t.width,t.height),n.drawImage(e,0,0,e.width,e.height))})(t.canvas,n);const r=e.current.findIndex(({layerId:e})=>e===t.layerId);e.current.splice(r,1)}})})(t,n);return Object(r.useEffect)(a,[e]),{copyCanvas:a}};t.default=({pCanvasController:e})=>{const[t,n]=Object(r.useState)([]),c=Object(r.useRef)({}),u=Object(r.useRef)([]),{copyCanvas:i}=l(t,u,c),[f,p]=Object(r.useState)(""),[d,v]=Object(r.useState)(!1),y=()=>{v(e=>(e||setTimeout(i),!e))};Object(r.useEffect)(()=>{const t=async()=>{const t=await e.getLayers();let r=[...t];u.current.push(...t),n(e=>[...e,...r])};return e.on("init",t),()=>e.off("init",t)},[]),Object(r.useEffect)(()=>{const t=({data:{layerDetail:e}})=>{p(e.layerId)},r=({data:{layerDetail:e}})=>{u.current.push(e),n(t=>[e,...t])},a=({data:{layerDetail:e}})=>{n(t=>{const n=t.indexOf(e);return n>-1&&t.splice(n,1),[...t]})},o=({data:{layerDetail:e},tag:t})=>{e&&(u.current.push(e),setTimeout(i),"user"===t&&v(!1))};return e.on("addLayer",r),e.on("contentChange",o),e.on("focusLayer",t),e.on("removeLayer",a),()=>{e.off("contentChange",o),e.off("addLayer",r),e.off("focusLayer",t),e.off("removeLayer",a)}},[]);return a.a.createElement("div",null,a.a.createElement(o.Tag,{onPointerUp:y},"111"),a.a.createElement(o.Drawer,{title:null,width:200,visible:d,onClose:y,mask:!1,className:s.a.layerDrawer},a.a.createElement(o.List,{header:a.a.createElement("span",{onPointerUp:()=>{e.addLayer()}},"addlayer +"),className:s.a.pannelWrap,itemLayout:"horizontal",dataSource:t,rowKey:"layerId",renderItem:(n,r)=>{const{visible:u,layerId:i,name:l}=n;return a.a.createElement(o.List.Item,{className:i===f?s.a.active:""},a.a.createElement(o.List.Item.Meta,{avatar:a.a.createElement("canvas",{onPointerUp:()=>{return t=n,void e.focusLayer(t);var t},key:i,id:i,ref:e=>{c.current[i]=e},className:s.a.canvases,width:"45",height:"45"}),title:a.a.createElement("span",null,`layer ${t.length-r}`),description:a.a.createElement("div",null,a.a.createElement("span",null,u?"visible":"unvisible"),a.a.createElement("span",{onPointerUp:()=>{return t=n,void e.removeLayer(t);var t}},"remove"))}))}})))}},70:function(e,t,n){var r=n(65);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},71:function(e,t){e.exports=function(e,t,n){for(var r=-1,a=null==e?0:e.length;++r<a;)if(n(t,e[r]))return!0;return!1}},72:function(e,t,n){var r=n(65);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},73:function(e,t){e.exports=function(){}},74:function(e,t){e.exports=function(){return[]}}}]);