/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/
// let prevScrollPos = window.pageYOffset // Number

let isMobile = false
let menuClick = false

import { customVhUnit, removeHoverStyles } from './utils'
import { updateClock } from './luxonClock'
import { indexImage } from './indexImage'
import { showNav, hideNav, hideShow } from './hideShowNav'

var clock = setInterval(updateClock, 1000)
var navChecker = setInterval(addNav, 200)
var indexImageChecker = setInterval(addIndexImg, 200)

function init() {
  // luxon library <script> tag
  let luxonTag = document.createElement('script')
  luxonTag.src = 'https://moment.github.io/luxon/global/luxon.min.js'
  document.body.appendChild(luxonTag)

  setUpHamburger()
  imageMove()
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
  customVhUnit() // updates the injected var
})

function addIndexImg() {
  let nodeList = document.querySelectorAll('div.index-items a')

  indexImage(nodeList)

  clearInterval(indexImageChecker)
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

function imageMove() {
  let hoverElems = Array.from(document.querySelectorAll('div.list a'))
  let hoverImages = Array.from(document.querySelectorAll('div.list a h1 img'))

  for (let i = 0; i < hoverElems.length; i++) {
    hoverElems[i].addEventListener('mouseover', function (event) {
      hoverImages.forEach((image) => {
        image.style.opacity = 1
      })
    })

    hoverElems[i].addEventListener('mousemove', function (event) {
      hoverImages.forEach((image) => {
        image.style.transform = `translate(${
          event.clientX - window.innerWidth / 2 - image.offsetWidth / 2
        }px, ${
          event.clientY - window.innerHeight / 2 - image.offsetHeight / 2
        }px)`
      })
    })

    hoverElems[i].addEventListener('mouseout', function (event) {
      hoverImages.forEach((image) => {
        image.style.opacity = 0
      })
    })
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
    hideShow(nav, footer, currentScrollPos)
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed')

  removeHoverStyles()
  customVhUnit()
  init()
})
