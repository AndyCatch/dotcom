/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/

import { updateClock } from './luxonClock'
import { indexImage } from './indexImage'
import { hideShow, inactivityTime } from './hideShowNav'
import { imageMove } from './mouseFollow'
import { setCanvas, resizeSequencer } from './sequencerMod'
import { isInViewport, customVhUnitVal } from './utils'
import { desktops } from './mediaQueries'

var clock = setInterval(updateClock, 1000)
var mobileNavChecker = setInterval(addMobileNav, 500)
var indexImageChecker = setInterval(addIndexImg, 500)
var mouseFollowChecker = setInterval(setMouseFollow, 500)
var navChecker = setInterval(addNav, 500)
var canvasChecker = setInterval(canvasSetup, 500)

let mobileNavOpen = false
let hadFilter = false
let letters

// ------ Used in currentPage.js ------ //
let currentPage
let navItemChecker

let configs = []

feather.replace()

window.addEventListener('load', (event) => {
	console.log('Window load event')
	let projectImageContainer = document.querySelector('.project-image-container')
	let showMoreBtn = document.querySelector('.semplice-cover .show-more')

	if (showMoreBtn) {
		if (!isInViewport(projectImageContainer)) {
			if (showMoreBtn.classList.contains('show-more-hide') === false) {
				showMoreBtn.classList.add('show-more-hide')
			}
		}
	}
})

// Leaving in case need to do stuff after transition is complete
window.addEventListener(
	'sempliceTransitionsDone',
	sempliceTransitionDoneHandler,
	false
)

function sempliceTransitionDoneHandler(event) {
	viewportHeight(event)

	window.removeEventListener(
		'sempliceTransitionsDone',
		sempliceTransitionDoneHandler,
		false
	)
}

desktops.forEach((desktop) => {
	desktop.addEventListener('change', isDesktopHandler)
})

window.addEventListener('resize', (event) => {
	isDesktopHandler(event)
	resizeSequencer(event)
})

function isDesktopHandler(event){
	// Leaving this here – can't remember what this was solving for!
	// Issue when switching between desktop and mobile inspector view – disable scroll remains
	let toggleTag = document.querySelector('nav.nav-toggle a.custom-nav-item')
	let mobileNavTag = document.querySelector('nav.custom-nav-touch')
	let page = document.querySelector('html')

	if (mobileNavOpen) {
		if (mobileNavTag.classList.contains('mobile-nav-open')) {
			mobileNavTag.classList.remove('mobile-nav-open')
			toggleTag.parentNode.classList.remove('toggle-width')
			page.classList.remove('disableScroll')
		}

		mobileNavOpen = !mobileNavOpen
	}
}

function canvasSetup() {
	let sequenceTag = document.getElementsByClassName(
		'sequencer-project-square'
	)[0]

	if (sequenceTag) {
		setCanvas()
		clearInterval(canvasChecker)
	} else {
		clearInterval(canvasChecker)
	}
}

function setMouseFollow() {
	if (document.querySelector('div.list')) {
		let hoverElems = Array.from(document.querySelectorAll('div.list a'))
		imageMove(hoverElems)
		clearInterval(mouseFollowChecker)
	}
}

function addIndexImg() {
	if (document.querySelector('section.work-index-section > div')) {
		let nodeList = document.querySelectorAll('div.index-items .index-item')
		indexImage(nodeList)
		clearInterval(indexImageChecker)
	}
}

function addMobileNav() {
	let toggleTag = document.querySelector('nav.nav-toggle a.custom-nav-item')
	let mobileNavTag = document.querySelector('nav.custom-nav-touch')
	let exitTag = document.querySelector('nav.custom-nav-touch div.touch-menu-bg')
	let mobileNavItems = Array.from(
		mobileNavTag.querySelectorAll('a.custom-nav-item')
	)
	let removeScrollTags = [...mobileNavItems]
	let page = document.querySelector('html')

	if (toggleTag) {
		clearInterval(mobileNavChecker)

		toggleTag.addEventListener(
			'click',
			mobileNavHandler(mobileNavTag, toggleTag, page)
		)

		exitTag.addEventListener(
			'click',
			mobileNavHandler(mobileNavTag, toggleTag, page)
		)

		removeScrollTags.forEach((navItem) => {
			navItem.addEventListener('click', function (e) {
				if (page.classList.contains('disableScroll')) {
					page.classList.remove('disableScroll')
				}
			})
		})
	}
}

// mobile NavHandler closure
function mobileNavHandler(mobileNavTag, toggleTag, page) {
	return function (event) {
		toggleTag.parentNode.classList.toggle('toggle-width')
		mobileNavTag.classList.toggle('mobile-nav-open')
		if (mobileNavTag.classList.contains('mobile-nav-open')) {
			// toggleTag.innerHTML = `Close`
			page.classList.add('disableScroll')
		} else {
			// toggleTag.innerHTML = `Menu`
			page.classList.remove('disableScroll')
		}
		event.preventDefault()

		mobileNavOpen = !mobileNavOpen
	}
}

function addNav() {
	let nav = document.getElementsByClassName('custom-nav-desktop')[0]

	let letterTag = document.querySelector('.letter')
	letters = Array.from(document.getElementsByClassName('letter'))

	if (letterTag.classList.contains('letter-filter')) {
		hadFilter = true
	} else {
		hadFilter = false
	}

	if (nav) {
		clearInterval(navChecker)
		window.addEventListener('scroll', _.throttle(scrollHandler, 300), {
			capture: false,
			passive: true,
		})

		inactivityTime(nav)
	}
}

function scrollHandler(event) {
	let nav = document.querySelector('.custom-nav-desktop')
	let footer = document.querySelector('.clock-container')
	let currentScrollPos = window.scrollY || window.pageYOffset
	let showMoreMarker = document.querySelector('.showMoreMarker')
	let showMoreBtn = document.querySelector('.semplice-cover .show-more')

	if (nav != 'undefined') {
		hideShow(nav, footer, letters, hadFilter, currentScrollPos)
	}

	if (showMoreMarker) {
		if (!isInViewport(showMoreMarker)) {
			if (showMoreBtn) {
				showMoreBtn.classList.add('show-more-hide')
			}
		} else {
			if (showMoreBtn) {
				showMoreBtn.classList.remove('show-more-hide')
			}
		}
	}

	viewportHeight(event)
}

function viewportHeight(event) {
	customVhUnitVal()
	let sempliceCover = document.querySelector('.sections .semplice-cover')
	let unit = Number(getComputedStyle(document.body).getPropertyValue('--vh'))
	let currentViewPortH = 100 * unit

	if (sempliceCover) {
		sempliceCover.style.setProperty(
			'height',
			`${currentViewPortH}px`,
			'important'
		)
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed')
	feather.replace()
})
