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

/***/ "./js/mobile_menu.js":
/*!***************************!*\
  !*** ./js/mobile_menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mobileMenuButton = document.querySelector('.mobile_menu_button');\r\nconst mobileMenuItems = document.querySelector('.mobile_menu_items');\r\nconst mobileMenuLink = document.querySelectorAll('.mobile_menu_items .mobile_menu_link');\r\n\r\nmobileMenuButton.addEventListener('click', () => {\r\n    mobileMenuItems.classList.toggle('open_menu');\r\n    mobileMenuLink.forEach(linkMobile => {\r\n        linkMobile.classList.toggle('fade');\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/mobile_menu.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_animate */ \"./js/text_animate.js\");\n/* harmony import */ var _text_animate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_animate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile_menu */ \"./js/mobile_menu.js\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll */ \"./js/scroll.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ \"./js/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _validation_phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation_phone */ \"./js/validation_phone.js\");\n/* harmony import */ var _validation_phone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_validation_phone__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n/* ========================= Mobile Menu =========================== */\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    let link = document.querySelector('.mobile_menu_button');\r\n    let menu = document.querySelector('.mobile_menu_wrap');\r\n\r\n    link.addEventListener('click', function() {\r\n        link.classList.toggle('mobile_menu_button_active');\r\n        menu.classList.toggle('mobile_menu_wrap_active');\r\n    });\r\n});\r\n\r\n/* ========================= Progress Page Bar ======================== */\r\n\r\nwindow.onscroll = function () {\r\n    pageScroll ();\r\n}\r\n\r\nfunction pageScroll () {\r\n    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;\r\n    let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\r\n    let scrolled = (windowScroll / documentHeight) * 100;\r\n\r\n    document.getElementById('pageBar').style.width = scrolled + '%';\r\n}\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/scroll.js":
/*!**********************!*\
  !*** ./js/scroll.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* ================================================ Photo ================================================= */\r\nfunction scrollAppear() {\r\n    let introText = document.querySelector('.scroll-stop-0');\r\n    let introPosition = introText.getBoundingClientRect().top;\r\n    let screenPosition = window.innerHeight / 1.5;\r\n\r\n    if (introPosition < screenPosition) {\r\n        introText.classList.add('scroll-start');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear);\r\n\r\n/* ================================================ Learning ================================================= */\r\nfunction scrollAppear1() {\r\n    let introText1 = document.querySelector('.scroll-stop-1');\r\n    let introPosition1 = introText1.getBoundingClientRect().top;\r\n    let screenPosition1 = window.innerHeight / 1.6;\r\n\r\n    if (introPosition1 < screenPosition1) {\r\n        introText1.classList.add('scroll-start');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear1);\r\n\r\n/* ================================================ Hobby ================================================= */\r\nfunction scrollAppear2() {\r\n    let introText2 = document.querySelector('.scroll-stop-2');\r\n    let introPosition2 = introText2.getBoundingClientRect().top;\r\n    let screenPosition2 = window.innerHeight / 1.3;\r\n\r\n    if (introPosition2 < screenPosition2) {\r\n        introText2.classList.add('scroll-start');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear2);\r\n\r\n/* ================================================ Career ================================================= */\r\nfunction scrollAppear3() {\r\n    let introText3 = document.querySelector('.scroll-stop-3');\r\n    let introPosition3 = introText3.getBoundingClientRect().top;\r\n    let screenPosition3 = window.innerHeight / 1.8;\r\n\r\n    if (introPosition3 < screenPosition3) {\r\n        introText3.classList.add('scroll-start');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear3);\r\n\r\n/* ================================================ Skills-01 ================================================= */\r\nfunction scrollAppear01() {\r\n    let introText01 = document.querySelector('.scroll-stop-01');\r\n    let introPosition01 = introText01.getBoundingClientRect().top;\r\n    let screenPosition01 = window.innerHeight / 1.3;\r\n\r\n    if (introPosition01 < screenPosition01) {\r\n        introText01.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear01);\r\n\r\n/* ================================================ Skills-02 ================================================= */\r\nfunction scrollAppear02() {\r\n    let introText02 = document.querySelector('.scroll-stop-02');\r\n    let introPosition02 = introText02.getBoundingClientRect().top;\r\n    let screenPosition02 = window.innerHeight / 1.5;\r\n\r\n    if (introPosition02 < screenPosition02) {\r\n        introText02.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear02);\r\n\r\n/* ================================================ Skills-03 ================================================= */\r\nfunction scrollAppear03() {\r\n    let introText03 = document.querySelector('.scroll-stop-03');\r\n    let introPosition03 = introText03.getBoundingClientRect().top;\r\n    let screenPosition03 = window.innerHeight / 1.7;\r\n\r\n    if (introPosition03 < screenPosition03) {\r\n        introText03.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear03);\r\n\r\n/* ================================================ Skills-04 ================================================= */\r\nfunction scrollAppear04() {\r\n    let introText04 = document.querySelector('.scroll-stop-04');\r\n    let introPosition04 = introText04.getBoundingClientRect().top;\r\n    let screenPosition04 = window.innerHeight / 1.7;\r\n\r\n    if (introPosition04 < screenPosition04) {\r\n        introText04.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear04);\r\n\r\n/* ================================================ Skills-05 ================================================= */\r\nfunction scrollAppear05() {\r\n    let introText05 = document.querySelector('.scroll-stop-05');\r\n    let introPosition05 = introText05.getBoundingClientRect().top;\r\n    let screenPosition05 = window.innerHeight / 1.5;\r\n\r\n    if (introPosition05 < screenPosition05) {\r\n        introText05.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear05);\r\n\r\n/* ================================================ Skills-06 ================================================= */\r\nfunction scrollAppear06() {\r\n    let introText06 = document.querySelector('.scroll-stop-06');\r\n    let introPosition06 = introText06.getBoundingClientRect().top;\r\n    let screenPosition06 = window.innerHeight / 1.3;\r\n\r\n    if (introPosition06 < screenPosition06) {\r\n        introText06.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear06);\r\n\r\n/* ================================================ Skills-07 ================================================= */\r\nfunction scrollAppear07() {\r\n    let introText07 = document.querySelector('.scroll-stop-07');\r\n    let introPosition07 = introText07.getBoundingClientRect().top;\r\n    let screenPosition07 = window.innerHeight / 1.3;\r\n\r\n    if (introPosition07 < screenPosition07) {\r\n        introText07.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear07);\r\n\r\n/* ================================================ Skills-08 ================================================= */\r\nfunction scrollAppear08() {\r\n    let introText08 = document.querySelector('.scroll-stop-08');\r\n    let introPosition08 = introText08.getBoundingClientRect().top;\r\n    let screenPosition08 = window.innerHeight / 1.5;\r\n\r\n    if (introPosition08 < screenPosition08) {\r\n        introText08.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear08);\r\n\r\n/* ================================================ Skills-09 ================================================= */\r\nfunction scrollAppear09() {\r\n    let introText09 = document.querySelector('.scroll-stop-09');\r\n    let introPosition09 = introText09.getBoundingClientRect().top;\r\n    let screenPosition09 = window.innerHeight / 1.7;\r\n\r\n    if (introPosition09 < screenPosition09) {\r\n        introText09.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear09);\r\n\r\n/* ================================================ Skills-10 ================================================= */\r\nfunction scrollAppear10() {\r\n    let introText10 = document.querySelector('.scroll-stop-10');\r\n    let introPosition10 = introText10.getBoundingClientRect().top;\r\n    let screenPosition10 = window.innerHeight / 1.7;\r\n\r\n    if (introPosition10 < screenPosition10) {\r\n        introText10.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear10);\r\n\r\n/* ================================================ Skills-11 ================================================= */\r\nfunction scrollAppear11() {\r\n    let introText11 = document.querySelector('.scroll-stop-11');\r\n    let introPosition11 = introText11.getBoundingClientRect().top;\r\n    let screenPosition11 = window.innerHeight / 1.5;\r\n\r\n    if (introPosition11 < screenPosition11) {\r\n        introText11.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear11);\r\n\r\n/* ================================================ Skills-12 ================================================= */\r\nfunction scrollAppear12() {\r\n    let introText12 = document.querySelector('.scroll-stop-12');\r\n    let introPosition12 = introText12.getBoundingClientRect().top;\r\n    let screenPosition12 = window.innerHeight / 1.3;\r\n\r\n    if (introPosition12 < screenPosition12) {\r\n        introText12.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear12);\r\n\r\n/* ================================================ Skills-13 ================================================= */\r\nfunction scrollAppear13() {\r\n    let introText13 = document.querySelector('.scroll-stop-13');\r\n    let introPosition13 = introText13.getBoundingClientRect().top;\r\n    let screenPosition13 = window.innerHeight / 1.3;\r\n\r\n    if (introPosition13 < screenPosition13) {\r\n        introText13.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear13);\r\n\r\n/* ================================================ Skills-14 ================================================= */\r\nfunction scrollAppear14() {\r\n    let introText14 = document.querySelector('.scroll-stop-14');\r\n    let introPosition14 = introText14.getBoundingClientRect().top;\r\n    let screenPosition14 = window.innerHeight / 1.5;\r\n\r\n    if (introPosition14 < screenPosition14) {\r\n        introText14.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear14);\r\n\r\n/* ================================================ Skills-15 ================================================= */\r\nfunction scrollAppear15() {\r\n    let introText15 = document.querySelector('.scroll-stop-15');\r\n    let introPosition15 = introText15.getBoundingClientRect().top;\r\n    let screenPosition15 = window.innerHeight / 1.7;\r\n\r\n    if (introPosition15 < screenPosition15) {\r\n        introText15.classList.add('scroll-start-1');\r\n    }\r\n}\r\n\r\nwindow.addEventListener('scroll', scrollAppear15);\r\n\n\n//# sourceURL=webpack:///./js/scroll.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sliderContainer_desktop = document.querySelector('.slider-container_desktop');\r\nconst slideRight = document.querySelector('.right-slide');\r\nconst slideLeft = document.querySelector('.left-slide');\r\nconst upButton = document.querySelector('.up-button');\r\nconst downButton = document.querySelector('.down-button');\r\nconst slidesLength = slideRight.querySelectorAll('.slider-image').length;\r\n\r\nlet activeSlideIndex = 0;\r\n\r\nslideLeft.style.top = `-${(slidesLength - 1) * 80}vh`;\r\n\r\nupButton.addEventListener('click', () => changeSlide('up'));\r\ndownButton.addEventListener('click', () => changeSlide('down'));\r\n\r\nconst changeSlide = (direction) => {\r\n    const sliderHeight = sliderContainer_desktop.clientHeight;\r\n    if(direction === 'up') {\r\n        activeSlideIndex++;\r\n        if(activeSlideIndex > slidesLength - 1) {\r\n            activeSlideIndex = 0;\r\n        }\r\n    } else if (direction === 'down') {\r\n        activeSlideIndex--;\r\n        if(activeSlideIndex < 0) {\r\n            activeSlideIndex = slidesLength - 1;\r\n        }\r\n    }\r\n    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;\r\n    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;\r\n}\r\n\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ "./js/text_animate.js":
/*!****************************!*\
  !*** ./js/text_animate.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* =========================================== Header Text Animate =========================================== */\r\nconst text = document.querySelector(\".banner__title\");\r\nconst strText = text.textContent;\r\nconst splitText = strText.split(\"\");\r\ntext.textContent = \" \";\r\nfor (let i = 0; i < splitText.length; i++) {\r\n    text.innerHTML += \"<h6>\" + splitText[i] + \"</h6>\";\r\n}\r\n\r\nlet char = 0;\r\nlet timer = setInterval(onTick, 50);\r\n\r\nfunction onTick() {\r\n    const h6 = text.querySelectorAll('h6')[char];\r\n    h6.classList.add('fade');\r\n    char++;\r\n    if (char === splitText.length) {\r\n        complete();\r\n        return;\r\n    }\r\n}\r\n\r\nfunction complete() {\r\n    clearInterval(timer);\r\n    timer = null;\r\n}\r\n\n\n//# sourceURL=webpack:///./js/text_animate.js?");

/***/ }),

/***/ "./js/validation_phone.js":
/*!********************************!*\
  !*** ./js/validation_phone.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"DOMContentLoaded\", function() {\r\n    function setCursorPosition(pos, elem) {\r\n        elem.focus();\r\n        if (elem.setSelectionRange) {\r\n            elem.setSelectionRange(pos, pos);\r\n        }\r\n    }\r\n\r\n    function mask(event) {\r\n        let matrix = \"+7 (___) ___-__-__\";\r\n        let i = 0;\r\n        let def = matrix.replace(/\\D/g, \"\");\r\n        let val = this.value.replace(/\\D/g, \"\");\r\n        if (def.length >= val.length) val = def;\r\n        this.value = matrix.replace(/./g, function(a) {\r\n            return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\r\n        });\r\n        if (event.type == \"blur\") {\r\n            if (this.value.length == 2) {\r\n                this.value = \"\"\r\n            }\r\n        } else {\r\n            setCursorPosition(this.value.length, this)\r\n        }\r\n    };\r\n    let input = document.querySelector(\"#tel\");\r\n    input.addEventListener(\"input\", mask, false);\r\n    input.addEventListener(\"focus\", mask, false);\r\n    input.addEventListener(\"blur\", mask, false);\r\n});\r\n\n\n//# sourceURL=webpack:///./js/validation_phone.js?");

/***/ })

/******/ });