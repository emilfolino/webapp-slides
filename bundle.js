/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var slideorama__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slideorama */ \"./node_modules/slideorama/slideorama.min.js\");\n\n\nslideorama__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(\"presentation\", \"slide-container\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWFpbi5qcz8xZDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbGlkZW9yYW1hIGZyb20gXCJzbGlkZW9yYW1hXCI7XG5cbnNsaWRlb3JhbWEuaW5pdChcInByZXNlbnRhdGlvblwiLCBcInNsaWRlLWNvbnRhaW5lclwiKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ }),

/***/ "./node_modules/slideorama/slideorama.min.js":
/*!***************************************************!*\
  !*** ./node_modules/slideorama/slideorama.min.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar slideorama=function(){var e,t,n,r,i,o=0;function a(e){\"Enter\"!==e.code&&\"ArrowRight\"!==e.code&&\"ArrowLeft\"!==e.code||(\"Enter\"!==e.code&&\"ArrowRight\"!==e.code||o++,\"ArrowLeft\"===e.code&&o--,o>n-1&&(o=0),o<0&&(o=n-1),c(o))}function c(n){e.innerHTML=t[n].outerHTML,clearInterval(r),(i=e.getElementsByClassName(\"timer\"))[0]&&((i=i[0]).innerHTML=i.dataset.time,r=setInterval(d,1e3))}function d(){var e=i.innerHTML.split(\":\"),t=parseInt(e[0]),n=parseInt(e[1]);--n<0&&(t--,n=59);var o=t+\":\"+(n<10?\"0\"+n:n);i.innerHTML=o,t<0&&(clearInterval(r),i.innerHTML=\"\")}return{init:function(r,i){e=document.getElementById(r),t=document.getElementById(i).children,n=t.length,document.addEventListener(\"keyup\",a),c(o)}}}();/* harmony default export */ __webpack_exports__[\"default\"] = (slideorama);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc2xpZGVvcmFtYS9zbGlkZW9yYW1hLm1pbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGlkZW9yYW1hL3NsaWRlb3JhbWEubWluLmpzP2NiYmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIHNsaWRlb3JhbWE9ZnVuY3Rpb24oKXt2YXIgZSx0LG4scixpLG89MDtmdW5jdGlvbiBhKGUpe1wiRW50ZXJcIiE9PWUuY29kZSYmXCJBcnJvd1JpZ2h0XCIhPT1lLmNvZGUmJlwiQXJyb3dMZWZ0XCIhPT1lLmNvZGV8fChcIkVudGVyXCIhPT1lLmNvZGUmJlwiQXJyb3dSaWdodFwiIT09ZS5jb2RlfHxvKyssXCJBcnJvd0xlZnRcIj09PWUuY29kZSYmby0tLG8+bi0xJiYobz0wKSxvPDAmJihvPW4tMSksYyhvKSl9ZnVuY3Rpb24gYyhuKXtlLmlubmVySFRNTD10W25dLm91dGVySFRNTCxjbGVhckludGVydmFsKHIpLChpPWUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpbWVyXCIpKVswXSYmKChpPWlbMF0pLmlubmVySFRNTD1pLmRhdGFzZXQudGltZSxyPXNldEludGVydmFsKGQsMWUzKSl9ZnVuY3Rpb24gZCgpe3ZhciBlPWkuaW5uZXJIVE1MLnNwbGl0KFwiOlwiKSx0PXBhcnNlSW50KGVbMF0pLG49cGFyc2VJbnQoZVsxXSk7LS1uPDAmJih0LS0sbj01OSk7dmFyIG89dCtcIjpcIisobjwxMD9cIjBcIituOm4pO2kuaW5uZXJIVE1MPW8sdDwwJiYoY2xlYXJJbnRlcnZhbChyKSxpLmlubmVySFRNTD1cIlwiKX1yZXR1cm57aW5pdDpmdW5jdGlvbihyLGkpe2U9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQociksdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKS5jaGlsZHJlbixuPXQubGVuZ3RoLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGEpLGMobyl9fX0oKTtleHBvcnQgZGVmYXVsdCBzbGlkZW9yYW1hOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slideorama/slideorama.min.js\n");

/***/ })

/******/ });