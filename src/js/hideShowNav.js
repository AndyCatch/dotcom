import { isInViewport } from './utils'

let prevScrollPos = window.pageYOffset
// let hadFilter = false

function showNav(elem) {
	elem.classList.remove('hideNav')
	elem.classList.add('showNav')
}

function hideNav(elem) {
	elem.classList.remove('showNav')
	elem.classList.add('hideNav')
}

let inactivityTime = function (elem) {
	let time
	// List of user events that count as activity
	document.onscroll = resetTimer
	// window.onload = resetTimer
	// document.onmousemove = resetTimer
	// document.onkeypress = resetTimer;

	function logout() {
		// console.log('Showing nav')
		showNav(elem)
	}

	function resetTimer() {
		clearTimeout(time)
		time = setTimeout(logout, 4000)
	}
}

function hideShow(navElem, footerElem, letters, hadFilter, currentScroll) {
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
