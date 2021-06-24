import { isInViewport } from './utils'

let prevScrollPos = window.pageYOffset // Number

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
    isInViewport(footer)
  ) {
    showNav(nav)
  } else {
    hideNav(nav)
  }
  prevScrollPos = currentScrollPos
}

export { hideNav, showNav, hideShow }
