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

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src/index.js?!./css/style.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--4-3!./css/style.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--4-3");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--4-3!./style.css */ \"../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src/index.js?!./css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./css/style.css?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_animate */ \"./js/text_animate.js\");\n/* harmony import */ var _text_animate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_animate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile_menu */ \"./js/mobile_menu.js\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll */ \"./js/scroll.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ \"./js/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _validation_phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation_phone */ \"./js/validation_phone.js\");\n/* harmony import */ var _validation_phone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_validation_phone__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n // import '../sass/style.sass'\n\n/* ========================= Mobile Menu =========================== */\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var link = document.querySelector('.mobile_menu_button');\n  var menu = document.querySelector('.mobile_menu_wrap');\n  link.addEventListener('click', function () {\n    link.classList.toggle('mobile_menu_button_active');\n    menu.classList.toggle('mobile_menu_wrap_active');\n  });\n});\n/* ========================= Progress Page Bar ======================== */\n\nwindow.onscroll = function () {\n  pageScroll();\n};\n\nfunction pageScroll() {\n  var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;\n  var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n  var scrolled = windowScroll / documentHeight * 100;\n  document.getElementById('pageBar').style.width = scrolled + '%';\n}\n\n//# sourceURL=webpack:///./js/script.js?");

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

/***/ })

/******/ });