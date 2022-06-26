import { tablets, desktops } from './mediaQueries'
import { hasTouch, nthParent } from './utils'

let indexItems
let header
let bodyTag
let navBar
let close

let thumbs
let itemLabels
let captions
let largeImages
let touchCovers
let opacityItems

function indexImage(itemsNodeList) {
	indexItems = Array.from(itemsNodeList)
	bodyTag = document.body
	close = document.querySelectorAll('.close')[0]
	header = document.querySelector('h1')

	renderElems(indexItems)
}

function renderElems(indexItems) {
	for (let i = 0; i < indexItems.length; i++) {
		let imageSets = Array.from(
			indexItems[i].getElementsByClassName('image-set')
		)

		let numImagesLabel = indexItems[i].getElementsByClassName('numImages')[0]
		if (numImagesLabel) {
			numImagesLabel.innerHTML = imageSets.length
		}
		imageSets.forEach((imageSet) => {
			let touchCover = document.createElement('div')

			let smlImage = new Image()
			smlImage.src = imageSet.dataset.small
			let lgImage = new Image()
			lgImage.src = imageSet.dataset.large

			let smlDiv = document.createElement('div')
			let lgDiv = document.createElement('div')

			let caption = document.createElement('p')
			let childItems = [lgDiv, caption, touchCover, smlDiv] // lgImage, smlImage,
			if (imageSet.dataset.caption) {
				caption.innerHTML = imageSet.dataset.caption
			}

			touchCover.classList.add('touchCover')
			smlDiv.classList.add('small')
			smlDiv.style.backgroundImage = `url(${smlImage.src})`
			// smlImage.classList.add('small')
			// lgImage.classList.add('large')
			lgDiv.classList.add('large')
			lgDiv.style.backgroundImage = `url(${lgImage.src})`
			caption.classList.add('caption')

			imageSet.replaceChildren() // think this clears this element

			childItems.forEach((childItem) => {
				imageSet.appendChild(childItem)
			})
		})
	}

	setUpElementArrays()

	desktops.forEach((desktop) => {
		desktop.addEventListener('change', desktopHandler)
		desktopHandler(desktop)
	})

	tablets.forEach((tablet) => {
		tablet.addEventListener('change', tabletHandler)
		tabletHandler(tablet)
	})

	close.addEventListener('click', function (event) {
		closeLightBox()
	})
}

function setUpElementArrays() {
	thumbs = Array.from(document.querySelectorAll('.small'))
	largeImages = Array.from(document.querySelectorAll('.large'))
	touchCovers = Array.from(document.querySelectorAll('.touchCover'))
	itemLabels = Array.from(document.querySelectorAll('.index-item-info'))
	captions = Array.from(document.querySelectorAll('.caption'))

	opacityItems = [largeImages, touchCovers, captions]
}

function addDesktopLayer() {
	indexItems.forEach((indexItem) => {
		indexItem.addEventListener('mouseover', indexItemHandler)
		indexItem.addEventListener('mouseout', indexItemHandler)
	})

	thumbs.forEach((thumb) => {
		thumb.addEventListener('mouseover', desktopThumbHandler)
		thumb.addEventListener('mouseout', desktopThumbHandler)
	})
}

function removeDesktopLayer() {
	indexItems.forEach((indexItem) => {
		indexItem.removeEventListener('mouseover', indexItemHandler)
		indexItem.removeEventListener('mouseout', indexItemHandler)
	})

	thumbs.forEach((thumb) => {
		thumb.removeEventListener('mouseover', desktopThumbHandler)
		thumb.removeEventListener('mouseout', desktopThumbHandler)
	})
}

function indexItemHandler(event) {
	let current = event.currentTarget
	let currentInfo = current.querySelector('.index-item-info')
	let bg = current.querySelector('.thumbBg')
	let currentImgs = current.querySelector('.image-set-wrapper')

	if (event.type === 'mouseover') {
		indexItems.forEach((item) => {
			item.style.zIndex = 1 // reset all
			let imgs = item.querySelector('.image-set-wrapper')
			if (imgs) {
				imgs.classList.add('zeroOpacity')
				imgs.classList.remove('fullOpacity')
			}
		})

		current.style.zIndex = 2 // bring the current highest up
		currentInfo.style.zIndex = 5

		if (currentImgs) {
			currentImgs.classList.remove('zeroOpacity')
			currentImgs.classList.add('fullOpacity')
		}

		bg.classList.add('fullOpacity')
	} else if (event.type === 'mouseout') {
		current.style.setProperty('color', 'var(--white)')
		bg.classList.remove('fullOpacity')

		indexItems.forEach((item) => {
			item.style.zIndex = 1 // reset all
			let imgs = item.querySelector('.image-set-wrapper')
			if (imgs) {
				imgs.classList.add('fullOpacity')
				imgs.classList.remove('zeroOpacity')
			}
		})
	}
}

function desktopThumbHandler(event) {
	let current = event.currentTarget
	let parent = current.parentNode
	let setThumbs = Array.from(nthParent(parent, 2).querySelectorAll('.small'))

	let lgImg = parent.querySelector('.large')
	let caption = parent.querySelector('.caption')

	if (event.type === 'mouseover') {
		setThumbs.forEach((setThumb) => {
			setThumb.style.opacity = 0.25
		})
		current.style.opacity = 1
		lgImg.classList.add('fullOpacity')
		caption.classList.add('fullOpacity')
		caption.style.display = 'block'
	} else if (event.type === 'mouseout') {
		setThumbs.forEach((setThumb) => {
			setThumb.style.opacity = 1
		})
		lgImg.classList.remove('fullOpacity')
		caption.classList.remove('fullOpacity')
	}
}

function addTabletLayer() {
	thumbs.forEach((thumb) => {
		thumb.addEventListener('click', tabletThumbHandler)
		thumb.addEventListener('touchStart', tabletThumbHandler)
	})
}

function tabletThumbHandler(event) {
	let current = event.currentTarget //
	let parent = current.parentNode // need this to track the large image / caption / cover
	let superParent = nthParent(parent, 2)
	let cover = parent.querySelector('.touchCover')
	let lgImg = parent.querySelector('.large')
	let caption = parent.querySelector('.caption')

	let currentParts = [cover, lgImg, caption]
	let itemLabel = superParent.querySelector('.index-item-info')

	document.querySelector('html').classList.add('disableScroll')

	close.classList.add('showClose')

	if (event.type === 'click' || 'touchstart') {
		indexItems.forEach((item) => {
			item.style.zIndex = 1 // reset all
		})

		captions.forEach((caption) => {
			caption.style.display = 'none'
		})
		caption.style.display = 'block'

		superParent.style.zIndex = 2

		itemLabel.classList.add('zeroOpacity')
		thumbs.forEach((thumb) => {
			thumb.style.pointerEvents = 'none'
			thumb.style.visibility = 'hidden'
		})

		currentParts.forEach((part) => {
			part.classList.add('fullOpacity')
		})
	}

	event.preventDefault()
}

function removeTabletLayer() {
	closeLightBox()
	removeThumbHandlers()
}

function closeLightBox() {
	document.querySelector('html').classList.remove('disableScroll')
	close.classList.remove('showClose')

	// opacityItems is an Array of arrays
	for (let i = 0; i < opacityItems.length; i++) {
		opacityItems[i].forEach((item) => {
			if (item.classList.contains('fullOpacity')) {
				item.classList.remove('fullOpacity')
			}
		})
	}

	captions.forEach((caption) => {
		caption.style.display = 'none'
	})

	itemLabels.forEach((itemLabel) => {
		if (itemLabel.classList.contains('zeroOpacity')) {
			itemLabel.classList.remove('zeroOpacity')
		}
	})

	thumbs.forEach((thumb) => {
		thumb.style.pointerEvents = 'auto'
		thumb.style.visibility = 'visible'
	})
}

function removeThumbHandlers() {
	thumbs.forEach((thumb) => {
		thumb.removeEventListener('click', tabletThumbHandler)
		thumb.removeEventListener('touchStart', tabletThumbHandler)
	})
}

function isDesktop() {
	//removeMobileLayer()
	removeTabletLayer()
	addDesktopLayer()
}

function isTablet() {
	//removeMobileLayer()
	removeDesktopLayer()
	addTabletLayer()
}

function isMobile() {
	removeDesktopLayer()
	removeTabletLayer()
	// addMobileLayer()
}

function desktopHandler(event) {
	isDesktop()
}

function tabletHandler(event) {
	if (hasTouch()) {
		isTablet()
	} else {
		isDesktop()
	}
}

function mobileHandler(event) {
	isMobile()
}

export { indexImage }
