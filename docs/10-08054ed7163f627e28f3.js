(window.webpackJsonp=window.webpackJsonp||[]).push([[10,19],{22:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=t,this.b=r,this.a=o}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,t,r){for(var o=[],a=(t.r-e.r)/r,n=(t.g-e.g)/r,c=(t.b-e.b)/r,l=(t.a-e.a)/r,i=0;i<r;i++)o.push(new RGBA(e.r+a*i,e.g+n*i,e.b+c*i,e.a+l*i));return o}},{key:"mutipy",value:function(e,t){return new RGBA(e.r*t,e.g*t,e.b*t)}},{key:"add",value:function(e,t){var r=e.r,o=e.g,a=e.b;return new RGBA(r+t.r,o+t.g,a+t.b)}},{key:"mix",value:function(e,t,r){return new RGBA(e.r+(t.r-e.r)*r,e.g+(t.g-e.g)*r,e.b+(t.b-e.b)*r)}},{key:"getLerpColor",value:function(e,t,r){var o=e.r,a=e.g,n=e.b,c=e.a;return new RGBA((t.r-o)*r+o,(t.g-a)*r+a,(t.b-n)*r+n,(t.a-c)*r+c)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},44:function(e,t,r){var o=r(45),a="object"==typeof self&&self&&self.Object===Object&&self,n=o||a||Function("return this")();e.exports=n},45:function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(46))},46:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},47:function(e,t){var r=Array.isArray;e.exports=r}}]);