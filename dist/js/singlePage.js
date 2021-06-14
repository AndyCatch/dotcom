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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/singlePage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/singlePage.js":
/*!******************************!*\
  !*** ./src/js/singlePage.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/js/test.js\");\n/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/\nlet prevScrollpos = window.pageYOffset // Number\n\nlet isMobile = false\nlet menuClick = false\n\nvar clock\nvar navChecker\nvar indexImageChecker\n\n\n\nfunction init() {\n  // luxon library <script> tag\n  let luxonTag = document.createElement('script')\n  luxonTag.src = 'https://moment.github.io/luxon/global/luxon.min.js'\n  document.body.appendChild(luxonTag)\n\n  clock = setInterval(function () {\n    if (updateClock) {\n      updateClock()\n    }\n  }, 1000)\n\n  navChecker = setInterval(function () {\n    if (addNav) {\n      addNav()\n    }\n  }, 200)\n\n  indexImageChecker = setInterval(function () {\n    if (indexImage) {\n      indexImage()\n    }\n  }, 200)\n\n  Object(_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\nwindow.addEventListener(\n  'sempliceTransitionInDone',\n  function (e) {\n    isProject()\n  },\n  false\n)\n\nsetUpHamburger()\n\nwindow.addEventListener('load', (event) => {\n  console.log('Window load event')\n})\n\nfunction indexImage() {\n  let indexItems = Array.from(document.querySelectorAll('div.index-items a'))\n\n  for (let i = 0; i < indexItems.length; i++) {\n    // add mouseover event to set all items\n    indexItems[i].addEventListener('mouseover', function (event) {\n      indexItems.forEach((item) => {\n        item.style.zIndex = 0 // reset all to 0\n        event.currentTarget.style.zIndex = 1 // bring the current to 1\n      })\n    })\n\n    if (indexItems[i].querySelectorAll('div.image-set')[i]) {\n      // getElementsByClassName returns an HTMLCollection, NOT an Array\n      let imageSets = Array.from(\n        indexItems[i].getElementsByClassName('image-set')\n      )\n\n      imageSets.forEach((imageSet) => {\n        let thumb = imageSet.getElementsByClassName('small')[0] // in imageSets, find the small thumb\n        let lgImageSrc = thumb.dataset.large // extract the data-large attribute, .dataset returns object\n        let lgImage = new Image() // === document.createElement('img')\n        lgImage.classList.add('large') // add class, src, add to imageSet\n        lgImage.src = lgImageSrc\n        imageSet.appendChild(lgImage)\n\n        // add listeners to thumbs\n        thumb.addEventListener('mouseover', function (event) {\n          lgImage.style.opacity = 1\n        })\n\n        thumb.addEventListener('mouseout', function (event) {\n          lgImage.style.opacity = 0\n        })\n      })\n    }\n  }\n\n  clearInterval(indexImageChecker)\n}\n\nfunction addNav() {\n  let nav = document.querySelectorAll('div.navbar-inner')[0]\n  if (nav !== 'undefined') {\n    window.addEventListener('scroll', hideShowNav, {\n      capture: false,\n      passive: true,\n    })\n    clearInterval(navChecker)\n  }\n}\n\nfunction setUpHamburger() {\n  let hamburger = document.getElementsByClassName('hamburger')[0]\n\n  if (hamburger) {\n    hamburger.addEventListener('click', menuToggle)\n  } else {\n    console.log('No Hamburger menu')\n  }\n}\n\nfunction updateClock() {\n  if (luxon) {\n    //\n    let locations = document.querySelectorAll(\n      '.footer-container .clock-container'\n    )\n\n    locations.forEach((location) => {\n      let clockStyle = location.querySelector('.clock-style')\n      let cityName = location.querySelector('.cityName')\n      let timeZone = location.getAttribute('data-timezone')\n      let now = luxon.DateTime.now().setZone(timeZone)\n\n      clockStyle.innerHTML = now.toFormat('HH:mm:ss')\n\n      let hour = parseInt(now.toFormat('H'))\n\n      if (hour >= 9 && hour <= 18) {\n        cityName.classList.add('open')\n      }\n    })\n  }\n}\n\nfunction isThisMobile() {\n  // device detection\n  if (\n    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(\n      navigator.userAgent\n    )\n  ) {\n    isMobile = true\n  }\n}\n\nfunction showNav(elem) {\n  elem.classList.remove('hideNav')\n  elem.classList.add('showNav')\n}\n\nfunction hideNav(elem) {\n  elem.classList.remove('showNav')\n  elem.classList.add('hideNav')\n}\n\n// hide / show Nav functionality\n// relies on let prevScrollpos in window.load\nfunction hideShowNav(event) {\n  let nav = document.querySelectorAll('div.navbar-inner')[0]\n  let footer = document.querySelector('.clock-container')\n  let currentScrollPos = window.pageYOffset\n\n  if (nav != 'undefined') {\n    if (\n      prevScrollpos > currentScrollPos ||\n      currentScrollPos <= 0 ||\n      isInViewport(footer)\n    ) {\n      showNav(nav)\n    } else {\n      hideNav(nav)\n    }\n    prevScrollpos = currentScrollPos\n  }\n}\n\nfunction isInViewport(elem) {\n  var distance = elem.getBoundingClientRect()\n  return (\n    distance.top >= 0 &&\n    distance.left >= 0 &&\n    distance.bottom <=\n      (window.innerHeight || document.documentElement.clientHeight) &&\n    distance.right <=\n      (window.innerWidth || document.documentElement.clientWidth)\n  )\n}\n\nfunction menuChange(boolean) {\n  if (boolean) {\n    // menu is open, ensures mobile menu doesn't scroll away\n    document.removeEventListener('scroll', hideShowNav, {\n      capture: false,\n      passive: false,\n    })\n  } else {\n    // menu is closed\n    document.addEventListener('scroll', hideShowNav, {\n      capture: false,\n      passive: false,\n    })\n  }\n}\n\nfunction menuToggle() {\n  menuClick = !menuClick\n  // toggles boolean between true and false\n  menuChange(menuClick)\n}\n\n/* Please remove hover styles in mobile ;( */\nfunction hasTouch() {\n  return (\n    'ontouchstart' in document.documentElement ||\n    navigator.maxTouchPoints > 0 ||\n    navigator.msMaxTouchPoints > 0\n  )\n}\n\nif (hasTouch()) {\n  // remove all :hover stylesheets\n  try {\n    // prevent exception on browsers not supporting DOM styleSheets properly\n    for (var si in document.styleSheets) {\n      var styleSheet = document.styleSheets[si]\n      if (!styleSheet.rules) continue\n\n      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {\n        if (!styleSheet.rules[ri].selectorText) continue\n\n        if (styleSheet.rules[ri].selectorText.match(':hover')) {\n          styleSheet.deleteRule(ri)\n        }\n      }\n    }\n  } catch (ex) {}\n}\n\n// Solving for mobile browser vh discrepencies for project image\n// via: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/\n// First we get the viewport height and we multiple it by 1% to get a value for a vh unit\nlet vh = window.innerHeight * 0.01\n// Then we set the value in the --vh custom property to the root of the document\ndocument.documentElement.style.setProperty('--vh', `${vh}px`)\n// We listen to the resize event\nwindow.addEventListener('resize', () => {\n  // We execute the same script as before\n  let vh = window.innerHeight * 0.01\n  document.documentElement.style.setProperty('--vh', `${vh}px`)\n})\n\n// hack to adjust margin discrepency in browsers\nfunction browserType() {\n  let userAgent = navigator.userAgent.toLowerCase()\n  if (userAgent.indexOf('safari') != -1) {\n    if (userAgent.indexOf('chrome') > -1) {\n      //browser is chrome\n      console.log('Browser type: Chrome')\n    } else {\n      //browser is safari\n      console.log('Browser type: Safari')\n      //about.style.marginTop = \"0\";\n    }\n  }\n}\n\nisThisMobile()\nbrowserType()\nhasTouch()\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  console.log('DOM fully loaded and parsed')\n\n  init()\n})\n\n\n//# sourceURL=webpack:///./src/js/singlePage.js?");

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  hello()\n  //\n});\n\nfunction hello() {\n  console.log('Hello mate')\n}\n\n\n//# sourceURL=webpack:///./src/js/test.js?");

/***/ })

/******/ });