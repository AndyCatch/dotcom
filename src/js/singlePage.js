/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/

import { updateClock } from './luxonClock'
import { indexImage } from './indexImage'
import { hideShow, inactivityTime } from './hideShowNav'
import { imageMove } from './mouseFollow'
import { setCanvas, resizeSequencer } from './sequencerMod'
import { customVhUnitVal } from './utils'

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
})

window.addEventListener('resize', (event) => {
	let toggleTag = document.querySelector('nav.nav-toggle a.custom-nav-item')
	let mobileNavTag = document.querySelector('nav.custom-nav-touch')
	let page = document.querySelector('html')

	if (mobileNavOpen) {
		if (mobileNavTag.classList.contains('mobile-nav-open')) {
			mobileNavTag.classList.remove('mobile-nav-open')
			toggleTag.innerHTML = `Menu`
			toggleTag.parentNode.classList.remove('toggle-width')
			page.classList.remove('disableScroll')
		}

		mobileNavOpen = !mobileNavOpen
	}

	resizeSequencer(event)
})

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
		window.addEventListener('scroll', _.throttle(navHandler,300), {
			capture: false,
			passive: true,
		})

		inactivityTime(nav)
	}
}

function navHandler(event) {
	let nav = document.querySelector('.custom-nav-desktop')
	let footer = document.querySelector('.clock-container')
	let currentScrollPos = window.pageYOffset

	if (nav != 'undefined') {
		hideShow(nav, footer, letters, hadFilter, currentScrollPos)
	}

	viewportHeight(event)
}

// Fix for the .see-more button + mobile browsers
function viewportHeight(event){
	customVhUnitVal()

	let sempliceCover = document.querySelector(".sections .semplice-cover")
	let unit = getComputedStyle(document.body).getPropertyValue('--vh');
	unit = Number(unit)
	
	let currentViewPortH = 100 * unit

	if(sempliceCover){
		sempliceCover.style.setProperty("height", `${currentViewPortH}px`, "important");
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed')
	feather.replace()
})
