/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/
let prevScrollpos = window.pageYOffset // Number

let isMobile = false
let menuClick = false

// For Observer object
let options = {
  rootMargin: '0px 0px',
  threshold: 0.99,
}

let observer = new IntersectionObserver(revealNav, options)

var clock = setInterval('updateClock()', 1000)
var navChecker = setInterval('addNav()', 200)
var observerChecker = setInterval('setUpObserver()', 200)
var slideChecker = setInterval('slides()', 200)

window.addEventListener(
  'sempliceTransitionInDone',
  function (e) {
    isProject()
  },
  false
)

setUpHamburger()

window.addEventListener('load', (event) => {
  console.log('Window loaded')

  // luxon library <script> tag
  let luxonTag = document.createElement('script')
  luxonTag.src = 'https://moment.github.io/luxon/global/luxon.min.js'
  document.body.appendChild(luxonTag)
})

function windowResize() {
  console.log('resize')
}

function slides() {
  // Grab all the indexItems
  let indexItems = document.querySelectorAll('div.index-items a')

  // Go through all of them, see which ones have slideshows
  indexItems.forEach((indexItem) => {
    if (indexItem.querySelectorAll('div.slideshow')[0]) {
      // the ones that do, grab some references
      let slideShow = indexItem.querySelectorAll('div.slideshow')[0]
      let images = slideShow.querySelectorAll('img')

      // Assuming that any indexItem in here * has * a slideshow, add a mouse move listener to it
      indexItem.addEventListener('mousemove', function (event) {
        // console.log(event.clientX)
        const x = event.clientX
        const width = slideShow.offsetWidth
        const percentage = x / width
        const imageNumber = Math.floor(percentage * images.length)

        images.forEach((image) => {
          // set the z back to 0, opacity to 0
          image.style.zIndex = 0
          image.style.opacity = 0
        })

        images[imageNumber].style.zIndex = 1
        images[imageNumber].style.opacity = 1
      })

      indexItem.addEventListener('mouseout', function (event) {
        images.forEach((image) => {
          image.style.opacity = 0
        })
      })
    }
  })

  // clearing the interval to stop the brute force
  clearInterval(slideChecker)
}

function addNav() {
  let nav = document.querySelectorAll('div.navbar-inner')[0]
  if (nav !== 'undefined') {
    window.addEventListener('scroll', hideShowNav, {
      capture: false,
      passive: true,
    })
    clearInterval(navChecker)
  }
}

function setUpObserver() {
  document.querySelectorAll('.footer-container').forEach((module) => {
    observer.observe(module)
  })
}

function setUpHamburger() {
  let hamburger = document.getElementsByClassName('hamburger')[0]

  if (hamburger) {
    hamburger.addEventListener('click', menuToggle)
  }
}

function revealNav(entries, obs) {
  let nav = document.querySelectorAll('div.navbar-inner')[0]

  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
      console.log('entry.isIntersecting')
      nav.classList.remove('hideNav')
      nav.classList.add('showNav')
    }
  })
}

function updateClock() {
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

function showNav(elem) {
  elem.classList.remove('hideNav')
  elem.classList.add('showNav')
}

function hideNav(elem) {
  elem.classList.remove('showNav')
  elem.classList.add('hideNav')
}

// hide / show Nav functionality
// relies on let prevScrollpos in window.load
function hideShowNav(event) {
  let nav = document.querySelectorAll('div.navbar-inner')[0]
  let currentScrollPos = window.pageYOffset

  if (nav != 'undefined') {
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
      showNav(nav)
    } else {
      hideNav(nav)
    }
    prevScrollpos = currentScrollPos
  }
}

function menuChange(boolean) {
  if (boolean) {
    // menu is open, ensures mobile menu doesn't scroll away
    document.removeEventListener('scroll', hideShowNav, {
      capture: false,
      passive: false,
    })
  } else {
    // menu is closed
    document.addEventListener('scroll', hideShowNav, {
      capture: false,
      passive: false,
    })
  }
}

function menuToggle() {
  menuClick = !menuClick
  // toggles boolean between true and false
  menuChange(menuClick)
}

/* Please remove hover styles in mobile ;( */
function hasTouch() {
  return (
    'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}

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

// Solving for mobile browser vh discrepencies for project image
// via: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

// hack to adjust margin discrepency in browsers
function browserType() {
  let userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.indexOf('safari') != -1) {
    if (userAgent.indexOf('chrome') > -1) {
      //browser is chrome
      console.log('Browser type: Chrome')
    } else {
      //browser is safari
      console.log('Browser type: Safari')
      //about.style.marginTop = "0";
    }
  }
}

isThisMobile()
browserType()
hasTouch()
