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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./img/svg/Oleg_Ershov_logo_orange_1.svg":
/*!***********************************************!*\
  !*** ./img/svg/Oleg_Ershov_logo_orange_1.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0ecc66161f936c1b2a26b8e7143c3089.svg\");\n\n//# sourceURL=webpack:///./img/svg/Oleg_Ershov_logo_orange_1.svg?");

/***/ }),

/***/ "./js/mobile_menu.js":
/*!***************************!*\
  !*** ./js/mobile_menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var mobileMenuButton = document.querySelector('.mobile_menu_button');\nvar mobileMenuItems = document.querySelector('.mobile_menu_items');\nvar mobileMenuLink = document.querySelectorAll('.mobile_menu_items .mobile_menu_link');\nmobileMenuButton.addEventListener('click', function () {\n  mobileMenuItems.classList.toggle('open_menu');\n  mobileMenuLink.forEach(function (linkMobile) {\n    linkMobile.classList.toggle('fade');\n  });\n});\n\n//# sourceURL=webpack:///./js/mobile_menu.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_animate */ \"./js/text_animate.js\");\n/* harmony import */ var _text_animate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_animate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile_menu */ \"./js/mobile_menu.js\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll */ \"./js/scroll.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ \"./js/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _validation_phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation_phone */ \"./js/validation_phone.js\");\n/* harmony import */ var _validation_phone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_validation_phone__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_svg_Oleg_Ershov_logo_orange_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/svg/Oleg_Ershov_logo_orange_1.svg */ \"./img/svg/Oleg_Ershov_logo_orange_1.svg\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sass/style.sass */ \"./sass/style.sass\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n // import '../css/normalize.css'\n\n\n // import '../index.html'\n// import html from '../index.html';\n\n/* ========================= Mobile Menu =========================== */\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var link = document.querySelector('.mobile_menu_button');\n  var menu = document.querySelector('.mobile_menu_wrap');\n  link.addEventListener('click', function () {\n    link.classList.toggle('mobile_menu_button_active');\n    menu.classList.toggle('mobile_menu_wrap_active');\n  });\n});\n/* ========================= Progress Page Bar ======================== */\n\nwindow.onscroll = function () {\n  pageScroll();\n};\n\nfunction pageScroll() {\n  var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;\n  var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n  var scrolled = windowScroll / documentHeight * 100;\n  document.getElementById('pageBar').style.width = scrolled + '%';\n}\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/scroll.js":
/*!**********************!*\
  !*** ./js/scroll.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* ================================================ Photo ================================================= */\nfunction scrollAppear() {\n  var introText = document.querySelector('.scroll-stop-0');\n  var introPosition = introText.getBoundingClientRect().top;\n  var screenPosition = window.innerHeight / 1.5;\n\n  if (introPosition < screenPosition) {\n    introText.classList.add('scroll-start');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear);\n/* ================================================ Learning ================================================= */\n\nfunction scrollAppear1() {\n  var introText1 = document.querySelector('.scroll-stop-1');\n  var introPosition1 = introText1.getBoundingClientRect().top;\n  var screenPosition1 = window.innerHeight / 1.6;\n\n  if (introPosition1 < screenPosition1) {\n    introText1.classList.add('scroll-start');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear1);\n/* ================================================ Hobby ================================================= */\n\nfunction scrollAppear2() {\n  var introText2 = document.querySelector('.scroll-stop-2');\n  var introPosition2 = introText2.getBoundingClientRect().top;\n  var screenPosition2 = window.innerHeight / 1.3;\n\n  if (introPosition2 < screenPosition2) {\n    introText2.classList.add('scroll-start');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear2);\n/* ================================================ Career ================================================= */\n\nfunction scrollAppear3() {\n  var introText3 = document.querySelector('.scroll-stop-3');\n  var introPosition3 = introText3.getBoundingClientRect().top;\n  var screenPosition3 = window.innerHeight / 1.8;\n\n  if (introPosition3 < screenPosition3) {\n    introText3.classList.add('scroll-start');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear3);\n/* ================================================ Skills-01 ================================================= */\n\nfunction scrollAppear01() {\n  var introText01 = document.querySelector('.scroll-stop-01');\n  var introPosition01 = introText01.getBoundingClientRect().top;\n  var screenPosition01 = window.innerHeight / 1.3;\n\n  if (introPosition01 < screenPosition01) {\n    introText01.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear01);\n/* ================================================ Skills-02 ================================================= */\n\nfunction scrollAppear02() {\n  var introText02 = document.querySelector('.scroll-stop-02');\n  var introPosition02 = introText02.getBoundingClientRect().top;\n  var screenPosition02 = window.innerHeight / 1.5;\n\n  if (introPosition02 < screenPosition02) {\n    introText02.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear02);\n/* ================================================ Skills-03 ================================================= */\n\nfunction scrollAppear03() {\n  var introText03 = document.querySelector('.scroll-stop-03');\n  var introPosition03 = introText03.getBoundingClientRect().top;\n  var screenPosition03 = window.innerHeight / 1.7;\n\n  if (introPosition03 < screenPosition03) {\n    introText03.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear03);\n/* ================================================ Skills-04 ================================================= */\n\nfunction scrollAppear04() {\n  var introText04 = document.querySelector('.scroll-stop-04');\n  var introPosition04 = introText04.getBoundingClientRect().top;\n  var screenPosition04 = window.innerHeight / 1.7;\n\n  if (introPosition04 < screenPosition04) {\n    introText04.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear04);\n/* ================================================ Skills-05 ================================================= */\n\nfunction scrollAppear05() {\n  var introText05 = document.querySelector('.scroll-stop-05');\n  var introPosition05 = introText05.getBoundingClientRect().top;\n  var screenPosition05 = window.innerHeight / 1.5;\n\n  if (introPosition05 < screenPosition05) {\n    introText05.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear05);\n/* ================================================ Skills-06 ================================================= */\n\nfunction scrollAppear06() {\n  var introText06 = document.querySelector('.scroll-stop-06');\n  var introPosition06 = introText06.getBoundingClientRect().top;\n  var screenPosition06 = window.innerHeight / 1.3;\n\n  if (introPosition06 < screenPosition06) {\n    introText06.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear06);\n/* ================================================ Skills-07 ================================================= */\n\nfunction scrollAppear07() {\n  var introText07 = document.querySelector('.scroll-stop-07');\n  var introPosition07 = introText07.getBoundingClientRect().top;\n  var screenPosition07 = window.innerHeight / 1.3;\n\n  if (introPosition07 < screenPosition07) {\n    introText07.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear07);\n/* ================================================ Skills-08 ================================================= */\n\nfunction scrollAppear08() {\n  var introText08 = document.querySelector('.scroll-stop-08');\n  var introPosition08 = introText08.getBoundingClientRect().top;\n  var screenPosition08 = window.innerHeight / 1.5;\n\n  if (introPosition08 < screenPosition08) {\n    introText08.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear08);\n/* ================================================ Skills-09 ================================================= */\n\nfunction scrollAppear09() {\n  var introText09 = document.querySelector('.scroll-stop-09');\n  var introPosition09 = introText09.getBoundingClientRect().top;\n  var screenPosition09 = window.innerHeight / 1.7;\n\n  if (introPosition09 < screenPosition09) {\n    introText09.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear09);\n/* ================================================ Skills-10 ================================================= */\n\nfunction scrollAppear10() {\n  var introText10 = document.querySelector('.scroll-stop-10');\n  var introPosition10 = introText10.getBoundingClientRect().top;\n  var screenPosition10 = window.innerHeight / 1.7;\n\n  if (introPosition10 < screenPosition10) {\n    introText10.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear10);\n/* ================================================ Skills-11 ================================================= */\n\nfunction scrollAppear11() {\n  var introText11 = document.querySelector('.scroll-stop-11');\n  var introPosition11 = introText11.getBoundingClientRect().top;\n  var screenPosition11 = window.innerHeight / 1.5;\n\n  if (introPosition11 < screenPosition11) {\n    introText11.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear11);\n/* ================================================ Skills-12 ================================================= */\n\nfunction scrollAppear12() {\n  var introText12 = document.querySelector('.scroll-stop-12');\n  var introPosition12 = introText12.getBoundingClientRect().top;\n  var screenPosition12 = window.innerHeight / 1.3;\n\n  if (introPosition12 < screenPosition12) {\n    introText12.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear12);\n/* ================================================ Skills-13 ================================================= */\n\nfunction scrollAppear13() {\n  var introText13 = document.querySelector('.scroll-stop-13');\n  var introPosition13 = introText13.getBoundingClientRect().top;\n  var screenPosition13 = window.innerHeight / 1.3;\n\n  if (introPosition13 < screenPosition13) {\n    introText13.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear13);\n/* ================================================ Skills-14 ================================================= */\n\nfunction scrollAppear14() {\n  var introText14 = document.querySelector('.scroll-stop-14');\n  var introPosition14 = introText14.getBoundingClientRect().top;\n  var screenPosition14 = window.innerHeight / 1.5;\n\n  if (introPosition14 < screenPosition14) {\n    introText14.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear14);\n/* ================================================ Skills-15 ================================================= */\n\nfunction scrollAppear15() {\n  var introText15 = document.querySelector('.scroll-stop-15');\n  var introPosition15 = introText15.getBoundingClientRect().top;\n  var screenPosition15 = window.innerHeight / 1.7;\n\n  if (introPosition15 < screenPosition15) {\n    introText15.classList.add('scroll-start-1');\n  }\n}\n\nwindow.addEventListener('scroll', scrollAppear15);\n\n//# sourceURL=webpack:///./js/scroll.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var sliderContainer_desktop = document.querySelector('.slider-container_desktop');\nvar slideRight = document.querySelector('.right-slide');\nvar slideLeft = document.querySelector('.left-slide');\nvar upButton = document.querySelector('.up-button');\nvar downButton = document.querySelector('.down-button');\nvar slidesLength = slideRight.querySelectorAll('.slider-image').length;\nvar activeSlideIndex = 0;\nslideLeft.style.top = \"-\".concat((slidesLength - 1) * 80, \"vh\");\nupButton.addEventListener('click', function () {\n  return changeSlide('up');\n});\ndownButton.addEventListener('click', function () {\n  return changeSlide('down');\n});\n\nvar changeSlide = function changeSlide(direction) {\n  var sliderHeight = sliderContainer_desktop.clientHeight;\n\n  if (direction === 'up') {\n    activeSlideIndex++;\n\n    if (activeSlideIndex > slidesLength - 1) {\n      activeSlideIndex = 0;\n    }\n  } else if (direction === 'down') {\n    activeSlideIndex--;\n\n    if (activeSlideIndex < 0) {\n      activeSlideIndex = slidesLength - 1;\n    }\n  }\n\n  slideRight.style.transform = \"translateY(-\".concat(activeSlideIndex * sliderHeight, \"px)\");\n  slideLeft.style.transform = \"translateY(\".concat(activeSlideIndex * sliderHeight, \"px)\");\n};\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ "./js/text_animate.js":
/*!****************************!*\
  !*** ./js/text_animate.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* =========================================== Header Text Animate =========================================== */\nvar text = document.querySelector(\".banner__title\");\nvar strText = text.textContent;\nvar splitText = strText.split(\"\");\ntext.textContent = \" \";\n\nfor (var i = 0; i < splitText.length; i++) {\n  text.innerHTML += \"<h6>\" + splitText[i] + \"</h6>\";\n}\n\nvar _char = 0;\nvar timer = setInterval(onTick, 50);\n\nfunction onTick() {\n  var h6 = text.querySelectorAll('h6')[_char];\n\n  h6.classList.add('fade');\n  _char++;\n\n  if (_char === splitText.length) {\n    complete();\n    return;\n  }\n}\n\nfunction complete() {\n  clearInterval(timer);\n  timer = null;\n}\n\n//# sourceURL=webpack:///./js/text_animate.js?");

/***/ }),

/***/ "./js/validation_phone.js":
/*!********************************!*\
  !*** ./js/validation_phone.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"DOMContentLoaded\", function () {\n  function setCursorPosition(pos, elem) {\n    elem.focus();\n\n    if (elem.setSelectionRange) {\n      elem.setSelectionRange(pos, pos);\n    }\n  }\n\n  function mask(event) {\n    var matrix = \"+7 (___) ___-__-__\";\n    var i = 0;\n    var def = matrix.replace(/\\D/g, \"\");\n    var val = this.value.replace(/\\D/g, \"\");\n    if (def.length >= val.length) val = def;\n    this.value = matrix.replace(/./g, function (a) {\n      return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a;\n    });\n\n    if (event.type == \"blur\") {\n      if (this.value.length == 2) {\n        this.value = \"\";\n      }\n    } else {\n      setCursorPosition(this.value.length, this);\n    }\n  }\n\n  ;\n  var input = document.querySelector(\"#tel\");\n  input.addEventListener(\"input\", mask, false);\n  input.addEventListener(\"focus\", mask, false);\n  input.addEventListener(\"blur\", mask, false);\n});\n\n//# sourceURL=webpack:///./js/validation_phone.js?");

/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./sass/style.sass?");

/***/ })

/******/ });