/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/
let menuClick = false

import { updateClock } from './luxonClock'
import { indexImage } from './indexImage'
import { hideShow } from './hideShowNav'
import { imageMove } from './mouseFollow'

var clock = setInterval(updateClock, 1000)
var navChecker = setInterval(addNav, 400)
var indexImageChecker = setInterval(addIndexImg, 400)
var mouseFollowChecker = setInterval(setMouseFollow, 400)

function init() {
  // luxon library <script> tag
  let luxonTag = document.createElement('script')
  luxonTag.src = 'https://moment.github.io/luxon/global/luxon.min.js'
  document.body.appendChild(luxonTag)

  setUpHamburger()
  // setMouseFollow()
}

window.addEventListener(
  'sempliceTransitionInDone',
  function (e) {
    // init()
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
  console.log('set Mouse Follow')
  if (document.querySelector('div.list')) {
    let hoverElems = Array.from(document.querySelectorAll('div.list a'))
    imageMove(hoverElems)
    clearInterval(mouseFollowChecker)
  }
}

function addIndexImg() {
  if (
    document.querySelector(
      'body > div.sections > section.work-index-section > div'
    )
  ) {
    let nodeList = document.querySelectorAll('div.index-items')
    indexImage(nodeList)
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
    hideShow(nav, footer, currentScrollPos)
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed')

  // removeHoverStyles()
  // customVhUnit()
  init()
})
