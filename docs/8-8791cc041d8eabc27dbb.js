(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/pages/paint/PCanvas.tsx":
/*!*************************************!*\
  !*** ./src/pages/paint/PCanvas.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ \"./node_modules/hammerjs/hammer.js\");\n/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.less */ \"./src/pages/paint/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar _default = function _default(_ref) {\n  var workDetail = _ref.workDetail;\n  var mainRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (mainRef.current) {\n      var mainManager = new hammerjs__WEBPACK_IMPORTED_MODULE_1___default.a.Manager(mainRef.current);\n      mainManager.add(new hammerjs__WEBPACK_IMPORTED_MODULE_1___default.a.Rotate());\n      mainManager.add(new hammerjs__WEBPACK_IMPORTED_MODULE_1___default.a.Pinch());\n\n      var onRotate = function onRotate(_ref2) {\n        var rotation = _ref2.rotation;\n        console.log(rotation);\n      };\n\n      var onPinch = function onPinch(_ref3) {\n        _objectDestructuringEmpty(_ref3);\n\n        console.log('pinch');\n      };\n\n      mainManager.on('rotate', onRotate);\n      mainManager.on('pinch', onPinch);\n      return function () {\n        mainManager.off('rotate', onRotate);\n        mainManager.off('pinch', onPinch);\n      };\n    }\n  }, [mainRef.current]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    ref: mainRef,\n    className: _style_less__WEBPACK_IMPORTED_MODULE_2___default.a.PCanvas\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    ref: containerRef\n  }));\n};\n\n__signature__(_default, \"useRef{mainRef}\\nuseRef{containerRef}\\nuseEffect{}\");\n\n/**\r\n * 手绘编辑器的画板.\r\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"D:\\\\code\\\\WebPencil\\\\src\\\\pages\\\\paint\\\\PCanvas.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/pages/paint/PCanvas.tsx?");

/***/ }),

/***/ "./src/pages/paint/style.less":
/*!************************************!*\
  !*** ./src/pages/paint/style.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"PCanvas\":\"PCanvas_bc01f\"};\n\n//# sourceURL=webpack:///./src/pages/paint/style.less?");

/***/ })

}]);