import { isInViewport } from './utils'

let prevScrollPos = window.scrollY

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
		time = setTimeout(logout, 3000)
	}

	document.onscroll = resetTimer
}

function hideShow(navElem, footerElem, letters, hadFilter, currentScroll) {
	let currentScrollPos = currentScroll
	// Measure once, before toggleNav changes classes (a second read after would force a re-layout)
	let footerVisible = isInViewport(footerElem)

	if (
		prevScrollPos > currentScrollPos ||
		currentScrollPos <= 0 ||
		footerVisible
	) {
		toggleNav(navElem, 'show')
	} else {
		toggleNav(navElem, 'hide')
	}
	prevScrollPos = currentScrollPos

	if (footerVisible) {
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

export { hideShow, inactivityTime }
