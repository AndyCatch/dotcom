/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/
let menuClick = false

import { updateClock } from './luxonClock'
import { indexImage } from './indexImage'
import { hideShow } from './hideShowNav'
import { imageMove } from './mouseFollow'

var clock = setInterval(updateClock, 1000)
var navChecker = setInterval(addNav, 500)
var mobileNavChecker = setInterval(addMobileNav, 500)
var navItemChecker = setInterval(addPreventScroll, 500)
var indexImageChecker = setInterval(addIndexImg, 500)
var hamburgerChecker = setInterval(setUpHamburger, 1000)
var mouseFollowChecker = setInterval(setMouseFollow, 500)

function init() {
	// luxon library <script> tag
	let luxonTag = document.createElement('script')
	luxonTag.src = 'https://moment.github.io/luxon/global/luxon.min.js'
	document.body.appendChild(luxonTag)
}

window.addEventListener(
	'sempliceTransitionInDone',
	function (e) {
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

function navItemHandler(e) {
	document.querySelector('html').classList.remove('disableScroll')
}

function addPreventScroll() {
	let menuItems = Array.from(document.querySelectorAll('.nav-item'))
	let logo = document.getElementsByClassName('logo')[0]

	if (logo) {
		menuItems.push(logo)
	}

	if (menuItems) {
		menuItems.forEach((menuItem) => {
			menuItem.addEventListener('click', navItemHandler)
		})

		clearInterval(navItemChecker)
	}
}

function addMobileNav() {
	let toggleTag = document.querySelector('nav.nav-toggle a.custom-nav-item')
	let mobileNavTag = document.querySelector('nav.custom-nav-touch')

	if (toggleTag) {
		clearInterval(mobileNavChecker)

		toggleTag.addEventListener('click', function (event) {
			mobileNavTag.classList.toggle('mobile-nav-open')
			if (mobileNavTag.classList.contains('mobile-nav-open')) {
				toggleTag.innerHTML = `Close`
			} else {
				toggleTag.innerHTML = `Menu`
			}
			event.preventDefault()
		})
	}
}

function addNav() {
	let nav = document.getElementsByClassName('custom-nav-desktop')[0]

	if (nav) {
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
		clearInterval(hamburgerChecker)
	} else {
		// Times out Checker
		// console.log('No Hamburger menu')
		setTimeout(function () {
			clearInterval(hamburgerChecker)
		}, 10000)
	}
}

function menuToggle() {
	// toggles boolean between true and false
	menuClick = !menuClick

	if (menuClick) {
		// menu is open
		// Prevent scroll
		document.querySelector('html').classList.add('disableScroll')
	} else {
		// menu is closed
		// Re-enable scroll
		document.querySelector('html').classList.remove('disableScroll')
	}
}

function navHandler(event) {
	let nav = document.querySelector('.custom-nav-desktop')
	let footer = document.querySelector('.clock-container')
	let currentScrollPos = window.pageYOffset

	if (nav != 'undefined') {
		hideShow(nav, footer, currentScrollPos)
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed')

	init()
})
