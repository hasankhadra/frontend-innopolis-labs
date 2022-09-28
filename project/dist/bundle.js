/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/***/ (() => {

eval("var parentDiv = document.getElementById(\"random-facts\");\nfor (var i = 0; i < 10; i++) {\n    fetch(\"http://numbersapi.com/random/math\")\n        .then(function (response) { return response.text(); })\n        .then(function (text) {\n        var newDiv = document.createElement(\"div\");\n        var newImage = document.createElement(\"img\");\n        newImage.src = \"https://www.freeiconspng.com/thumbs/idea-icon/ideas-light-bulb-icon-16.png\";\n        newDiv.innerHTML = text;\n        newDiv.appendChild(newImage);\n        parentDiv === null || parentDiv === void 0 ? void 0 : parentDiv.appendChild(newDiv);\n    });\n}\n\n\n//# sourceURL=webpack://lab1/./script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.ts"]();
/******/ 	
/******/ })()
;