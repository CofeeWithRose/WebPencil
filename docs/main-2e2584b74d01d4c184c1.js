!function(e){function t(t){for(var a,n,r=t[0],i=t[1],s=0,c=[];s<r.length;s++)n=r[s],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&c.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(l&&l(t);c.length;)c.shift()()}var a={},n={25:0},o={25:0};function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[];n[e]?t.push(n[e]):0!==n[e]&&{1:1,2:1,3:1,4:1,7:1,9:1,11:1,12:1,13:1,18:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,34:1,35:1}[e]&&t.push(n[e]=new Promise((function(t,a){for(var o=e+"-"+{0:"31d6cfe0d16ae931b73c",1:"6cd39b9a25201f1df9ee",2:"7ae5c88aa917b20a447f",3:"dac6dba3d75b2cb2d99c",4:"78f74dd66ba79d2f01eb",5:"31d6cfe0d16ae931b73c",6:"31d6cfe0d16ae931b73c",7:"86d16d4b9ff83846bff2",8:"31d6cfe0d16ae931b73c",9:"6d050213095be7deae2b",10:"31d6cfe0d16ae931b73c",11:"ed4f20271c8d70fec3c6",12:"4326f1e920d38908d0ce",13:"3343a644796b8e237ce1",14:"31d6cfe0d16ae931b73c",15:"31d6cfe0d16ae931b73c",16:"31d6cfe0d16ae931b73c",17:"31d6cfe0d16ae931b73c",18:"4326f1e920d38908d0ce",19:"31d6cfe0d16ae931b73c",20:"31d6cfe0d16ae931b73c",21:"31d6cfe0d16ae931b73c",22:"31d6cfe0d16ae931b73c",23:"31d6cfe0d16ae931b73c",24:"31d6cfe0d16ae931b73c",26:"3343a644796b8e237ce1",27:"5562136fc928e69bb140",28:"6e0204eb71dd23e11e72",29:"86d16d4b9ff83846bff2",30:"6cd39b9a25201f1df9ee",31:"741206d5e7a336304a6b",32:"1989b42e1b66da636a37",33:"4326f1e920d38908d0ce",34:"ce817861966c7af7c9af",35:"ed4f20271c8d70fec3c6"}[e]+".css",i=r.p+o,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=(d=s[c]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===i))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){var d;if((l=(d=p[c]).getAttribute("data-href"))===o||l===i)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var o=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete n[e],u.parentNode.removeChild(u),a(r)},u.href=i,document.getElementsByTagName("head")[0].appendChild(u)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+""+e+"-"+{0:"e94314d16039a97d5a7c",1:"2c34a4b46625e17ea00d",2:"91ffcf4ca4578827b6ce",3:"c5bf56c73ae849b89148",4:"c851ea8d41f24e27b6b2",5:"d859aa5435bac48d1635",6:"638c97a9c5ca5bb3f64a",7:"c17adf6f4181cc096a2f",8:"356a91f0ed02fa6af2f0",9:"53567fc5c60fc333aa8b",10:"629bc82c6920a483c8fc",11:"a0c154f48aa76d867ada",12:"3b4f47c3b633fbf78f34",13:"c593330df0e9c3177f7b",14:"b295131ddba80748f820",15:"7aec62c31ebf0c7b8fc2",16:"a5d91b4f29dc9def7e76",17:"ab6e239fa3744d0e43d2",18:"fd56e6f438666c86a294",19:"6451d1306a431c690105",20:"92e63dcdb13bd39a6f68",21:"dc623804c3d6b712cda1",22:"643745e4b44487cd26f7",23:"b06aec629ff9c2c9580c",24:"2a0b6deea71750b99a1f",26:"266e87ba4e1ad2caf377",27:"556e1c12161baba44871",28:"2f340b00d40094d0c68c",29:"6a774ba85763e34299b8",30:"dc651448397a2277ef9e",31:"722a5c009ed76f673079",32:"b33484ed02dfcdfd7beb",33:"32b407381b0785cf1810",34:"02425b65cf5ed479876f",35:"bbdfa748763b7373af5f"}[e]+".js"}(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r.oe=function(e){throw e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=s;r(r.s=35)}([function(e,t){e.exports=React},function(e,t){e.exports=antd},function(e,t){e.exports=ReactRouterDOM},,,,,,,,,,,,,function(e,t){e.exports=Dexie},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(15),o=a.n(n);let r;class i{static async init(e){"1"!==localStorage.getItem("has_clean_db")&&(await o.a.delete("WebPencilVitureFile"),localStorage.setItem("has_clean_db","1")),r=await new o.a("WebPencilVitureFile"),await r.version(1).stores({files:"++id, [path+name]"})}static async save(e){return new Promise(t=>{const a={name:"saveFile",params:[e],callback:t};this.sheduleOperate(a)})}static async remove(e,t){return new Promise(a=>{const n={name:"removeFile",params:[e,t],callback:a};this.sheduleOperate(n)})}static async getNames(e){return new Promise(t=>{const a={name:"getFileNames",params:[e],callback:t};this.sheduleOperate(a)})}static async sheduleOperate(e){this.operates.push(e),this.isOperating||await this.startOperate()}static async startOperate(){let e=this.operates.shift();for(this.isOperating=!0;e;){const{name:t,params:a,callback:n}=e,o=await this[t].apply(this,a);if(await n(o),e=this.operates.shift(),!e){this.isOperating=!1;break}}}static async saveFile({path:e,data:t,type:a,name:n}){const o=await r.files.where("[path+name]").equals([e,n]).first();if(o){const{id:i}=o;await r.files.put({id:i,path:e,data:t,type:a,name:n})}else await r.files.add({path:e,data:t,type:a,name:n})}static analyzePath(e){const t=e.lastIndexOf("/"),a=e.substring(0,t);return{name:e.substr(t+1),path:a}}static async getFileNames(e){return(await r.files.where({path:e}).toArray()).map(({name:e})=>e)}static async removeFile(e,t){let a=0;a=t?await r.files.where("[path+name]").equals([e,t]).delete():await r.files.where("path").startsWith(e).delete()}}i.operates=[],i.isOperating=!1,i.get=(...e)=>new Promise(t=>{const a={name:"getFile",params:e,callback:t};i.sheduleOperate(a)}),i.getFile=async(e,t)=>{let a;return a=t?[await r.files.where("[path+name]").equals([e,t]).first()]:await r.files.where("path").equals(e).toArray(),a}},function(e,t){e.exports=VConsole},function(e,t){e.exports=ReactDOM},function(e,t,a){t.hot=function(e){return e}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"}},,,,,,,,,,,function(e,t,a){},function(e,t,a){var n={"./pages/home":[14,9,0,9],"./pages/home/":[14,9,0,9],"./pages/home/FileMenu":[28,9,21],"./pages/home/FileMenu.tsx":[28,9,21],"./pages/home/component/WorkItem":[9,9,13],"./pages/home/component/WorkItem/":[9,9,13],"./pages/home/component/WorkItem/index":[9,9,13],"./pages/home/component/WorkItem/index.tsx":[9,9,13],"./pages/home/component/WorkItem/style.less":[39,7,26],"./pages/home/index":[14,9,0,9],"./pages/home/index.tsx":[14,9,0,9],"./pages/home/style.less":[42,7,27],"./pages/paint":[13,9,0,8,1,3],"./pages/paint/":[13,9,0,8,1,3],"./pages/paint/aside-tool-bar":[10,9,4],"./pages/paint/aside-tool-bar/":[10,9,4],"./pages/paint/aside-tool-bar/index":[10,9,4],"./pages/paint/aside-tool-bar/index.less":[40,7,28],"./pages/paint/aside-tool-bar/index.tsx":[10,9,4],"./pages/paint/aside-tool-bar/record":[4,9,7],"./pages/paint/aside-tool-bar/record/":[4,9,7],"./pages/paint/aside-tool-bar/record/index":[4,9,7],"./pages/paint/aside-tool-bar/record/index.less":[37,7,29],"./pages/paint/aside-tool-bar/record/index.tsx":[4,9,7],"./pages/paint/aside-tool-bar/record/reducer":[23,9,17],"./pages/paint/aside-tool-bar/record/reducer.ts":[23,9,17],"./pages/paint/index":[13,9,0,8,1,3],"./pages/paint/index.tsx":[13,9,0,8,1,3],"./pages/paint/pcanvas":[12,9,1,5],"./pages/paint/pcanvas/":[12,9,1,5],"./pages/paint/pcanvas/index":[12,9,1,5],"./pages/paint/pcanvas/index.tsx":[12,9,1,5],"./pages/paint/pcanvas/pcanvas.context":[26,9,19],"./pages/paint/pcanvas/pcanvas.context.ts":[26,9,19],"./pages/paint/pcanvas/pcanvas.layer":[27,9,16],"./pages/paint/pcanvas/pcanvas.layer.ts":[27,9,16],"./pages/paint/pcanvas/pcnvas.controller":[25,9,15],"./pages/paint/pcanvas/pcnvas.controller.ts":[25,9,15],"./pages/paint/pcanvas/style.less":[44,7,30],"./pages/paint/pcanvas/usePointerEventManager":[29,9,22],"./pages/paint/pcanvas/usePointerEventManager.ts":[29,9,22],"./pages/paint/style.less":[43,7,31],"./pages/paint/top-tool-bar":[11,9,2],"./pages/paint/top-tool-bar/":[11,9,2],"./pages/paint/top-tool-bar/index":[11,9,2],"./pages/paint/top-tool-bar/index.less":[41,7,32],"./pages/paint/top-tool-bar/index.tsx":[11,9,2],"./pages/paint/top-tool-bar/tool-item/brush":[3,9,14],"./pages/paint/top-tool-bar/tool-item/brush/":[3,9,14],"./pages/paint/top-tool-bar/tool-item/brush/index":[3,9,14],"./pages/paint/top-tool-bar/tool-item/brush/index.bk":[30,9,20],"./pages/paint/top-tool-bar/tool-item/brush/index.bk.tsx":[30,9,20],"./pages/paint/top-tool-bar/tool-item/brush/index.ts":[3,9,14],"./pages/paint/top-tool-bar/tool-item/brush/types":[22,9,23],"./pages/paint/top-tool-bar/tool-item/brush/types.ts":[22,9,23],"./pages/paint/top-tool-bar/tool-item/color-selector":[5,9,12],"./pages/paint/top-tool-bar/tool-item/color-selector/":[5,9,12],"./pages/paint/top-tool-bar/tool-item/color-selector/color-pannel":[24,9,18],"./pages/paint/top-tool-bar/tool-item/color-selector/color-pannel.tsx":[24,9,18],"./pages/paint/top-tool-bar/tool-item/color-selector/index":[5,9,12],"./pages/paint/top-tool-bar/tool-item/color-selector/index.less":[36,7,33],"./pages/paint/top-tool-bar/tool-item/color-selector/index.tsx":[5,9,12],"./pages/paint/top-tool-bar/tool-item/color-selector/rgba":[21,9,24],"./pages/paint/top-tool-bar/tool-item/color-selector/rgba.ts":[21,9,24],"./pages/paint/top-tool-bar/tool-item/export":[7,9,10],"./pages/paint/top-tool-bar/tool-item/export/":[7,9,10],"./pages/paint/top-tool-bar/tool-item/export/index":[7,9,10],"./pages/paint/top-tool-bar/tool-item/export/index.less":[46,7,34],"./pages/paint/top-tool-bar/tool-item/export/index.tsx":[7,9,10],"./pages/paint/top-tool-bar/tool-item/layer-pannel":[8,9,11],"./pages/paint/top-tool-bar/tool-item/layer-pannel/":[8,9,11],"./pages/paint/top-tool-bar/tool-item/layer-pannel/index":[8,9,11],"./pages/paint/top-tool-bar/tool-item/layer-pannel/index.tsx":[8,9,11],"./pages/paint/top-tool-bar/tool-item/layer-pannel/style.less":[38,7,35],"./pages/paint/top-tool-bar/tool-item/save":[6,9,6],"./pages/paint/top-tool-bar/tool-item/save/":[6,9,6],"./pages/paint/top-tool-bar/tool-item/save/index":[6,9,6],"./pages/paint/top-tool-bar/tool-item/save/index.tsx":[6,9,6]};function o(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(2).map(a.e)).then((function(){return a.t(o,t[1])}))}o.keys=function(){return Object.keys(n)},o.id=32,e.exports=o},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(17),o=a.n(n);var r=a(0),i=a.n(r),s=a(18),c=a.n(s),l=a(19),p=a(2);const d=[{path:"paint"},{path:"home"}];a(31);var u=a(1);const f=(e,t,n)=>(e.map(e=>{const{children:o,path:s}=e,c=`${t}/${s}`;o&&o.length?f(o,c,n):n.push(i.a.createElement(p.Route,{key:c,path:c,component:Object(r.lazy)(()=>a(32)(`./pages${c}`))}))}),n),m=Object(l.hot)(({})=>i.a.createElement(r.Suspense,{fallback:i.a.createElement(u.Spin,{style:{top:"50%",left:"50%",position:"absolute",transform:"translate3d(-50%, -50%, 0)"}})},i.a.createElement(p.HashRouter,null,i.a.createElement(p.Switch,null,f(d,"",[]),i.a.createElement(p.Redirect,{to:"/home"})))));var h=a(20),g={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var v={lang:b({placeholder:"请选择日期",yearPlaceholder:"请选择年份",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeWeekPlaceholder:["开始周","结束周"]},a.n(h).a),timePickerLocale:b({},g)};v.lang.ok="确 定";var y={locale:"zh-cn",Pagination:{items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页"},DatePicker:v,TimePicker:g,Calendar:v,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",selectAll:"全选当页",selectInvert:"反选当页",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开"},PageHeader:{back:"返回"}};try{self["workbox:window:5.1.2"]&&_()}catch(e){}function w(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}try{self["workbox:core:5.1.2"]&&_()}catch(e){}var x=function(){var e=this;this.promise=new Promise((function(t,a){e.resolve=t,e.reject=a}))};function P(e,t){var a=location.href;return new URL(e,a).href===new URL(t,a).href}var k=function(e,t){this.type=e,Object.assign(this,t)};function E(e,t,a){return a?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function O(){}var j=function(e){var t,a;function n(t,a){var n,o;return void 0===a&&(a={}),(n=e.call(this)||this).t={},n.i=0,n.o=new x,n.u=new x,n.s=new x,n.v=0,n.h=new Set,n.l=function(){var e=n.g,t=e.installing;n.i>0||!P(t.scriptURL,n.m)||performance.now()>n.v+6e4?(n.P=t,e.removeEventListener("updatefound",n.l)):(n.p=t,n.h.add(t),n.o.resolve(t)),++n.i,t.addEventListener("statechange",n.k)},n.k=function(e){var t=n.g,a=e.target,o=a.state,r=a===n.P,i=r?"external":"",s={sw:a,originalEvent:e};!r&&n.j&&(s.isUpdate=!0),n.dispatchEvent(new k(i+o,s)),"installed"===o?n.O=self.setTimeout((function(){"installed"===o&&t.waiting===a&&n.dispatchEvent(new k(i+"waiting",s))}),200):"activating"===o&&(clearTimeout(n.O),r||n.u.resolve(a))},n.R=function(e){var t=n.p;t===navigator.serviceWorker.controller&&(n.dispatchEvent(new k("controlling",{sw:t,originalEvent:e,isUpdate:n.j})),n.s.resolve(t))},n.S=(o=function(e){var t=e.data,a=e.source;return E(n.getSW(),(function(){n.h.has(a)&&n.dispatchEvent(new k("message",{data:t,sw:a,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(o.apply(this,e))}catch(e){return Promise.reject(e)}}),n.m=t,n.t=a,navigator.serviceWorker.addEventListener("message",n.S),n}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o,r,i=n.prototype;return i.register=function(e){var t=(void 0===e?{}:e).immediate,a=void 0!==t&&t;try{var n=this;return function(e,t){var a=e();return a&&a.then?a.then(t):t()}((function(){if(!a&&"complete"!==document.readyState)return L(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return n.j=Boolean(navigator.serviceWorker.controller),n.U=n.B(),E(n.L(),(function(e){n.g=e,n.U&&(n.p=n.U,n.u.resolve(n.U),n.s.resolve(n.U),n.U.addEventListener("statechange",n.k,{once:!0}));var t=n.g.waiting;return t&&P(t.scriptURL,n.m)&&(n.p=t,Promise.resolve().then((function(){n.dispatchEvent(new k("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),n.p&&(n.o.resolve(n.p),n.h.add(n.p)),n.g.addEventListener("updatefound",n.l),navigator.serviceWorker.addEventListener("controllerchange",n.R,{once:!0}),n.g}))}))}catch(e){return Promise.reject(e)}},i.update=function(){try{return this.g?L(this.g.update()):void 0}catch(e){return Promise.reject(e)}},i.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(e){return Promise.reject(e)}},i.messageSW=function(e){try{return E(this.getSW(),(function(t){return function(e,t){return new Promise((function(a){var n=new MessageChannel;n.port1.onmessage=function(e){a(e.data)},e.postMessage(t,[n.port2])}))}(t,e)}))}catch(e){return Promise.reject(e)}},i.B=function(){var e=navigator.serviceWorker.controller;return e&&P(e.scriptURL,this.m)?e:void 0},i.L=function(){try{var e=this;return function(e,t){try{var a=e()}catch(e){return t(e)}return a&&a.then?a.then(void 0,t):a}((function(){return E(navigator.serviceWorker.register(e.m,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},o=n,(r=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&w(o.prototype,r),n}(function(){function e(){this.M=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this._(e).add(t)},t.removeEventListener=function(e,t){this._(e).delete(t)},t.dispatchEvent=function(e){e.target=this;var t=this._(e.type),a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var o;if(a){if(n>=t.length)break;o=t[n++]}else{if((n=t.next()).done)break;o=n.value}o(e)}},t._=function(e){return this.M.has(e)||this.M.set(e,new Set),this.M.get(e)},e}());function L(e,t){if(!t)return e&&e.then?e.then(O):Promise.resolve()}var S=a(16);a(33),a(34);new class{constructor(){this.logCache=[],this.log=(...e)=>{},this.cacheLog=(...e)=>{this.logCache.push(e)},this.outputLog=(...e)=>new Promise(t=>{setTimeout(()=>{this.log(...e),t()},30)});new o.a}};window.VERSION="2020-6-30 10:53:00";if(S.a.init({permissionTip:e=>new Promise(t=>{u.message.info(i.a.createElement("span",{onClick:async()=>{try{await e()}catch(e){}u.message.destroy(),t()}},"获取文件读取权限"),0)})}),c.a.render(i.a.createElement(u.ConfigProvider,{locale:y},i.a.createElement(m,null)),document.querySelector("#root")),"serviceWorker"in navigator){const e=()=>{const e=new j("./service-worker.js");e.addEventListener("activated",({isUpdate:e})=>{e&&u.message.info(i.a.createElement("span",{onPointerUp:()=>window.location.reload()},"应用已更新，点击加载."),0)}),e.register()};let t;e(),document.addEventListener("visibilitychange",t=>{document.visibilityState&&e()}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),t=e;u.message.info(i.a.createElement("span",{onPointerUp:()=>{t.prompt(),t.userChoice.then(e=>{e.outcome})}},"将网站显示在桌面"))})}window.addEventListener("load",()=>{document.addEventListener("touchmove",e=>{e.preventDefault()}),document.addEventListener("touchstart",e=>{e.preventDefault()}),document.addEventListener("gesturestart",(function(e){e.preventDefault()})),document.addEventListener("pointermove",e=>{e.preventDefault()})})},,,,,,,,,,function(e,t){e.exports=Hammer}]);