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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luxonClock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _indexImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _hideShowNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _mouseFollow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/
let menuClick = false






var clock = setInterval(_luxonClock__WEBPACK_IMPORTED_MODULE_0__["updateClock"], 1000)
var navChecker = setInterval(addNav, 500)
var indexImageChecker = setInterval(addIndexImg, 500)
var mouseFollowChecker = setInterval(setMouseFollow, 500)

function init() {
  // luxon library <script> tag
  let luxonTag = document.createElement('script')
  luxonTag.src = 'https://moment.github.io/luxon/global/luxon.min.js'
  document.body.appendChild(luxonTag)

  setUpHamburger()
}

window.addEventListener(
  'sempliceTransitionInDone',
  function (e) {
    isProject()
  },
  false
)

window.addEventListener('load', (event) => {
  console.log('Window load event')
})

window.addEventListener('resize', () => {
  // customVhUnit() // updates the injected var
})

function setMouseFollow() {
  if (document.querySelector('div.list')) {
    let hoverElems = Array.from(document.querySelectorAll('div.list a'))
    Object(_mouseFollow__WEBPACK_IMPORTED_MODULE_3__["imageMove"])(hoverElems)
    clearInterval(mouseFollowChecker)
  }
}

function addIndexImg() {
  if (document.querySelector('section.work-index-section > div')) {
    let nodeList = document.querySelectorAll('div.index-items')
    Object(_indexImage__WEBPACK_IMPORTED_MODULE_1__["indexImage"])(nodeList)
    clearInterval(indexImageChecker)
  }
}

function addNav() {
  let nav = document.querySelectorAll('div.navbar-inner')[0]

  if (nav) {
    //  or use !== 'undefined' ?
    window.addEventListener('scroll', navHandler, {
      capture: false,
      passive: true,
    })
    clearInterval(navChecker)
  }
}

function setUpHamburger() {
  let hamburger = document.getElementsByClassName('hamburger')[0]

  if (hamburger) {
    hamburger.addEventListener('click', menuToggle)
  } else {
    console.log('No Hamburger menu')
  }
}

function menuToggle() {
  // toggles boolean between true and false
  menuClick = !menuClick

  if (menuClick) {
    // menu is open, ensures mobile menu doesn't scroll away
    document.removeEventListener('scroll', navHandler, {
      capture: false,
      passive: false,
    })
  } else {
    // menu is closed
    document.addEventListener('scroll', navHandler, {
      capture: false,
      passive: false,
    })
  }
}

function navHandler(event) {
  let nav = document.querySelectorAll('div.navbar-inner')[0]
  let footer = document.querySelector('.clock-container')
  let currentScrollPos = window.pageYOffset

  if (nav != 'undefined') {
    Object(_hideShowNav__WEBPACK_IMPORTED_MODULE_2__["hideShow"])(nav, footer, currentScrollPos)
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed')

  init()
})


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClock", function() { return updateClock; });
function updateClock() {
  if (luxon) {
    //
    let locations = document.querySelectorAll(
      '.footer-container .clock-container'
    )

    locations.forEach((location) => {
      let clockStyle = location.querySelector('.clock-style')
      let cityName = location.querySelector('.cityName')
      let timeZone = location.getAttribute('data-timezone')
      let now = luxon.DateTime.now().setZone(timeZone)

      clockStyle.innerHTML = now.toFormat('HH:mm:ss')

      let hour = parseInt(now.toFormat('H'))

      if (hour >= 9 && hour <= 18) {
        cityName.classList.add('open')
      }
    })
  }
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexImage", function() { return indexImage; });
/* harmony import */ var _mediaQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _hideShowNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




let indexItems
let bgHover
let header
let bodyTag
let navBar
let close

let thumbs
let itemLabels
let captions
let largeImages
let touchCovers
let opacityItems

let hasRendered = false

function indexImage(itemsNodeList) {
  indexItems = Array.from(itemsNodeList[0].querySelectorAll('a'))
  bodyTag = document.body
  close = document.querySelectorAll('.close')[0]
  navBar = document.querySelectorAll('div.navbar-inner')[0]
  bgHover = document.getElementsByClassName('thumbBg')[0]
  header = document.querySelector('h1')

  renderElems(indexItems)
}

function renderElems(indexItems) {
  for (let i = 0; i < indexItems.length; i++) {
    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )

    let numImagesLabel = indexItems[i].getElementsByClassName('numImages')[0]
    if (numImagesLabel) {
      numImagesLabel.innerHTML = imageSets.length
    }
    imageSets.forEach((imageSet) => {
      let touchCover = document.createElement('div')
      let smlImage = new Image() // === document.createElement('img')
      let lgImage = new Image()
      let caption = document.createElement('p')
      let childItems = [lgImage, caption, touchCover, smlImage]
      if (imageSet.dataset.caption) {
        caption.innerHTML = imageSet.dataset.caption
      }

      smlImage.src = imageSet.dataset.small
      lgImage.src = imageSet.dataset.large
      touchCover.classList.add('touchCover')
      smlImage.classList.add('small')
      lgImage.classList.add('large')
      caption.classList.add('caption')

      imageSet.replaceChildren() // think this clears this element

      childItems.forEach((childItem) => {
        imageSet.appendChild(childItem)
      })
    })
  }

  setUpElementArrays()

  _mediaQueries__WEBPACK_IMPORTED_MODULE_0__["desktops"].forEach((desktop) => {
    desktop.addEventListener('change', desktopHandler)
    desktopHandler(desktop)
  })

  _mediaQueries__WEBPACK_IMPORTED_MODULE_0__["tablets"].forEach((tablet) => {
    tablet.addEventListener('change', tabletHandler)
    tabletHandler(tablet)
  })

  close.addEventListener('click', function (event) {
    closeLightBox()
  })
}

function setUpElementArrays() {
  thumbs = Array.from(document.querySelectorAll('.small'))
  largeImages = Array.from(document.querySelectorAll('.large'))
  touchCovers = Array.from(document.querySelectorAll('.touchCover'))
  itemLabels = Array.from(document.querySelectorAll('.index-item-wrapper'))
  captions = Array.from(document.querySelectorAll('.caption'))

  opacityItems = [largeImages, touchCovers, captions]
}

function addDesktopLayer() {
  indexItems.forEach((indexItem) => {
    indexItem.addEventListener('mouseover', indexItemHandler)
    indexItem.addEventListener('mouseout', indexItemHandler)
  })

  thumbs.forEach((thumb) => {
    thumb.addEventListener('mouseover', desktopThumbHandler)
    thumb.addEventListener('mouseout', desktopThumbHandler)
  })
}

function removeDesktopLayer() {
  indexItems.forEach((indexItem) => {
    indexItem.removeEventListener('mouseover', indexItemHandler)
    indexItem.removeEventListener('mouseout', indexItemHandler)
  })

  thumbs.forEach((thumb) => {
    thumb.removeEventListener('mouseover', desktopThumbHandler)
    thumb.removeEventListener('mouseout', desktopThumbHandler)
  })
}

function indexItemHandler(event) {
  let current = event.currentTarget
  let numImage = current.querySelector('.numImages')
  if (event.type === 'mouseover') {
    indexItems.forEach((item) => {
      item.style.zIndex = 0 // reset all to 0
    })
    numImage.style.setProperty('color', 'var(--black)', 'important')
    current.style.zIndex = 1 // bring the current to 1
    current.classList.add('indexHover')
    header.classList.add('headingHover')
    bgHover.classList.add('fullOpacity')
  } else if (event.type === 'mouseout') {
    current.classList.remove('indexHover')
    numImage.style.color = 'var(--white)'
    header.classList.remove('headingHover')
    bgHover.classList.remove('fullOpacity')
  }
}

function desktopThumbHandler(event) {
  let current = event.currentTarget
  let parent = current.parentNode
  let setThumbs = Array.from(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["nthParent"])(parent, 2).querySelectorAll('.small'))

  let lgImg = parent.querySelector('.large')
  let caption = parent.querySelector('.caption')

  if (event.type === 'mouseover') {
    console.log(lgImg)
    setThumbs.forEach((setThumb) => {
      setThumb.style.opacity = 0.25
    })
    current.style.opacity = 1
    lgImg.classList.add('fullOpacity')
    caption.classList.add('fullOpacity')
  } else if (event.type === 'mouseout') {
    setThumbs.forEach((setThumb) => {
      setThumb.style.opacity = 1
    })
    lgImg.classList.remove('fullOpacity')
    caption.classList.remove('fullOpacity')
  }
}

function addTabletLayer() {
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', tabletThumbHandler)
    thumb.addEventListener('touchStart', tabletThumbHandler)
  })
}

function tabletThumbHandler(event) {
  let current = event.currentTarget //
  let parent = current.parentNode // need this to track the large image / caption / cover
  let superParent = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["nthParent"])(parent, 2)
  let cover = parent.querySelector('.touchCover')
  let lgImg = parent.querySelector('.large')
  let caption = parent.querySelector('.caption')
  let itemLabel = superParent.querySelector('.index-item-wrapper')

  bodyTag.classList.add('disableScroll')
  close.classList.add('showClose')

  if (event.type === 'click' || 'touchstart') {
    Object(_hideShowNav__WEBPACK_IMPORTED_MODULE_2__["showNav"])(navBar)
    indexItems.forEach((item) => {
      item.style.zIndex = 0 // reset all to 0
    })
    superParent.style.zIndex = 1
    itemLabel.classList.add('zeroOpacity')
    thumbs.forEach((thumb) => {
      thumb.style.pointerEvents = 'none'
    })
    cover.classList.add('fullOpacity')
    lgImg.classList.add('fullOpacity')
    caption.classList.add('fullOpacity')
  }

  event.preventDefault()
}

function removeTabletLayer() {
  closeLightBox()
  removeThumbHandlers()
}

function closeLightBox() {
  bodyTag.classList.remove('disableScroll')
  close.classList.remove('showClose')

  // opacityItems is an Array of arrays
  for (let i = 0; i < opacityItems.length; i++) {
    opacityItems[i].forEach((item) => {
      if (item.classList.contains('fullOpacity')) {
        item.classList.remove('fullOpacity')
      }
    })
  }

  itemLabels.forEach((itemLabel) => {
    if (itemLabel.classList.contains('zeroOpacity')) {
      itemLabel.classList.remove('zeroOpacity')
    }
  })

  thumbs.forEach((thumb) => {
    thumb.style.pointerEvents = 'auto'
  })
}

function removeThumbHandlers() {
  thumbs.forEach((thumb) => {
    thumb.removeEventListener('click', tabletThumbHandler)
    thumb.removeEventListener('touchStart', tabletThumbHandler)
  })
}

function isDesktop() {
  //removeMobileLayer()
  removeTabletLayer()
  addDesktopLayer()
}

function isTablet() {
  //removeMobileLayer()
  removeDesktopLayer()
  addTabletLayer()
}

function isMobile() {
  removeDesktopLayer()
  removeTabletLayer()
  // addMobileLayer()
  console.log('isMobile func')
}

function desktopHandler(event) {
  isDesktop()
}

function tabletHandler(event) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hasTouch"])()) {
    isTablet()
  } else {
    isDesktop()
  }
}

function mobileHandler(event) {
  isMobile()
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopWide", function() { return desktopWide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktop", function() { return desktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabletWide", function() { return tabletWide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tablet", function() { return tablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile", function() { return mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devices", function() { return devices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktops", function() { return desktops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tablets", function() { return tablets; });
// Semplice guidance
const desktopWide = window.matchMedia('screen and (min-width: 1170px)')

const desktop = window.matchMedia(
  'screen and (max-width: 1169px) and (min-width: 992px)'
)

const tabletWide = window.matchMedia(
  'screen and (max-width: 991px) and (min-width: 768px) and (hover: none)'
)

const tablet = window.matchMedia(
  'screen and (max-width: 767px) and (min-width: 544px) and (hover: none)'
)

const mobile = window.matchMedia(
  'screen and (max-width: 543px) and (hover: none)'
)

const devices = [desktopWide, desktop, tabletWide, tablet, mobile]
const desktops = [desktopWide, desktop]
const tablets = [tabletWide, tablet]



// const iPad = window.matchMedia(
//   '(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (hover: none)'
// )

// const iPadProLandscape = window.matchMedia(
//   'screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)'
// )

// const nonRetinaScreen = window.matchMedia(
//   'screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)'
// )

// const retinaScreen = window.matchMedia(
//   'screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)'
// )


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return isInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserType", function() { return browserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customVhUnit", function() { return customVhUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customVwUnit", function() { return customVwUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeHoverStyles", function() { return removeHoverStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTouch", function() { return hasTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nthParent", function() { return nthParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame

function isInViewport(elem) {
  var distance = elem.getBoundingClientRect()
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}

// This is globally scoped, call from anywhere
window.mobileCheck = function () {
  let check = false
  ;(function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

function browserType() {
  let userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.indexOf('safari') != -1) {
    if (userAgent.indexOf('chrome') > -1) {
      // Do something Chrome related
      console.log('Browser type: Chrome')
    } else {
      // Do something Safari related
      console.log('Browser type: Safari')
      //e.g about.style.marginTop = "0";
    }
  }
}

// Non-recursive helper function
function nthParent(element, n) {
  while (n-- && element) element = element.parentNode
  return element
}

/* Checks if device has touchEvents */
function hasTouch() {
  return (
    'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}

function removeHoverStyles() {
  console.log('remove Hover Styles')
  if (hasTouch()) {
    // remove all :hover stylesheets
    try {
      // prevent exception on browsers not supporting DOM styleSheets properly
      for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si]
        if (!styleSheet.rules) continue

        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue

          if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri)
          }
        }
      }
    } catch (ex) {}
  }
}

// Solving for mobile browser vh/vw discrepencies in differen browsers
// via: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
function customVhUnit() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

function customVwUnit() {
  let vw = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vw', `${vh}px`)
}




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNav", function() { return hideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNav", function() { return showNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShow", function() { return hideShow; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


let prevScrollPos = window.pageYOffset

function showNav(elem) {
  elem.classList.remove('hideNav')
  elem.classList.add('showNav')
}

function hideNav(elem) {
  elem.classList.remove('showNav')
  elem.classList.add('hideNav')
}

function hideShow(navElem, footerElem, currentScroll) {
  let nav = navElem
  let footer = footerElem
  let currentScrollPos = currentScroll

  if (
    prevScrollPos > currentScrollPos ||
    currentScrollPos <= 0 ||
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isInViewport"])(footer)
  ) {
    showNav(nav)
  } else {
    hideNav(nav)
  }
  prevScrollPos = currentScrollPos
}




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageMove", function() { return imageMove; });
/* harmony import */ var _mediaQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



let aimX = null
let aimY = null
let currentX = null
let currentY = null
let currentImage = null
let hoverElements
let images = []
let isPaused
let requestID

function imageMove(hoverElems) {
  hoverElements = hoverElems
  hoverElements.forEach((hoverElem) => {
    images.push(hoverElem.querySelector('img'))
  })

  _mediaQueries__WEBPACK_IMPORTED_MODULE_0__["desktops"].forEach((desktop) => {
    desktop.addEventListener('change', desktopHandler)
    desktopHandler(desktop)
  })

  _mediaQueries__WEBPACK_IMPORTED_MODULE_0__["tablets"].forEach((tablet) => {
    tablet.addEventListener('change', tabletHandler)
    tabletHandler(tablet)
  })

  draw()
}

function mouseOver(event) {
  currentImage = event.currentTarget.querySelector('img')
  currentImage.style.opacity = 1
}

function mouseOut(event) {
  currentImage = event.currentTarget.querySelector('img')
  currentImage.style.opacity = 0
}

function mouseMove(event) {
  aimX = event.clientX
  aimY = event.clientY
  if (currentX === null) {
    currentX = event.clientX
    currentY = event.clientY
  }
}

function addImageMove() {
  hoverElements.forEach((hoverElem) => {
    hoverElem.addEventListener('mouseover', mouseOver)
    hoverElem.addEventListener('mousemove', mouseMove)
    hoverElem.addEventListener('mouseout', mouseOut)
  })
}

function removeImageMove() {
  hoverElements.forEach((hoverElem) => {
    hoverElem.removeEventListener('mouseover', mouseOver)
    hoverElem.removeEventListener('mousemove', mouseMove)
    hoverElem.removeEventListener('mouseout', mouseOut)
  })
}

function draw() {
  if (!isPaused) {
    if (currentImage) {
      currentImage.style.transform = `translate3d(${
        currentX - currentImage.offsetWidth / 2 - window.innerWidth / 2
      }px, ${
        currentY -
        (currentImage.offsetHeight + window.innerHeight) / 2 +
        window.pageYOffset
      }px, 0px)`
    }
  }

  currentX = currentX + (aimX - currentX) * 0.2
  currentY = currentY + (aimY - currentY) * 0.2

  requestID = window.requestAnimationFrame(draw)
}

function stopDraw() {
  window.cancelAnimationFrame(requestID)
}

function isDesktop() {
  isPaused = false
  images.forEach((image) => {
    image.style.opacity = 0
    image.style.transform = `none`
    image.style.pointerEvents = 'none'

    image.style.top = '50%'
    image.style.left = '50%'
  })

  addImageMove()
  draw()
}

function isTablet() {
  isPaused = true
  images.forEach((image) => {
    image.style.opacity = 1
    image.style.transform = `none`
    image.style.pointerEvents = 'auto'
    image.style.top = '50%'
    image.style.left = '0%'
  })

  removeImageMove()
  stopDraw()
}

function desktopHandler(event) {
  // console.log(event)
  isDesktop()
}

function tabletHandler(event) {
  // console.log('tabletHandler')
  /* Uncomment if statement for prod */
  // isTablet()
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hasTouch"])()) {
    isTablet()
  } else {
    isDesktop()
  }
}




/***/ })
/******/ ]);