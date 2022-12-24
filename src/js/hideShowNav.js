import { isInViewport } from './utils'

let prevScrollPos = window.pageYOffset

function toggleNav(elem, action) {
	elem.classList.remove(action === 'show' ? 'hideNav' : 'showNav')
	elem.classList.add(action === 'show' ? 'showNav' : 'hideNav')
}

function inactivityTime(elem) {
	let time

	function logout() {
		toggleNav(elem, 'show')
	}

	function resetTimer() {
		clearTimeout(time)
		time = setTimeout(logout, 4000)
	}

	document.onscroll = resetTimer
}

function hideShow(navElem, footerElem, letters, hadFilter, currentScroll) {
	let currentScrollPos = currentScroll

	if (
		prevScrollPos > currentScrollPos ||
		currentScrollPos <= 0 ||
		isInViewport(footerElem)
	) {
		toggleNav(navElem, 'show')
	} else {
		toggleNav(navElem, 'hide')
	}
	prevScrollPos = currentScrollPos

	if (isInViewport(footerElem)) {
		if (hadFilter) {
			letters.forEach((letter) => {
				letter.classList.remove('letter-filter')
			})
		}
	} else {
		if (hadFilter) {
			letters.forEach((letter) => {
				letter.classList.add('letter-filter')
			})
		}
	}
}

export { hideNav, showNav, hideShow, inactivityTime }
