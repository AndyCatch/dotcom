import { isInViewport } from './utils'

let prevScrollPos = window.pageYOffset
let navHidden = false
let pause = 4000

function showNav(elem) {
	elem.classList.remove('hideNav')
	elem.classList.add('showNav')
}

function hideNav(elem) {
	elem.classList.remove('showNav')
	elem.classList.add('hideNav')
}

// function pauseCheck(navElem) {
// 	if (navHidden) {
// 		setTimeout(() => {
// 			showNav(navElem)
// 			navHidden = false
// 		}, pause)
// 	}
// }

function hideShow(navElem, footerElem, currentScroll) {
	let currentScrollPos = currentScroll

	if (
		prevScrollPos > currentScrollPos ||
		currentScrollPos <= 0 ||
		isInViewport(footerElem)
	) {
		// navHidden = false
		showNav(navElem)
	} else {
		// navHidden = true
		hideNav(navElem)
	}
	prevScrollPos = currentScrollPos
}

export { hideNav, showNav, hideShow }
