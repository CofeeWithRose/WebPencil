(window.webpackJsonp=window.webpackJsonp||[]).push([[14,23],{27:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushStatus", function() { return BrushStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushType", function() { return BrushType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractBrush", function() { return AbstractBrush; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar BrushStatus = /*#__PURE__*/function () {\n  function BrushStatus(x, y, pressure, tiltX, tiltY) {\n    _classCallCheck(this, BrushStatus);\n\n    this.x = x;\n    this.y = y;\n    this.pressure = pressure;\n    this.tiltX = tiltX;\n    this.tiltY = tiltY;\n  }\n\n  _createClass(BrushStatus, [{\n    key: "__reactstandin__regenerateByEval",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return BrushStatus;\n}();\nvar BrushType;\n\n(function (BrushType) {\n  BrushType[BrushType["pen"] = 1] = "pen";\n  BrushType[BrushType["selector"] = 2] = "selector";\n})(BrushType || (BrushType = {}));\n\nvar AbstractBrush = /*#__PURE__*/function () {\n  function AbstractBrush(type, name) {\n    _classCallCheck(this, AbstractBrush);\n\n    this.type = type;\n    this.name = name;\n  }\n\n  _createClass(AbstractBrush, [{\n    key: "init",\n    value: function init() {}\n  }, {\n    key: "destory",\n    value: function destory() {}\n  }, {\n    key: "onStart",\n    value: function onStart(status, context) {}\n  }, {\n    key: "onDraw",\n    value: function onDraw(brushStatus, contx) {}\n  }, {\n    key: "onEnd",\n    value: function onEnd(brushStatus, contx) {}\n  }, {\n    key: "__reactstandin__regenerateByEval",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return AbstractBrush;\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BrushStatus, "BrushStatus", "/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/brush/types.ts");\n  reactHotLoader.register(AbstractBrush, "AbstractBrush", "/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/brush/types.ts");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFpbnQvdG9wLXRvb2wtYmFyL3Rvb2wtaXRlbS9icnVzaC90eXBlcy50cz9lMTdhIl0sIm5hbWVzIjpbIkJydXNoU3RhdHVzIiwieCIsInkiLCJwcmVzc3VyZSIsInRpbHRYIiwidGlsdFkiLCJCcnVzaFR5cGUiLCJBYnN0cmFjdEJydXNoIiwidHlwZSIsIm5hbWUiLCJzdGF0dXMiLCJjb250ZXh0IiwiYnJ1c2hTdGF0dXMiLCJjb250eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFdBQWI7QUFDRSx1QkFFb0JDLENBRnBCLEVBSW9CQyxDQUpwQixFQU1vQkMsUUFOcEIsRUFRb0JDLEtBUnBCLEVBVW9CQyxLQVZwQixFQVdFO0FBQUE7O0FBQUEsU0FUa0JKLENBU2xCLEdBVGtCQSxDQVNsQjtBQUFBLFNBUGtCQyxDQU9sQixHQVBrQkEsQ0FPbEI7QUFBQSxTQUxrQkMsUUFLbEIsR0FMa0JBLFFBS2xCO0FBQUEsU0FIa0JDLEtBR2xCLEdBSGtCQSxLQUdsQjtBQUFBLFNBRGtCQyxLQUNsQixHQURrQkEsS0FDbEI7QUFBRzs7QUFaUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFnQk8sSUFBS0MsU0FBWjs7V0FBWUEsUztBQUFBQSxXLENBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0dBQUFBLFMsS0FBQUEsUzs7QUFPTCxJQUFlQyxhQUF0QjtBQUNFLHlCQUNrQkMsSUFEbEIsRUFFa0JDLElBRmxCLEVBR0U7QUFBQTs7QUFBQSxTQUZnQkQsSUFFaEIsR0FGZ0JBLElBRWhCO0FBQUEsU0FEZ0JDLElBQ2hCLEdBRGdCQSxJQUNoQjtBQUFFOztBQUpOO0FBQUE7QUFBQSwyQkFNZSxDQUFFO0FBTmpCO0FBQUE7QUFBQSw4QkFRa0IsQ0FBRTtBQVJwQjtBQUFBO0FBQUEsNEJBVVVDLE1BVlYsRUFVK0JDLE9BVi9CLEVBVThELENBQUU7QUFWaEU7QUFBQTtBQUFBLDJCQVlTQyxXQVpULEVBWXFDQyxLQVpyQyxFQVlpRSxDQUFFO0FBWm5FO0FBQUE7QUFBQSwwQkFjUUQsV0FkUixFQWNrQ0MsS0FkbEMsRUFjK0QsQ0FBRTtBQWRqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7MEJBdkJhYixXOzBCQXVCU08sYSIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBDYW52YXNDb250ZXh0IH0gZnJvbSBcIkAvcGFnZXMvcGFpbnQvcGNhbnZhcy9wY2FudmFzLmNvbnRleHRcIlxuXG5leHBvcnQgY2xhc3MgQnJ1c2hTdGF0dXMge1xuICBjb25zdHJ1Y3RvcihcblxuICAgICAgcHVibGljIHJlYWRvbmx5IHg6IG51bWJlcixcblxuICAgICAgcHVibGljIHJlYWRvbmx5IHk6IG51bWJlcixcblxuICAgICAgcHVibGljIHJlYWRvbmx5IHByZXNzdXJlOiBudW1iZXIsXG5cbiAgICAgIHB1YmxpYyByZWFkb25seSB0aWx0WDogbnVtYmVyLFxuXG4gICAgICBwdWJsaWMgcmVhZG9ubHkgdGlsdFk6IG51bWJlcixcbiAgKSB7IH1cblxufVxuXG5leHBvcnQgZW51bSBCcnVzaFR5cGUge1xuXG4gIHBlbiA9IDEsXG5cbiAgc2VsZWN0b3IgPSAyLFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCcnVzaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBCcnVzaFR5cGUsIFxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgKSB7fVxuXG4gIGluaXQoKTogdm9pZCB7fVxuXG4gIGRlc3RvcnkoKTogdm9pZCB7fVxuXG4gIG9uU3RhcnQoc3RhdHVzOiBCcnVzaFN0YXR1cywgY29udGV4dDogUENhbnZhc0NvbnRleHQpOiB2b2lkIHt9XG5cbiAgb25EcmF3KGJydXNoU3RhdHVzOiBCcnVzaFN0YXR1c1tdLCBjb250eDogUENhbnZhc0NvbnRleHQpOiB2b2lke31cblxuICBvbkVuZChicnVzaFN0YXR1czogQnJ1c2hTdGF0dXMsIGNvbnR4OiBQQ2FudmFzQ29udGV4dCk6IHZvaWQge31cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n')},5:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brush", function() { return Brush; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n/**\n * 带压感的brush，bug待修复.\n * 根据移动，与context, 控制画出的形状并填充.\n */\n\nvar Brush = /*#__PURE__*/function () {\n  function Brush() {\n    var _this = this;\n\n    _classCallCheck(this, Brush);\n\n    this.type = _types__WEBPACK_IMPORTED_MODULE_0__["BrushType"].pen;\n    this.name = \'default\';\n    this.isPainting = false;\n    this.pathList = [];\n    this.animeHandle = void 0;\n\n    this.paintPath = function (ctx) {\n      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n      ctx.beginPath();\n      var f = _this.pathList[0];\n      ctx.moveTo(f.x, f.y);\n\n      for (var i = 1; i < _this.pathList.length; i++) {\n        var _this$pathList$i = _this.pathList[i],\n            x = _this$pathList$i.x,\n            y = _this$pathList$i.y;\n        ctx.lineTo(x, y);\n      }\n\n      ctx.stroke();\n    };\n  }\n\n  _createClass(Brush, [{\n    key: "init",\n    value: function init() {}\n  }, {\n    key: "destory",\n    value: function destory() {}\n  }, {\n    key: "onStart",\n    value: function onStart(status, context) {\n      var ctx = context.curCanvasContext2D,\n          color = context.color,\n          brushWidth = context.brushWidth;\n      this.isPainting = true;\n      this.pathList.push(status);\n      ctx.strokeStyle = color;\n      ctx.lineWidth = brushWidth;\n      ctx.lineCap = \'round\';\n      ctx.lineJoin = "round";\n    }\n  }, {\n    key: "onDraw",\n    value: function onDraw(brushStatus, contx) {\n      var _this2 = this;\n\n      if (this.isPainting) {\n        var ctx = contx.curCanvasContext2D;\n\n        for (var i = 0; i < brushStatus.length; i++) {\n          this.pathList.push(brushStatus[i]);\n        }\n\n        cancelAnimationFrame(this.animeHandle);\n        this.animeHandle = requestAnimationFrame(function () {\n          _this2.paintPath(ctx);\n        });\n      }\n    }\n  }, {\n    key: "onEnd",\n    value: function onEnd(brushStatus, _ref) {\n      var _this3 = this;\n\n      var onBrushEnd = _ref.onBrushEnd;\n      requestAnimationFrame(function () {\n        _this3.isPainting = false;\n        _this3.pathList = [];\n        onBrushEnd();\n      });\n    }\n  }, {\n    key: "__reactstandin__regenerateByEval",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Brush;\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Brush, "Brush", "/Users/muyin/Documents/code/WebPencil/src/pages/paint/top-tool-bar/tool-item/brush/index.ts");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFpbnQvdG9wLXRvb2wtYmFyL3Rvb2wtaXRlbS9icnVzaC9pbmRleC50cz8yMjY2Il0sIm5hbWVzIjpbIkJydXNoIiwidHlwZSIsIkJydXNoVHlwZSIsInBlbiIsIm5hbWUiLCJpc1BhaW50aW5nIiwicGF0aExpc3QiLCJhbmltZUhhbmRsZSIsInBhaW50UGF0aCIsImN0eCIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiZiIsIm1vdmVUbyIsIngiLCJ5IiwiaSIsImxlbmd0aCIsImxpbmVUbyIsInN0cm9rZSIsInN0YXR1cyIsImNvbnRleHQiLCJjdXJDYW52YXNDb250ZXh0MkQiLCJjb2xvciIsImJydXNoV2lkdGgiLCJwdXNoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJicnVzaFN0YXR1cyIsImNvbnR4IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbkJydXNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBOzs7OztBQUlPLElBQU1BLEtBQWI7QUFBQTtBQUFBOztBQUFBOztBQUFBLFNBR2FDLElBSGIsR0FHK0JDLGdEQUFTLENBQUNDLEdBSHpDO0FBQUEsU0FLYUMsSUFMYixHQUtvQixTQUxwQjtBQUFBLFNBT2NDLFVBUGQsR0FPMkIsS0FQM0I7QUFBQSxTQVNjQyxRQVRkLEdBU29DLEVBVHBDO0FBQUEsU0FXY0MsV0FYZDs7QUFBQSxTQTJDY0MsU0EzQ2QsR0EyQzBCLFVBQUNDLEdBQUQsRUFBbUM7QUFDdkRBLFNBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBbUJELEdBQUcsQ0FBQ0UsTUFBSixDQUFXQyxLQUE5QixFQUFxQ0gsR0FBRyxDQUFDRSxNQUFKLENBQVdFLE1BQWhEO0FBQ0FKLFNBQUcsQ0FBQ0ssU0FBSjtBQUNBLFVBQU1DLENBQUMsR0FBRyxLQUFJLENBQUNULFFBQUwsQ0FBYyxDQUFkLENBQVY7QUFDQUcsU0FBRyxDQUFDTyxNQUFKLENBQVdELENBQUMsQ0FBQ0UsQ0FBYixFQUFnQkYsQ0FBQyxDQUFDRyxDQUFsQjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRSxDQUFaLEVBQWVBLENBQUMsR0FBRSxLQUFJLENBQUNiLFFBQUwsQ0FBY2MsTUFBaEMsRUFBd0NELENBQUMsRUFBekMsRUFBNkM7QUFBQSwrQkFDNUIsS0FBSSxDQUFDYixRQUFMLENBQWNhLENBQWQsQ0FENEI7QUFBQSxZQUNwQ0YsQ0FEb0Msb0JBQ3BDQSxDQURvQztBQUFBLFlBQ2pDQyxDQURpQyxvQkFDakNBLENBRGlDO0FBRTNDVCxXQUFHLENBQUNZLE1BQUosQ0FBV0osQ0FBWCxFQUFhQyxDQUFiO0FBQ0Q7O0FBQ0RULFNBQUcsQ0FBQ2EsTUFBSjtBQUNELEtBckRMO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDJCQWFVLENBQUU7QUFiWjtBQUFBO0FBQUEsOEJBZWEsQ0FBRTtBQWZmO0FBQUE7QUFBQSw0QkFpQllDLE1BakJaLEVBaUJpQ0MsT0FqQmpDLEVBaUIwRDtBQUFBLFVBQ3ZCZixHQUR1QixHQUNHZSxPQURILENBQzNDQyxrQkFEMkM7QUFBQSxVQUNsQkMsS0FEa0IsR0FDR0YsT0FESCxDQUNsQkUsS0FEa0I7QUFBQSxVQUNYQyxVQURXLEdBQ0dILE9BREgsQ0FDWEcsVUFEVztBQUVsRCxXQUFLdEIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtDLFFBQUwsQ0FBY3NCLElBQWQsQ0FBbUJMLE1BQW5CO0FBQ0FkLFNBQUcsQ0FBQ29CLFdBQUosR0FBa0JILEtBQWxCO0FBQ0FqQixTQUFHLENBQUNxQixTQUFKLEdBQWdCSCxVQUFoQjtBQUNBbEIsU0FBRyxDQUFDc0IsT0FBSixHQUFhLE9BQWI7QUFDQXRCLFNBQUcsQ0FBQ3VCLFFBQUosR0FBZSxPQUFmO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLDJCQTZCV0MsV0E3QlgsRUE2QnVDQyxLQTdCdkMsRUE2Qm9FO0FBQUE7O0FBQzlELFVBQUcsS0FBSzdCLFVBQVIsRUFBbUI7QUFBQSxZQUNjSSxHQURkLEdBQ3NCeUIsS0FEdEIsQ0FDTlQsa0JBRE07O0FBRWYsYUFBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFFYyxXQUFXLENBQUNiLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTJDO0FBQ3pDLGVBQUtiLFFBQUwsQ0FBY3NCLElBQWQsQ0FBb0JLLFdBQVcsQ0FBQ2QsQ0FBRCxDQUEvQjtBQUNEOztBQUNEZ0IsNEJBQW9CLENBQUMsS0FBSzVCLFdBQU4sQ0FBcEI7QUFFQSxhQUFLQSxXQUFMLEdBQW1CNkIscUJBQXFCLENBQUMsWUFBTTtBQUMvQyxnQkFBSSxDQUFDNUIsU0FBTCxDQUFlQyxHQUFmO0FBQ0MsU0FGdUMsQ0FBeEM7QUFHSDtBQUNGO0FBekNMO0FBQUE7QUFBQSwwQkF1RFV3QixXQXZEVixRQXVEa0U7QUFBQTs7QUFBQSxVQUE3QkksVUFBNkIsUUFBN0JBLFVBQTZCO0FBQzVERCwyQkFBcUIsQ0FBQyxZQUFNO0FBQzFCLGNBQUksQ0FBQy9CLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxjQUFJLENBQUNDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQStCLGtCQUFVO0FBQ1gsT0FKb0IsQ0FBckI7QUFLRDtBQTdETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7MEJBQWFyQyxLIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQQ2FudmFzQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9wY2FudmFzL3BjYW52YXMuY29udGV4dFwiO1xuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlsL2RhdGEvVmVjdG9yMlwiO1xuaW1wb3J0IHsgQnJ1c2hUeXBlLCBCcnVzaFN0YXR1cywgQWJzdHJhY3RCcnVzaCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8qKlxuICog5bim5Y6L5oSf55qEYnJ1c2jvvIxidWflvoXkv67lpI0uXG4gKiDmoLnmja7np7vliqjvvIzkuI5jb250ZXh0LCDmjqfliLbnlLvlh7rnmoTlvaLnirblubbloavlhYUuXG4gKi9cbmV4cG9ydCBjbGFzcyBCcnVzaCAgaW1wbGVtZW50cyBBYnN0cmFjdEJydXNoIHtcblxuXG4gICAgcmVhZG9ubHkgdHlwZTogQnJ1c2hUeXBlID0gQnJ1c2hUeXBlLnBlblxuXG4gICAgcmVhZG9ubHkgbmFtZSA9ICdkZWZhdWx0J1xuXG4gICAgcHJvdGVjdGVkIGlzUGFpbnRpbmcgPSBmYWxzZVxuXG4gICAgcHJvdGVjdGVkIHBhdGhMaXN0OiBWZWN0b3IyW10gPSBbXVxuXG4gICAgcHJvdGVjdGVkIGFuaW1lSGFuZGxlOiBudW1iZXJcblxuICAgIGluaXQoKXt9XG5cbiAgICBkZXN0b3J5KCl7fVxuXG4gICAgb25TdGFydChzdGF0dXM6IEJydXNoU3RhdHVzLCBjb250ZXh0OiBQQ2FudmFzQ29udGV4dCkge1xuICAgICAgICBjb25zdCB7Y3VyQ2FudmFzQ29udGV4dDJEOiBjdHgsIGNvbG9yLCBicnVzaFdpZHRofSA9IGNvbnRleHRcbiAgICAgICAgdGhpcy5pc1BhaW50aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLnBhdGhMaXN0LnB1c2goc3RhdHVzKVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvclxuICAgICAgICBjdHgubGluZVdpZHRoID0gYnJ1c2hXaWR0aFxuICAgICAgICBjdHgubGluZUNhcCA9J3JvdW5kJ1xuICAgICAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG4gICAgfVxuXG4gIFxuXG4gICAgb25EcmF3KGJydXNoU3RhdHVzOiBCcnVzaFN0YXR1c1tdLCBjb250eDogUENhbnZhc0NvbnRleHQpOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaXNQYWludGluZyl7XG4gICAgICAgICAgY29uc3QgIHsgY3VyQ2FudmFzQ29udGV4dDJEOiBjdHggfSA9IGNvbnR4XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IGJydXNoU3RhdHVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMucGF0aExpc3QucHVzaCggYnJ1c2hTdGF0dXNbaV0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWVIYW5kbGUpXG5cbiAgICAgICAgICB0aGlzLmFuaW1lSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBhaW50UGF0aChjdHgpO1xuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBhaW50UGF0aCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICBjb25zdCBmID0gdGhpcy5wYXRoTGlzdFswXVxuICAgICAgY3R4Lm1vdmVUbyhmLngsIGYueSApXG4gICAgICBmb3IoIGxldCBpID0xOyBpPCB0aGlzLnBhdGhMaXN0Lmxlbmd0aDsgaSsrICl7XG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMucGF0aExpc3RbaV1cbiAgICAgICAgY3R4LmxpbmVUbyh4LHkpXG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBvbkVuZChicnVzaFN0YXR1czogQnJ1c2hTdGF0dXMsIHtvbkJydXNoRW5kfTogUENhbnZhc0NvbnRleHQpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNQYWludGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMucGF0aExpc3QgPSBbXVxuICAgICAgICBvbkJydXNoRW5kKClcbiAgICAgIH0pXG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n')}}]);