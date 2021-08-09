import { tablets, desktops } from './mediaQueries'
import { hasTouch } from './utils'
import { showNav } from './hideShowNav'

let indexItems
let bgHover
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
  indexItems = Array.from(itemsNodeList[0].querySelectorAll('a'))
  bodyTag = document.body
  close = document.querySelectorAll('.close')[0]
  navBar = document.querySelectorAll('div.navbar-inner')[0]
  bgHover = document.getElementsByClassName('thumbBg')[0]
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
      let smlImage = new Image() // === document.createElement('img')
      let lgImage = new Image()
      let caption = document.createElement('p')
      let childItems = [lgImage, caption, touchCover, smlImage]
      if (imageSet.dataset.caption) {
        caption.innerHTML = imageSet.dataset.caption
      }

      smlImage.src = imageSet.dataset.small
      lgImage.src = imageSet.dataset.large
      touchCover.classList.add('touchCover')
      smlImage.classList.add('small')
      lgImage.classList.add('large')
      caption.classList.add('caption')

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
  itemLabels = Array.from(document.querySelectorAll('.index-item-wrapper'))
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
    thumb.addEventListener('mouseover', desktopThumbHandler)
    thumb.addEventListener('mouseout', desktopThumbHandler)
  })
}

function indexItemHandler(event) {
  let current = event.currentTarget
  if (event.type === 'mouseover') {
    indexItems.forEach((item) => {
      item.style.zIndex = 0 // reset all to 0
    })
    current.style.zIndex = 1 // bring the current to 1
    current.classList.add('indexHover')
    header.classList.add('headingHover')
    bgHover.classList.add('fullOpacity')
  } else if (event.type === 'mouseout') {
    current.classList.remove('indexHover')
    header.classList.remove('headingHover')
    bgHover.classList.remove('fullOpacity')
  }
}

function desktopThumbHandler(event) {
  let current = event.currentTarget
  let parent = current.parentNode
  let imageSetWrapper = Array.from(
    parent.parentNode.getElementsByClassName('image-set')
  )

  let lgImg = parent.getElementsByClassName('large')[0]
  let caption = parent.getElementsByClassName('caption')[0]

  if (event.type === 'mouseover') {
    imageSetWrapper.forEach((imageSet) => {
      imageSet.getElementsByClassName('small')[0].style.opacity = 0.25
    })
    current.style.opacity = 1
    lgImg.classList.add('fullOpacity')
    caption.classList.add('fullOpacity')
  } else {
    imageSetWrapper.forEach((imageSet) => {
      imageSet.getElementsByClassName('small')[0].style.opacity = 1
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

// Non-recursive helper function
function nthParent(element, n) {
  while (n-- && element) element = element.parentNode
  return element
}

function tabletThumbHandler(event) {
  let current = event.currentTarget //
  let parent = current.parentNode // need this to track the large image / caption / cover
  let superParent = nthParent(parent, 2)
  let cover = parent.getElementsByClassName('touchCover')[0]
  let lgImg = parent.getElementsByClassName('large')[0]
  let caption = parent.getElementsByClassName('caption')[0]
  let itemLabel = superParent.querySelector('.index-item-wrapper')

  bodyTag.classList.add('disableScroll')
  close.classList.add('showClose')

  if (event.type === 'click' || 'touchstart') {
    showNav(navBar)
    indexItems.forEach((item) => {
      item.style.zIndex = 0 // reset all to 0
    })
    superParent.style.zIndex = 1
    itemLabel.classList.add('zeroOpacity')
    thumbs.forEach((thumb) => {
      thumb.style.pointerEvents = 'none'
    })
    cover.classList.add('fullOpacity')
    lgImg.classList.add('fullOpacity')
    caption.classList.add('fullOpacity')
  }

  event.preventDefault()
}

function removeTabletLayer() {
  closeLightBox()
  removeThumbHandlers()
}

function closeLightBox() {
  bodyTag.classList.remove('disableScroll')
  close.classList.remove('showClose')

  for (let i = 0; i < opacityItems.length; i++) {
    opacityItems[i].forEach((item) => {
      if (item.classList.contains('fullOpacity')) {
        item.classList.remove('fullOpacity')
      }
    })
  }

  itemLabels.forEach((itemLabel) => {
    if (itemLabel.classList.contains('zeroOpacity')) {
      itemLabel.classList.remove('zeroOpacity')
    }
  })

  thumbs.forEach((thumb) => {
    thumb.style.pointerEvents = 'auto'
  })
}

function removeThumbHandlers() {
  thumbs.forEach((thumb) => {
    thumb.removeEventListener('click', tabletThumbHandler)
    thumb.removeEventListener('touchStart', tabletThumbHandler)
  })
}

function isDesktop() {
  removeTabletLayer()
  addDesktopLayer()
}

function isTablet() {
  removeDesktopLayer()
  addTabletLayer()
}

function isMobile() {
  console.log('isMobile func')
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

export { indexImage }
