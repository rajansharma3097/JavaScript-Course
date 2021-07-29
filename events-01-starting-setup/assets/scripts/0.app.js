(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\r\n  constructor(hostElementId, insertBefore = false) {\r\n    if (hostElementId) {\r\n      this.hostElement = document.getElementById(hostElementId);\r\n    } else {\r\n      this.hostElement = document.body;\r\n    }\r\n    this.insertBefore = insertBefore;\r\n  }\r\n\r\n  detach() {\r\n    if (this.element) {\r\n      this.element.remove();\r\n      // this.element.parentElement.removeChild(this.element);\r\n    }\r\n  }\r\n\r\n  attach() {\r\n    this.hostElement.insertAdjacentElement(\r\n      this.insertBefore ? 'afterbegin' : 'beforeend',\r\n      this.element\r\n    );\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL0NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50LmpzP2VmYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoaG9zdEVsZW1lbnRJZCwgaW5zZXJ0QmVmb3JlID0gZmFsc2UpIHtcclxuICAgIGlmIChob3N0RWxlbWVudElkKSB7XHJcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob3N0RWxlbWVudElkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnNlcnRCZWZvcmUgPSBpbnNlcnRCZWZvcmU7XHJcbiAgfVxyXG5cclxuICBkZXRhY2goKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgLy8gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaCgpIHtcclxuICAgIHRoaXMuaG9zdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxyXG4gICAgICB0aGlzLmluc2VydEJlZm9yZSA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLFxyXG4gICAgICB0aGlzLmVsZW1lbnRcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/Component.js\n");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n\r\n\r\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(closeNotifierFunction, text, hostElementId) {\r\n    super(hostElementId);\r\n    this.closeNotifier = closeNotifierFunction;\r\n    this.text = text;\r\n\r\n    this.closeTooltip = () => {\r\n      this.detach();\r\n      this.closeNotifier();\r\n    };\r\n    this.create();\r\n  }\r\n\r\n  // closeTooltip = () => {\r\n  //   this.detach();\r\n  //   this.closeNotifier();\r\n  // };\r\n\r\n  create() {\r\n    const tooltipElement = document.createElement('div');\r\n    tooltipElement.className = 'card';\r\n    const tooltipTemplate = document.getElementById('tooltip');\r\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\r\n    tooltipBody.querySelector('p').textContent = this.text;\r\n    tooltipElement.append(tooltipBody);\r\n\r\n    const hostElPosLeft = this.hostElement.offsetLeft;\r\n    const hostElPosTop = this.hostElement.offsetTop;\r\n    const hostElHeight = this.hostElement.clientHeight;\r\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\r\n\r\n    const x = hostElPosLeft + 20;\r\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\r\n\r\n    tooltipElement.style.position = 'absolute';\r\n    tooltipElement.style.left = x + 'px'; // 500px\r\n    tooltipElement.style.top = y + 'px';\r\n\r\n    tooltipElement.addEventListener('click', this.closeTooltip);\r\n    this.element = tooltipElement;\r\n  }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Rvb2x0aXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1Rvb2x0aXAuanM/ZDNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoY2xvc2VOb3RpZmllckZ1bmN0aW9uLCB0ZXh0LCBob3N0RWxlbWVudElkKSB7XHJcbiAgICBzdXBlcihob3N0RWxlbWVudElkKTtcclxuICAgIHRoaXMuY2xvc2VOb3RpZmllciA9IGNsb3NlTm90aWZpZXJGdW5jdGlvbjtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcblxyXG4gICAgdGhpcy5jbG9zZVRvb2x0aXAgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGV0YWNoKCk7XHJcbiAgICAgIHRoaXMuY2xvc2VOb3RpZmllcigpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjbG9zZVRvb2x0aXAgPSAoKSA9PiB7XHJcbiAgLy8gICB0aGlzLmRldGFjaCgpO1xyXG4gIC8vICAgdGhpcy5jbG9zZU5vdGlmaWVyKCk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTmFtZSA9ICdjYXJkJztcclxuICAgIGNvbnN0IHRvb2x0aXBUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29sdGlwJyk7XHJcbiAgICBjb25zdCB0b29sdGlwQm9keSA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9vbHRpcFRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgdG9vbHRpcEJvZHkucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50ID0gdGhpcy50ZXh0O1xyXG4gICAgdG9vbHRpcEVsZW1lbnQuYXBwZW5kKHRvb2x0aXBCb2R5KTtcclxuXHJcbiAgICBjb25zdCBob3N0RWxQb3NMZWZ0ID0gdGhpcy5ob3N0RWxlbWVudC5vZmZzZXRMZWZ0O1xyXG4gICAgY29uc3QgaG9zdEVsUG9zVG9wID0gdGhpcy5ob3N0RWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICBjb25zdCBob3N0RWxIZWlnaHQgPSB0aGlzLmhvc3RFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgIGNvbnN0IHBhcmVudEVsZW1lbnRTY3JvbGxpbmcgPSB0aGlzLmhvc3RFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIGNvbnN0IHggPSBob3N0RWxQb3NMZWZ0ICsgMjA7XHJcbiAgICBjb25zdCB5ID0gaG9zdEVsUG9zVG9wICsgaG9zdEVsSGVpZ2h0IC0gcGFyZW50RWxlbWVudFNjcm9sbGluZyAtIDEwO1xyXG5cclxuICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JzsgLy8gNTAwcHhcclxuICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG5cclxuICAgIHRvb2x0aXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVRvb2x0aXApO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gdG9vbHRpcEVsZW1lbnQ7XHJcbiAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/Tooltip.js\n");

/***/ })

}]);