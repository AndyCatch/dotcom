/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/
let prevScrollpos = window.pageYOffset // Number

let isMobile = false
let menuClick = false

var clock = setInterval('updateClock()', 1000)
var navChecker = setInterval('addNav()', 200)
var indexImageChecker = setInterval('indexImage()', 200)

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

function indexImage() {
  let indexItems = Array.from(document.querySelectorAll('div.index-items a'))

  for (let i = 0; i < indexItems.length; i++) {
    // add mouseover event to set all items
    indexItems[i].addEventListener('mouseover', function (event) {
      indexItems.forEach((item) => {
        item.style.zIndex = 0 // reset all to 0
        event.currentTarget.style.zIndex = 1 // bring the current to 1
      })
    })

    if (indexItems[i].querySelectorAll('div.image-set')[i]) {
      // getElementsByClassName returns an HTMLCollection, NOT an Array
      let imageSets = Array.from(
        indexItems[i].getElementsByClassName('image-set')
      )

      imageSets.forEach((imageSet) => {
        let thumb = imageSet.getElementsByClassName('small')[0] // in imageSets, find the small thumb
        let lgImageSrc = thumb.dataset.large // extract the data-large attribute, .dataset returns object
        let lgImage = new Image() // === document.createElement('img')
        lgImage.classList.add('large') // add class, src, add to imageSet
        lgImage.src = lgImageSrc
        imageSet.appendChild(lgImage)

        // add listeners to thumbs
        thumb.addEventListener('mouseover', function (event) {
          lgImage.style.opacity = 1
        })

        thumb.addEventListener('mouseout', function (event) {
          lgImage.style.opacity = 0
        })
      })
    }
  }

  clearInterval(indexImageChecker)
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

function setUpHamburger() {
  let hamburger = document.getElementsByClassName('hamburger')[0]

  if (hamburger) {
    hamburger.addEventListener('click', menuToggle)
  } else {
    console.log('No Hamburger menu')
  }
}

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
  let footer = document.querySelector('.clock-container')
  let currentScrollPos = window.pageYOffset

  // console.log('footer-in-view: ' + isInViewport(footer))

  if (nav != 'undefined') {
    if (
      prevScrollpos > currentScrollPos ||
      currentScrollPos <= 0 ||
      isInViewport(footer)
    ) {
      showNav(nav)
    } else {
      hideNav(nav)
    }
    prevScrollpos = currentScrollPos
  }
}

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
