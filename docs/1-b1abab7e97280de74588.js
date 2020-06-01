(window.webpackJsonp=window.webpackJsonp||[]).push([[1,19],{22:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=t,this.b=r,this.a=a}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,t,r){for(var a=[],n=(t.r-e.r)/r,o=(t.g-e.g)/r,i=(t.b-e.b)/r,c=(t.a-e.a)/r,s=0;s<r;s++)a.push(new RGBA(e.r+n*s,e.g+o*s,e.b+i*s,e.a+c*s));return a}},{key:"mutipy",value:function(e,t){return new RGBA(e.r*t,e.g*t,e.b*t)}},{key:"add",value:function(e,t){var r=e.r,a=e.g,n=e.b;return new RGBA(r+t.r,a+t.g,n+t.b)}},{key:"mix",value:function(e,t,r){return new RGBA(e.r+(t.r-e.r)*r,e.g+(t.g-e.g)*r,e.b+(t.b-e.b)*r)}},{key:"getLerpColor",value:function(e,t,r){var a=e.r,n=e.g,o=e.b,i=e.a;return new RGBA((t.r-a)*r+a,(t.g-n)*r+n,(t.b-o)*r+o,(t.a-i)*r+i)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/color-selector/rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},44:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return l}));var a,n=r(47),o=r.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,a=document.createElement("canvas");a.width=e,a.height=t,a.setAttribute("uuid",o()("canvasId-"));var n=a.getContext("2d");return n&&r&&(n.fillStyle=r.toRGBAString(),n.fillRect(0,0,e,t)),a},u=function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return null==r||r.clearRect(0,0,t.width,t.height),null==r||r.drawImage(e,0,0,e.width,e.height),t},_=function(e){return new Promise((function(t){var r=new Image;r.onload=function(){r.onload=null,t(u(r))},r.src=URL.createObjectURL(e)}))},l=function(e){return new Promise((function(t){e.toBlob(t,"image/png",1)}))};(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"createCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(u,"copyCanvas","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(_,"createCanvasByFile","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts"),i.register(l,"toBlob","/Users/muyin/Documents/code/WebPencil/src/workStorage/canvas.util.ts")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(3)(e))},45:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var a,n=r(70);function o(e,t,r,a,n,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(a,n)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function c(e){o(i,a,n,c,s,"next",e)}function s(e){o(i,a,n,c,s,"throw",e)}c(void 0)}))}}function c(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,u,_,l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a,o,u,_,l,d,f,p,v,h,y,k;return t=e,r=null,a=[{key:"init",value:(k=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.a("WebPencilVitureFile");case 2:return s=e.sent,e.next=5,s.version(1).stores({files:"++id, [path+name]"});case 5:case"end":return e.stop()}}),e)}))),function(e){return k.apply(this,arguments)})},{key:"save",value:(y=i(regeneratorRuntime.mark((function e(t){var r,a,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,a=t.data,e.abrupt("return",new Promise((function(e){var t={name:"saveFile",params:[{path:r,data:a}],callback:e};n.sheduleOperate(t)})));case 2:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})},{key:"get",value:(h=i(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a={name:"getFile",params:[t],callback:e};r.sheduleOperate(a)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})},{key:"remove",value:(v=i(regeneratorRuntime.mark((function e(t){var r,a=this,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{isFile:!1},e.abrupt("return",new Promise((function(e){var n={name:"removeFile",params:[t,r],callback:e};a.sheduleOperate(n)})));case 2:case"end":return e.stop()}}),e)}))),function(e){return v.apply(this,arguments)})},{key:"getNames",value:(p=i(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a={name:"getFileNames",params:[t],callback:e};r.sheduleOperate(a)})));case 1:case"end":return e.stop()}}),e)}))),function(e){return p.apply(this,arguments)})},{key:"sheduleOperate",value:(f=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.operates.push(t),this.isOperating){e.next=4;break}return e.next=4,this.startOperate();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"startOperate",value:(d=i(regeneratorRuntime.mark((function e(){var t,r,a,n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.operates.shift(),this.isOperating=!0;case 2:if(!t){e.next=15;break}return a=(r=t).name,n=r.params,o=r.callback,e.next=6,this[a].apply(this,n);case 6:return i=e.sent,e.next=9,o(i);case 9:if(t=this.operates.shift()){e.next=13;break}return this.isOperating=!1,e.abrupt("break",15);case 13:e.next=2;break;case 15:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"saveFile",value:(l=i(regeneratorRuntime.mark((function e(t){var r,a,n,o,i,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,a=t.data,t.type,n=this.analyzePath(r),o=n.pathName,i=n.name,e.next=4,s.files.where("[path+name]").equals([o,i]).first();case 4:if(c=e.sent,console.time("saveFile"),!c){e.next=12;break}return u=c.id,e.next=10,s.files.put({id:u,path:o,name:i,file:new File([a],i)});case 10:e.next=14;break;case 12:return e.next=14,s.files.add({path:o,name:i,file:new File([a],i)});case 14:console.timeEnd("saveFile");case 15:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"analyzePath",value:function(e){var t=e.lastIndexOf("/"),r=e.substring(0,t);return{name:e.substr(t+1),pathName:r}}},{key:"getFile",value:(_=i(regeneratorRuntime.mark((function e(t){var r,a,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.analyzePath(t),a=r.name,n=r.pathName,console.time("getFile"),e.next=4,s.files.where("[path+name]").equals([n,a]).toArray();case 4:return o=e.sent,console.timeEnd("getFile"),e.abrupt("return",o&&o[0]&&o[0].file);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)})},{key:"getFileNames",value:(u=i(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.files.where({path:t}).toArray();case 2:return r=e.sent,e.abrupt("return",r.map((function(e){return e.name})));case 4:case"end":return e.stop()}}),e)}))),function(e){return u.apply(this,arguments)})},{key:"removeFile",value:(o=i(regeneratorRuntime.mark((function e(t){var r,a,n,o,i,c,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.length>1&&void 0!==u[1]?u[1]:{isFile:!1},a=r.isFile,n=0,console.time("removeFile"),!a){e.next=10;break}return o=this.analyzePath(t),i=o.name,c=o.pathName,e.next=7,s.files.where("[path+name]").equals([c,i]).delete();case 7:n=e.sent,e.next=13;break;case 10:return e.next=12,s.files.where("path").startsWith(t).delete();case 12:n=e.sent;case 13:console.timeEnd("removeFile"),console.log("removeFile: ",n);case 15:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})}],r&&c(t.prototype,r),a&&c(t,a),e}();l.operates=[],l.isOperating=!1,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"db","/Users/muyin/Documents/code/WebPencil/src/workStorage/file-system/index.ts"),u.register(l,"FileApi","/Users/muyin/Documents/code/WebPencil/src/workStorage/file-system/index.ts")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,r(3)(e))},57:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"c",(function(){return WorkStorage}));var _work_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(69);__webpack_require__.d(__webpack_exports__,"b",(function(){return _work_data__WEBPACK_IMPORTED_MODULE_0__.b})),__webpack_require__.d(__webpack_exports__,"a",(function(){return _work_data__WEBPACK_IMPORTED_MODULE_0__.a}));var _file_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(45),_canvas_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(44),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),antd__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),enterModule;function asyncGeneratorStep(e,t,r,a,n,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(a,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,a,n,i,c,"next",e)}function c(e){asyncGeneratorStep(o,a,n,i,c,"throw",e)}i(void 0)}))}}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},WorkLayerFile=function(){function WorkLayerFile(e){var t=this,r=e.workLayersId,a=e.layers;_classCallCheck(this,WorkLayerFile),this.workLayersId=void 0,this.workDetailFiles=[],this.workLayersId=r,a.forEach((function(e){e.canvas;var r=e.layerId,a=_objectWithoutProperties(e,["canvas","layerId"]);t.workDetailFiles.push(_objectSpread({},a,{layerId:r,filePath:"layers/".concat(r,".png")}))}))}return _createClass(WorkLayerFile,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkLayerFile}(),WorkDetailDesFile=function(){function WorkDetailDesFile(e){_classCallCheck(this,WorkDetailDesFile),this.workInfo=void 0,this.content=void 0;var t=e.workInfo,r=e.contens,a=(t.thumbnail,_objectWithoutProperties(t,["thumbnail"]));this.workInfo=_objectSpread({},a,{thumbnail:"thumbnail/".concat(e.workInfo.workId,".png")}),this.content=new WorkLayerFile(r)}return _createClass(WorkDetailDesFile,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkDetailDesFile}();_file_system__WEBPACK_IMPORTED_MODULE_1__.a.init({permissionTip:function(e){return new Promise((function(t){var r=function(){var r=_asyncToGenerator(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e();case 3:r.next=8;break;case 5:r.prev=5,r.t0=r.catch(0),console.error(r.t0);case 8:antd__WEBPACK_IMPORTED_MODULE_3__.message.destroy(),t();case 10:case"end":return r.stop()}}),r,null,[[0,5]])})));return function(){return r.apply(this,arguments)}}();antd__WEBPACK_IMPORTED_MODULE_3__.message.info(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span",{onClick:r},"获取文件读取权限"),0)}))}});var WorkStorage=function(){function e(){_classCallCheck(this,e)}var t,r,a,n,o,i;return _createClass(e,null,[{key:"saveWork",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,a,n,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new WorkDetailDesFile(t),e.next=3,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.save({type:"text",path:"".concat(t.workInfo.workId,".json"),data:JSON.stringify(r)});case 3:a=this.getCanvasFileList(t,r),n=0;case 5:if(!(n<a.length)){e.next=16;break}return o=a[n],i=o.path,c=o.canvas,e.next=9,Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.d)(c);case 9:if(!(s=e.sent)){e.next=13;break}return e.next=13,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.save({type:"blob",path:i,data:s});case 13:n++,e.next=5;break;case 16:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"getCanvasFileList",value:function(e,t){var r=e.contens.layers,a=t.content.workDetailFiles,n=[{path:t.workInfo.thumbnail,canvas:this.combimeCanvas(100,100,e.contens.layers.map((function(e){return e.canvas})))}];return r.forEach((function(e,t){var r=e.canvas;n.push({canvas:r,path:a[t].filePath})})),n}},{key:"combimeCanvas",value:function(e,t,r){var a=Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.b)(e,t),n=a.getContext("2d");if(n)for(var o=r.length-1;o>-1;o--){var i=r[o];n.drawImage(i,0,0,i.width,i.height,0,0,e,t)}return a}},{key:"removeWork",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"updateWorkInfo",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"updateLayerDetail",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)})},{key:"getWorkDetail",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,a,n,o,i,c,s,u,_,l,d,f,p,v,h,y,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.get("".concat(t,".json"));case 2:return r=e.sent,e.next=5,r.text();case 5:a=e.sent,n=JSON.parse(a),o=n.workInfo,i=n.content,c=i.workLayersId,s=i.workDetailFiles,u=new _work_data__WEBPACK_IMPORTED_MODULE_0__.c(c),_=0;case 9:if(!(_<s.length)){e.next=23;break}return l=s[_],d=l.layerId,f=l.visible,p=l.name,v=l.filePath,e.next=13,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.get(v);case 13:return(h=e.sent).lastModified>o.updateTime&&(o.updateTime=h.lastModified),e.next=17,Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.c)(h);case 17:y=e.sent,k=new _work_data__WEBPACK_IMPORTED_MODULE_0__.a(y,p,f,d),u.layers.push(k);case 20:_++,e.next=9;break;case 23:return e.abrupt("return",new _work_data__WEBPACK_IMPORTED_MODULE_0__.b(o,u));case 24:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"getWorkList",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,a,n,o,i,c,s,u,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.getNames("");case 3:r=e.sent.filter((function(e){return/^work_/.test(e)})),a=0;case 5:if(!(a<r.length)){e.next=20;break}return e.next=8,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.get(r[a]);case 8:return n=e.sent,e.next=11,n.text();case 11:return o=e.sent,i=JSON.parse(o),c=i.workInfo,s=c.thumbnail,u=_objectWithoutProperties(c,["thumbnail"]),e.next=15,_file_system__WEBPACK_IMPORTED_MODULE_1__.a.get(s);case 15:_=e.sent,t.push(_objectSpread({},u,{thumbnail:URL.createObjectURL(_)}));case 17:a++,e.next=5;break;case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(WorkLayerFile,"WorkLayerFile","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.tsx"),reactHotLoader.register(WorkDetailDesFile,"WorkDetailDesFile","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.tsx"),reactHotLoader.register(WorkStorage,"WorkStorage","/Users/muyin/Documents/code/WebPencil/src/workStorage/index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},69:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"b",(function(){return WorkDetail})),__webpack_require__.d(__webpack_exports__,"a",(function(){return LayerDetail})),__webpack_require__.d(__webpack_exports__,"c",(function(){return WorkLayers}));var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),_canvas_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(44),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},WorkInfo=function(){function WorkInfo(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now(),o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Date.now(),i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("work_".concat(Date.now(),"_"));_classCallCheck(this,WorkInfo),this.width=e,this.height=t,this.name=r,this.thumbnail=a,this.createTime=n,this.updateTime=o,this.workId=i}return _createClass(WorkInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkInfo}(),WorkDetail=function(){function WorkDetail(e,t){_classCallCheck(this,WorkDetail),this.workInfo=e,this.contens=t}return _createClass(WorkDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"createEmpty",value:function(e,t,r){var a=new WorkInfo(e,t,"new work",Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.b)(e,t,r)),n=new WorkLayers;return WorkLayers.addLayer(n,a,LayerDetail.create(a,_pages_paint_top_tool_bar_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE)),new WorkDetail(a,n)}}]),WorkDetail}(),LayerDetail=function(){function LayerDetail(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"new layer",r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("layer-".concat(Date.now(),"-"));_classCallCheck(this,LayerDetail),this.canvas=e,this.name=t,this.visible=r,this.layerId=a}return _createClass(LayerDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"create",value:function(e,t){var r=e.width,a=e.height,n=Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.b)(r,a,t),o=new LayerDetail(n);return n.setAttribute("layerId",o.layerId),o}}]),LayerDetail}(),WorkLayers=function(){function WorkLayers(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("worklayer-".concat(Date.now(),"-"));_classCallCheck(this,WorkLayers),this.workLayersId=e,this.layers=[]}return _createClass(WorkLayers,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"addLayer",value:function(e,t,r){var a=t.width,n=t.height;r||(r=new LayerDetail(Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.b)(a,n))),e.layers.unshift(r)}}]),WorkLayers}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(WorkInfo,"WorkInfo","/Users/muyin/Documents/code/WebPencil/src/workStorage/work-data.ts"),reactHotLoader.register(WorkDetail,"WorkDetail","/Users/muyin/Documents/code/WebPencil/src/workStorage/work-data.ts"),reactHotLoader.register(LayerDetail,"LayerDetail","/Users/muyin/Documents/code/WebPencil/src/workStorage/work-data.ts"),reactHotLoader.register(WorkLayers,"WorkLayers","/Users/muyin/Documents/code/WebPencil/src/workStorage/work-data.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))}}]);