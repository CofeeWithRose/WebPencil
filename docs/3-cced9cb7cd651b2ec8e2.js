(window.webpackJsonp=window.webpackJsonp||[]).push([[3,27,28,30,31,32,33],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a(20),s=a(40),i=a.n(s),l=a(7),d=a(6);const u=c.RGBA.BLACK;t.default=({pCanvasController:e})=>{const t=(t=u)=>{e.setColor(t)};return Object(n.useEffect)(()=>{if(e)return e.on("init",()=>t()),e.off("init",()=>t())},[]),r.a.createElement("div",{className:i.a.topToolBar},r.a.createElement(l.default,{pCanvasController:e}),r.a.createElement(o.default,{defaultValue:u,onChange:t}),r.a.createElement(d.default,{pCanvasController:e}))}},12:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(0),r=a.n(n),o=a(76),c=a(42),s=a.n(c),i=a(11),l=a(81),d=a.n(l),u=a(58),f=a(10),y=a(9),h=a(2);function m(){const e=Object(n.useState)(),[t,a]=e,{pCanvas:c}=Object(i.usePCanvas)(),[l,m]=Object(n.useState)(!0),{replace:v,location:p}=Object(h.useHistory)();return Object(n.useEffect)(()=>{(async()=>{const{workId:e}=d.a.parse(p.search.substr(1));m(!0);const t=await u.c.getWorkDetail(e);t?(m(!1),a(t)):v("./home")})()},[]),Object(n.useEffect)(()=>()=>{},[t]),r.a.createElement(o.a,{contentClassName:s.a.layout,headNode:r.a.createElement(f.default,{pCanvasController:c}),asideNode:r.a.createElement(y.default,{pCanvasController:c})},r.a.createElement(i.PCanvas,{loading:l,pCanvasController:c,initValue:t}))}},22:function(e,t,a){"use strict";a.r(t),a.d(t,"RecordData",(function(){return o})),a.d(t,"RecordInfo",(function(){return s})),a.d(t,"recordListReducer",(function(){return l}));var n=a(15),r=a(45);class o{constructor(){this.add=void 0,this.remove=void 0,this.modify=void 0}}const c=async({type:e,data:t})=>{switch(e){case"add":t=t;const{path:e,name:a}=n.a.analyzePath(t.canvasPath);await n.a.remove(e,a);break;case"modify":const{fromCanvasPath:r,toCanvasPath:o}=t,{path:c,name:s}=n.a.analyzePath(o),{path:i,name:l}=n.a.analyzePath(r);await Promise.all([n.a.remove(c,s),n.a.remove(i,l)]);break;case"remove":const{canvasPath:d}=t,{path:u,name:f}=n.a.analyzePath(d);await n.a.remove(u,f)}};class s{constructor(e,t){this.type=e,this.data=t}}const i=async(e,t)=>{const{type:a,data:o}=e;if("add"!==a)if("modify"!==a)if("remove"!==a);else{const{index:e}=o;t.removeLayerByIndex(e,"history")}else{const{index:e,fromCanvasPath:a,toCanvasPath:c}=o,{path:s,name:i}=n.a.analyzePath(c),[{data:l}]=await n.a.get(s,i),d=await Object(r.c)(l),u=t.setLayerContent(e,d,"history");t.focusLayer(u)}else{const{index:e,canvasPath:a}=o,{path:c,name:s}=n.a.analyzePath(a),[{data:i}]=await n.a.get(c,s),l=await Object(r.c)(i),d=t.addLayerContent(e,l,"history");t.focusLayer(d)}},l=({cursor:e,recorderList:t},{type:a,payload:n,pCanvasController:r})=>{switch(a){case"add":if(e<t.length-1){t.splice(Math.max(e,0)).map(e=>c(e))}if(100<=t.length){t.splice(0,t.length-100+1).map(e=>c(e))}e++,n&&t.push(n);break;case"redo":if(++e<=t.length-1){const a=t[e];r&&i(a,r)}break;case"undo":if(e>-1){const a=t[e];r&&i((({type:e,data:t})=>{if("add"===e){const{index:e,canvasPath:a}=t;return new s("remove",{index:e,canvasPath:a})}if("modify"===e){const{index:e,fromCanvasPath:a,toCanvasPath:n}=t;return new s("modify",{index:e,fromCanvasPath:n,toCanvasPath:a})}const{index:a,canvasPath:n}=t;return new s("add",{index:a,canvasPath:n})})(a),r)}e--}return{cursor:Math.max(Math.min(e,t.length-1),-1),recorderList:t}}},23:function(e,t,a){"use strict";a.r(t);var n=a(62),r=a.n(n),o=a(0),c=a.n(o),s=a(35),i=a.n(s),l=a(20);const d=(e,{pixX:t,pixY:a,pixR:n,pixWidth:r,start:o,end:c},s)=>{const i=n-r,l={x:t+Math.cos(o)*i,y:a+Math.sin(o)*i},d={x:t+Math.cos(o)*n,y:a+Math.sin(o)*n},u={x:t+Math.cos(c)*i,y:a+Math.sin(c)*i},f=s.toRGBAString();e.beginPath(),e.fillStyle=f,e.strokeStyle=f,e.moveTo(l.x,l.y),e.lineTo(d.x,d.y),e.arc(t,a,n,o,c),e.lineTo(u.x,u.y),e.arc(t,a,i,c,o,!0),e.closePath(),e.fill(),e.stroke()},u=(e,{pixX:t,pixY:a,pixR:n,pixWidth:r},o)=>{const c=Math.sin(.25*Math.PI)*(n-r),s=2*c;e.clearRect(t-c,a-c,s,s);const i=e.createLinearGradient(t-c,a+c,t-c,a-c);i.addColorStop(0,o),i.addColorStop(1,"white"),e.fillStyle=i,e.fillRect(t-c,a-c,s,s);const l=e.createLinearGradient(t-c,a-c,t+c,a-c);l.addColorStop(0,"black"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.fillRect(t-c,a-c,s,s)},f=(e,{x:t,y:a,width:n,r:r})=>{const o=Math.sin(.25*Math.PI)*(r-n),c=t-o,s=t+o,i=a-o,l=a+o;return e.x>c&&e.x<s&&e.y>i&&e.y<l},y=(e,t)=>{const{x:a,y:n,width:r,r:o}=t,c=(e.x-a)**2+(e.y-n)**2;return c>(o-r)**2&&c<o**2?"circle":f(e,t)?"round":null},h=(e,{x:t,y:a,width:n,r:r})=>{const o=r-.5*n,c=e.x-t,s=e.y-a,i=Math.sqrt(c**2+s**2);return{x:t+c*o/i,y:a+s*o/i}},m=(e,{x:t,y:a})=>{const n=e.x-t,r=a-e.y,o=Math.atan2(r,n),c=1-(o>=0?o:o+2*Math.PI)/(2*Math.PI),s=[new l.RGBA(255,0,0),new l.RGBA(255,255,0),new l.RGBA(0,255,0),new l.RGBA(0,255,255),new l.RGBA(0,0,255),new l.RGBA(255,0,255),new l.RGBA(255,0,0)];for(let e=0;e<6;e++){const t=e*(1/6),a=(e+1)*(1/6);if(c>t&&c<a)return l.RGBA.getLerpColor(s[e],s[e+1],1-(a-c)/(1/6));if(c===t)return s[e];if(c===a)return s[e+1]}return l.RGBA.BLACK},v=r()((e,t,a,n)=>{const r=m(t,{x:n.x,y:n.y}),o=Math.cos(.25*Math.PI)*n.r-n.width;e&&e(((e,t,a,n,r)=>{const o=a-r,c=n-r,s=2*r,i=1-Math.max(Math.min((e.y-c)/s,1),0),d=Math.max(Math.min((e.x-o)/s,1),0);return l.RGBA.mix(l.RGBA.mix(t,l.RGBA.WHITE,i),l.RGBA.BLACK,1-d)})(a,r,n.x,n.y,o))},200);t.default=({value:e,onChange:t})=>{const[a,n]=Object(o.useState)({x:0,y:0}),[r,s]=Object(o.useState)({x:0,y:0}),[p,x]=Object(o.useState)(null),[C,w]=Object(o.useState)(),[P,E]=Object(o.useState)(),b=Object(o.useRef)({isSelecting:!1}),g=Object(o.useRef)(null);Object(o.useEffect)(()=>{},[e]),Object(o.useEffect)(()=>{if(g.current){const e=g.current.getContext("2d"),t=g.current.clientWidth*devicePixelRatio;if(g.current.width=t,g.current.height=t,e){E(e);const t=.5*g.current.clientWidth,a=.5*g.current.width,r={x:t,y:t,r:t-10,width:30,pixX:a,pixY:a,pixR:a-10*devicePixelRatio,pixWidth:30*devicePixelRatio};u(e,r,"rgb(255,0,0)"),((e,t)=>{const a=[new l.RGBA(255,0,0),new l.RGBA(255,255,0),new l.RGBA(0,255,0),new l.RGBA(0,255,255),new l.RGBA(0,0,255),new l.RGBA(255,0,255),new l.RGBA(255,0,0)],n=2*Math.PI/6;for(let r=0;r<a.length-1;r++){const o=l.RGBA.Lerp(a[r],a[r+1],255),c=r*n,s=((r+1)*n-c)/o.length;for(let a=0;a<o.length-1;a++)d(e,{...t,start:c+s*a,end:c+s*(a+1)},o[a])}})(e,r),w(r),n({x:t+r.r,y:t}),s({x:t,y:t})}}},[g.current]);return Object(o.useMemo)(()=>C&&v(t,a,r,C),[a,r]),c.a.createElement("div",{className:i.a.colorPannelWrap},c.a.createElement("canvas",{ref:g,className:i.a.colorPannel}),c.a.createElement("div",{className:i.a.circlePoint,style:{transform:`translate3d(${a.x-5}px, ${a.y-5}px, 0)`}}),c.a.createElement("div",{style:{transform:`translate3d(${r.x-5}px, ${r.y-5}px, 0)`},className:i.a.selectPoint}),c.a.createElement("div",{className:i.a.canvasCover,style:{height:`${C&&2*C.x}px`},onPointerDown:({nativeEvent:{offsetX:e,offsetY:t}})=>{if(C){b.current.isSelecting=!0,x(y({x:e,y:t},C));const a=y({x:e,y:t},C);"circle"===a&&n(h({x:e,y:t},C)),"round"===a&&s({x:e,y:t})}},onPointerUp:()=>{b.current.isSelecting=!1,x(null)},onPointerMove:({nativeEvent:{offsetX:e,offsetY:t}})=>{if(b.current.isSelecting&&C&&p){if("circle"===p&&P){n(h({x:e,y:t},C));const a=m({x:e,y:t},{x:C.x,y:C.y});u(P,C,a.toRGBAString())}if("round"===p){const a=((e,t)=>{const{x:a,y:n,width:r,r:o}=t,c=(Math.sin(.25*Math.PI),e.x-a),s=e.y-n;Math.sqrt(c**2+s**2);if(f(e,t))return e})({x:e,y:t},C);a&&s(a)}}}}))}},35:function(e,t,a){e.exports={colorBar:"colorBar_22b99",colorPannelWrap:"colorPannelWrap_94f56",colorPannel:"colorPannel_02c11",circlePoint:"circlePoint_0a8ba",selectPoint:"selectPoint_5aa22",canvasCover:"canvasCover_4958d"}},36:function(e,t,a){e.exports={recordBtn:"recordBtn_81954",recordBtnActive:"recordBtnActive_a74d3"}},37:function(e,t,a){e.exports={layerPannel:"layerPannel_e799a",layerDrawer:"layerDrawer_edc15",pannelWrap:"pannelWrap_b4fbf",canvases:"canvases_b0d45",active:"active_1674e"}},39:function(e,t,a){e.exports={asideTool:"asideTool_faaa6"}},4:function(e,t,a){"use strict";a.r(t);var n=a(46),r=a.n(n),o=a(0),c=a.n(o),s=a(1),i=a(36),l=a.n(i),d=a(45),u=a(22),f=a(15);const y=async e=>{const t=`record_${Date.now()}_${r()()}.png`,a=await Object(d.e)(e),n=`record/${t}`;return a&&await f.a.save({type:"image/png",data:a,path:"record/",name:t}),n};t.default=({pCanvasController:e})=>{const[{cursor:t,recorderList:a},n]=Object(o.useReducer)(u.recordListReducer,{cursor:-1,recorderList:[]}),r=t>=0,i=t<a.length-1;Object(o.useEffect)(()=>{const t=async e=>{const{data:{layerDetail:{canvas:t},index:a},tag:r}=e;if("history"===r)return;const o=await y(t);n({type:"add",payload:new u.RecordInfo("add",{index:a,canvasPath:o})})},a=async e=>{const{data:{layerDetail:{canvas:t},preContent:a,index:r},tag:o}=e;"history"!==o&&n({type:"add",payload:new u.RecordInfo("modify",{index:r,fromCanvasPath:await y(a),toCanvasPath:await y(t)})})},r=async e=>{const{data:{layerDetail:{canvas:t},index:a},tag:r}=e;if("history"===r)return;const o=await y(t);n({type:"add",payload:new u.RecordInfo("remove",{index:a,canvasPath:o})})};return e.on("addLayer",t),e.on("contentChange",a),e.on("removeLayer",r),()=>{e.off("addLayer",t),e.off("contentChange",a),e.off("removeLayer",r),f.a.remove("record")}},[]);return c.a.createElement(o.Fragment,null,c.a.createElement("span",{className:`${l.a.recordBtn} ${i&&l.a.recordBtnActive||""} `,onPointerUp:i&&(()=>{n({type:"redo",pCanvasController:e})})||void 0},"redo"),c.a.createElement(s.Divider,null),c.a.createElement("span",{className:`${l.a.recordBtn} ${r&&l.a.recordBtnActive||""}`,onPointerUp:r&&(()=>{n({type:"undo",pCanvasController:e})})||void 0},"undo"))}},40:function(e,t,a){e.exports={topToolBar:"topToolBar_7b6e5"}},42:function(e,t,a){e.exports={layout:"layout_72e38"}},5:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),c=a.n(o),s=a(1),i=a(23),l=a(20);t.default=({value:e,onChange:t,defaultValue:a})=>{const[o,d]=Object(n.useState)(!1),[u,f]=Object(n.useState)(a||l.RGBA.BLACK);Object(n.useEffect)(()=>{e&&f(e)},[e]);const y=()=>{d(e=>!e)};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{backgroundColor:u.toRGBAString()},className:c.a.colorBar,onPointerUp:y}),r.a.createElement(s.Drawer,{title:"colors",visible:o,onClose:y,mask:!1},r.a.createElement(i.default,{value:u,onChange:e=>{f(e),t&&t(e)}})))}},6:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a(0),r=a(58);function o({pCanvasController:e}){return Object(n.useEffect)(()=>{if(e){const t=({data:{workId:e,layerDetail:t}})=>{r.c.saveLayerDetail(e,t)},a=({data:{workId:e,layerDetail:t,index:a}})=>{r.c.saveLayerDetail(e,t,a)};return e.on("contentChange",t),e.on("addLayer",a),()=>{e.off("contentChange",t),e.off("addLayer",a)}}},[e]),null}},7:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),c=a(37),s=a.n(c),i=a(66),l=a.n(i);var d=(e,t,a)=>{const r=()=>((e,t)=>{const a=l()(e.current,({layerId:e})=>e),n=t.current;[...a].forEach(t=>{const a=n[t.layerId];if(a){((e,t)=>{const a=t.getContext("2d");a&&(a.clearRect(0,0,t.width,t.height),a.drawImage(e,0,0,e.width,e.height))})(t.canvas,a);const n=e.current.findIndex(({layerId:e})=>e===t.layerId);e.current.splice(n,1)}})})(t,a);return Object(n.useEffect)(r,[e]),{copyCanvas:r}};t.default=({pCanvasController:e})=>{const[t,a]=Object(n.useState)([]),c=Object(n.useRef)({}),i=Object(n.useRef)([]),{copyCanvas:l}=d(t,i,c),[u,f]=Object(n.useState)(""),[y,h]=Object(n.useState)(!1),m=()=>{h(e=>(e||setTimeout(l),!e))};Object(n.useEffect)(()=>{const t=async()=>{const t=await e.getLayers();let n=[...t];i.current.push(...t),a(e=>[...e,...n])};return e.on("init",t),()=>e.off("init",t)},[]),Object(n.useEffect)(()=>{const t=({data:{layerDetail:e}})=>{f(e.layerId)},n=({data:{layerDetail:e}})=>{i.current.push(e),a(t=>[e,...t])},r=({data:{layerDetail:e}})=>{a(t=>{const a=t.indexOf(e);return a>-1&&t.splice(a,1),[...t]})},o=({data:{layerDetail:e},tag:t})=>{e&&(i.current.push(e),setTimeout(l),"user"===t&&h(!1))};return e.on("addLayer",n),e.on("contentChange",o),e.on("focusLayer",t),e.on("removeLayer",r),()=>{e.off("contentChange",o),e.off("addLayer",n),e.off("focusLayer",t),e.off("removeLayer",r)}},[]);return r.a.createElement("div",null,r.a.createElement(o.Tag,{onPointerUp:m},"111"),r.a.createElement(o.Drawer,{title:null,width:200,visible:y,onClose:m,mask:!1,className:s.a.layerDrawer},r.a.createElement(o.List,{header:r.a.createElement("span",{onPointerUp:()=>{e.addLayer()}},"addlayer +"),className:s.a.pannelWrap,itemLayout:"horizontal",dataSource:t,rowKey:"layerId",renderItem:(a,n)=>{const{visible:i,layerId:l,name:d}=a;return r.a.createElement(o.List.Item,{className:l===u?s.a.active:""},r.a.createElement(o.List.Item.Meta,{avatar:r.a.createElement("canvas",{onPointerUp:()=>{return t=a,void e.focusLayer(t);var t},key:l,id:l,ref:e=>{c.current[l]=e},className:s.a.canvases,width:"45",height:"45"}),title:r.a.createElement("span",null,`layer ${t.length-n}`),description:r.a.createElement("div",null,r.a.createElement("span",null,i?"visible":"unvisible"),r.a.createElement("span",{onPointerUp:()=>{return t=a,void e.removeLayer(t);var t}},"remove"))}))}})))}},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),o=a(77),c=a.n(o),s=a(1),i=a(92),l=a(2);function d({className:e="",headNode:t=null,asideClass:a="",asideNode:n=null,children:o=null,beforeBack:d,showBackButton:u=!0,contentClassName:f=""}){const{goBack:y}=Object(l.useHistory)();return r.a.createElement("section",{className:`${c.a.section} ${e}`},r.a.createElement("header",null,u&&r.a.createElement(s.Button,{ghost:!0,onPointerUp:async()=>{(d&&await d()||!d)&&y()},shape:"circle",size:"small",icon:r.a.createElement(i.a,null)}),!1,t),r.a.createElement("div",{className:c.a.wrapper},r.a.createElement("aside",{className:a},n),r.a.createElement("main",{className:f},o)))}},77:function(e,t,a){e.exports={section:"section_c21f7",wrapper:"wrapper_e44d8"}},9:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),c=a(39),s=a.n(c),i=a(4);t.default=({pCanvasController:e})=>{Object(n.useEffect)(()=>{if(e){const t=()=>{e.setBrushWidth(1),e.setOpacity(1)};return e.on("init",t),()=>e.off("init",t)}},[]);return r.a.createElement("div",{className:s.a.asideTool},r.a.createElement(o.Divider,null),r.a.createElement(o.Slider,{defaultValue:1,vertical:!0,min:1,max:200,step:1,onChange:t=>{e&&e.setBrushWidth(t)}}),r.a.createElement(o.Divider,null),r.a.createElement(o.Slider,{vertical:!0,defaultValue:1,min:0,max:1,step:.01,onChange:t=>{e&&e.setOpacity(t)}}),r.a.createElement(o.Divider,null),r.a.createElement(i.default,{pCanvasController:e}),r.a.createElement(o.Divider,null))}}}]);