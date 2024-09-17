/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin-fontawesome */ \"./src/plugin-fontawesome.js\");\n\n\n// if (!window.$docsify) {\n//   window.$docsify = {}\n// }\nwindow.$docsify = window.$docsify || {};\nwindow.$docsify.plugins = (window.$docsify.plugins || []).concat(_plugin_fontawesome__WEBPACK_IMPORTED_MODULE_0__.install);\n\n\n//# sourceURL=webpack://docsify-fontawesome/./src/index.js?");

    /***/ }),
    
    /***/ "./src/plugin-fontawesome.js":
    /*!***********************************!*\
      !*** ./src/plugin-fontawesome.js ***!
      \***********************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"install\": () => (/* binding */ install)\n/* harmony export */ });\nfunction install(hook) {\n  const faRegExp = /:fa[\\w -]+:/gm;\n\n  hook.beforeEach(content => {\n    let faHtmlRendered = content.replace(faRegExp, function (m, code) {\n      console.log('m: ' + m.replace(/:/gi, ''));\n      let rendered = `<i class=\"${m.replace(/:/gi, '')}\" aria-hidden=\"true\"></i>`;\n      return rendered;\n    });\n    return faHtmlRendered;\n  });\n  hook.afterEach(function (html, next) {\n    let faHtmlRendered = html.replace(faRegExp, function (m, code) {\n      console.log('m: ' + m.replace(/:/gi, ''));\n      let rendered = `<i class=\"${m.replace(/:/gi, '')}\" aria-hidden=\"true\"></i>`;\n      return rendered;\n    });\n    //console.log('faHtmlRendered: '+faHtmlRendered);\n    next(faHtmlRendered);\n  });\n}\n\n\n//# sourceURL=webpack://docsify-fontawesome/./src/plugin-fontawesome.js?");
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /************************************************************************/
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
    /******/ 	
    /******/ })()
    ;