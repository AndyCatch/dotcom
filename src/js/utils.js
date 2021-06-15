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
  // device detection
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true
  }
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

function customVhUnit() {
  // Solving for mobile browser vh discrepencies for project image
  // via: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

function customVwUnit() {
  let vw = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vw', `${vh}px`)
}

export { isInViewport, isThisMobile, browserType, customVhUnit, customVwUnit }
