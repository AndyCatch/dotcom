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

function isThisMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
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

/* Checks if device has touchEvents */
function hasTouch() {
  return (
    'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}

function removeHoverStyles() {
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

export {
  isInViewport,
  isThisMobile,
  browserType,
  customVhUnit,
  customVwUnit,
  removeHoverStyles,
}
