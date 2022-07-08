import { isInViewport } from './utils'

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
	let currentScrollPos = currentScroll

	if (
		prevScrollPos > currentScrollPos ||
		currentScrollPos <= 0 ||
		isInViewport(footerElem)
	) {
		showNav(navElem)
	} else {
		hideNav(navElem)
	}
	prevScrollPos = currentScrollPos
}

export { hideNav, showNav, hideShow }
