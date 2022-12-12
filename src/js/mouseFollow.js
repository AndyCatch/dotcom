import { tablets, desktops } from './mediaQueries'
import { hasTouch, calculateDistance } from './utils'

let aimX = null
let aimY = null
let currentX = null
let currentY = null
let currentImage = null

let cursorAimX = 0
let cursorAimY = 0
let currCursorX = 0
let currCursorY = 0

let cursorTag

let hoverElements
let images = []
let isPaused
let requestID

const imageMarker = 4
const propertyValue = 256

function imageMove(hoverElems) {
	hoverElements = hoverElems
	const style = getComputedStyle(document.body)
	hoverElements.forEach((hoverElem) => {
		images.push(hoverElem.querySelector('img'))
	})

	desktops.forEach((desktop) => {
		desktop.addEventListener('change', desktopHandler)
		desktopHandler(desktop)
	})

	tablets.forEach((tablet) => {
		tablet.addEventListener('change', tabletHandler)
		tabletHandler(tablet)
	})

	cursorTag = document.querySelector('div.cursor div')

	document.addEventListener('mousemove', function (event) {
		cursorAimX = event.pageX
		cursorAimY = event.pageY
	})

	headerMargin()
}

function headerMargin() {
	for (let i = 0; i < hoverElements.length; i++) {
		if (i % 4 !== 0) {
			hoverElements[i].style.marginLeft = i * propertyValue + 'px'
		} else {
			hoverElements[i].style.marginLeft = '0px'
		}
	}
}

function mouseOver(event) {
	let current = event.currentTarget
	let label = current.querySelector('h1')
	currentImage = event.currentTarget.querySelector('img')
	hoverElements.forEach((hoverElem) => {
		hoverElem.style.zIndex = 0
	})
	cursorTag.style.opacity = 1
	cursorTag.style.visibility = 'visible'
	current.style.zIndex = 1
	currentImage.classList.add('showingImage')
	label.style.transform = 'translate(var(--four-units, 0px))'
}

function mouseOut(event) {
	currentImage = event.currentTarget.querySelector('img')
	hoverElements.forEach((hoverElem) => {
		hoverElem.querySelector('h1').style.transform = 'translate(0px, 0px)'
	})
	currentImage.classList.remove('showingImage')
	cursorTag.style.opacity = 0
	cursorTag.style.left = '0' + 'px'
}

function mouseMove(event) {
	aimX = event.clientX
	aimY = event.clientY
	if (currentX === null) {
		currentX = event.clientX
		currentY = event.clientY
	}
}

function addImageMove() {
	hoverElements.forEach((hoverElem) => {
		hoverElem.addEventListener('mouseover', mouseOver)
		hoverElem.addEventListener('mousemove', mouseMove)
		hoverElem.addEventListener('mouseout', mouseOut)
	})
}

function removeImageMove() {
	hoverElements.forEach((hoverElem) => {
		hoverElem.removeEventListener('mouseover', mouseOver)
		hoverElem.removeEventListener('mousemove', mouseMove)
		hoverElem.removeEventListener('mouseout', mouseOut)
	})
}

function draw() {
	let viewportWidth = window.innerWidth || document.documentElement.clientWidth
	let viewportHeight =
		window.innerHeight || document.documentElement.clientHeight

	let p1 = { x: 0, y: cursorAimY }
	let p2 = { x: cursorAimX, y: cursorAimY }

	currCursorX += (cursorAimX - currCursorX) * 0.02
	currCursorY += (cursorAimY - currCursorY) * 0.02

	if (cursorTag && currentImage) {
		cursorTag.style.left = currCursorX + 'px'
		cursorTag.style.top = currCursorY + 'px'
	}

	if (!isPaused) {
		if (currentImage) {
			currentImage.style.transform = `translate3d(${
				currentX - currentImage.offsetWidth / 3 - viewportWidth / 2
			}px, ${
				currentY - (currentImage.offsetHeight / 2 - viewportHeight / 2)
			}px, 0px)`
		}
	}

	// Just in case
	// (currentImage.offsetHeight / 2 - window.innerHeight / 2) -
	// currentImage.offsetHeight * 0.75}px, 0px)

	currentX = currentX + (aimX - currentX) * 0.03
	currentY = currentY + (aimY - currentY) * 0.03

	requestID = window.requestAnimationFrame(draw)
}

function stopDraw() {
	window.cancelAnimationFrame(requestID)
}

function isDesktop() {
	// CSS sets img to be position:fixed
	isPaused = false
	images.forEach((image) => {
		image.style.opacity = 0
		image.style.transform = `translate3d(0px, 0px, 0px)`
		image.style.pointerEvents = 'none'

		/* - - - - Keeping these here just in case - - - */
		/* - - - - Semplice Setting - - - */
		// image.style.top = '-25%'
		/* - - - - Proto Setting - - - */
		// image.style.top = '50%'
	})

	// headerMargin()
	addImageMove()
	draw()
}

function isTablet() {
	removeImageMove()
	stopDraw()

	// CSS sets img to be position:relative
	isPaused = true
	images.forEach((image) => {
		image.style.opacity = 1
		image.style.transform = `translate3d(0px, 0px, 0px)`
		image.style.pointerEvents = 'auto'
	})
}

function desktopHandler(event) {
	isDesktop()
}

function tabletHandler(event) {
	/* Uncomment if statement for prod */
	// isTablet()
	if (hasTouch()) {
		isTablet()
	} else {
		isDesktop()
	}
}

export { imageMove }
