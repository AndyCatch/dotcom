import { isInViewport } from './utils'

function showNav(elem) {
  elem.classList.remove('hideNav')
  elem.classList.add('showNav')
}

function hideNav(elem) {
  elem.classList.remove('showNav')
  elem.classList.add('hideNav')
}

function hideShowNav(navElem, footerElem, currentScrollPos, prevScrollpos) {
  if (navElem != 'undefined') {
    if (
      prevScrollpos > currentScrollPos ||
      currentScrollPos <= 0 ||
      isInViewport(footerElem)
    ) {
      showNav(navElem)
    } else {
      hideNav(navElem)
    }
    prevScrollpos = currentScrollPos
  }
}

export { hideShowNav }
