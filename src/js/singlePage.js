/*–––––––––––––––This lives in Semplice –> Advanced -> Javascript ––––––––––––––––––*/

import { updateClock } from './luxonClock'
import { indexImage } from './indexImage'
import { hideShow } from './hideShowNav'
import { imageMove } from './mouseFollow'

var clock = setInterval(updateClock, 1000)
var navChecker = setInterval(addNav, 500)
var mobileNavChecker = setInterval(addMobileNav, 500)
var indexImageChecker = setInterval(addIndexImg, 500)
var mouseFollowChecker = setInterval(setMouseFollow, 500)

let mobileNavOpen = false

function init() {
	// luxon library <script> tag
	let luxonTag = document.createElement('script')
	luxonTag.src = 'https://moment.github.io/luxon/global/luxon.min.js'
	document.body.appendChild(luxonTag)
}

window.addEventListener('load', (event) => {
	console.log('Window load event')
})

window.addEventListener('resize', (event) => {
	// console.log('Window resized')
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

function addMobileNav() {
	let toggleTag = document.querySelector('nav.nav-toggle a.custom-nav-item')
	let homeTag = document.querySelector('nav.nav-toggle a.custom-home')
	let mobileNavTag = document.querySelector('nav.custom-nav-touch')
	let mobileNavItems = Array.from(
		mobileNavTag.querySelectorAll('a.custom-nav-item')
	)
	let removeScrollTags = [...mobileNavItems, homeTag]
	let page = document.querySelector('html')

	if (toggleTag) {
		clearInterval(mobileNavChecker)

		toggleTag.addEventListener(
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

function mobileNavHandler(mobileNavTag, toggleTag, page) {
	return function (event) {
		toggleTag.parentNode.classList.toggle('toggle-width')
		mobileNavTag.classList.toggle('mobile-nav-open')
		if (mobileNavTag.classList.contains('mobile-nav-open')) {
			toggleTag.innerHTML = `Close`
			page.classList.add('disableScroll')
		} else {
			toggleTag.innerHTML = `Menu`
			page.classList.remove('disableScroll')
		}
		event.preventDefault()

		mobileNavOpen = !mobileNavOpen
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
