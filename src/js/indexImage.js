import {
  desktop,
  desktopWide,
  tablet,
  tabletWide,
  mobile,
} from './mediaQueries'
import { hasTouch } from './utils'

let indexItems
let bgHover
let header
let bodyTag

// let devices = [
//   { isDesktop: desktop },
//   { isDesktopWide: desktopWide },
//   { isTablet: tablet },
//   { isTabletWide: tabletWide },
//   { isMobile: mobile },
// ]

function indexImage(itemsNodeList) {
  bodyTag = document.body
  indexItems = Array.from(itemsNodeList[0].querySelectorAll('a'))
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

  desktop.addEventListener('change', desktopHandler)
  desktopHandler(desktop)
  desktopWide.addEventListener('change', desktopHandler)
  desktopHandler(desktopWide)
  tablet.addEventListener('change', tabletHandler)
  desktopHandler(tablet)
  tabletWide.addEventListener('change', tabletHandler)
  tabletHandler(tabletWide)
  // mobile.

  // console.log(mobileCheck())
}

function addDesktopLayer() {
  for (let i = 0; i < indexItems.length; i++) {
    indexItems[i].addEventListener('mouseover', indexItemHandler)
    indexItems[i].addEventListener('mouseout', indexItemHandler)

    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      thumb.addEventListener('mouseover', desktopThumbHandler)
      thumb.addEventListener('mouseout', desktopThumbHandler)
    })
  }
}

function removeDesktopLayer() {
  for (let i = 0; i < indexItems.length; i++) {
    indexItems[i].removeEventListener('mouseover', indexItemHandler)
    indexItems[i].removeEventListener('mouseout', indexItemHandler)

    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      thumb.removeEventListener('mouseover', desktopThumbHandler)
      thumb.removeEventListener('mouseout', desktopThumbHandler)
    })
  }
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
  for (let i = 0; i < indexItems.length; i++) {
    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      thumb.addEventListener('click', tabletThumbHandler)
      thumb.addEventListener('touchStart', tabletThumbHandler)
    })
  }
}

// Non-recursive helper function
function nthParent(element, n) {
  while (n-- && element) element = element.parentNode
  return element
}

function tabletThumbHandler(event) {
  console.log('tablet thumb handler')
  let current = event.currentTarget //
  let parent = current.parentNode // need this to track the large image / caption / cover
  let superParent = nthParent(parent, 2)
  let cover = parent.getElementsByClassName('touchCover')[0]
  let lgImg = parent.getElementsByClassName('large')[0]
  let caption = parent.getElementsByClassName('caption')[0]

  bodyTag.classList.add('disableScroll')

  if (event.type === 'click' || 'touchstart') {
    console.log(event.type)
    indexItems.forEach((item) => {
      item.style.zIndex = 0 // reset all to 0
    })
    superParent.style.zIndex = 1
    superParent.classList.add('indexHover')
    for (let i = 0; i < indexItems.length; i++) {
      let thumbs = Array.from(indexItems[i].getElementsByClassName('small'))
      thumbs.forEach((thumb) => {
        thumb.style.pointerEvents = 'none'
      })
    }
    header.classList.add('headingHover')
    cover.classList.add('fullOpacity')
    lgImg.classList.add('fullOpacity')
    caption.classList.add('fullOpacity')
  }

  event.preventDefault()
}

function removeTabletLayer() {
  bodyTag.classList.remove('disableScroll')
  header.classList.remove('headingHover')
  let opacityItems = []
  for (let i = 0; i < indexItems.length; i++) {
    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      let touchCover = imageSet.getElementsByClassName('touchCover')[0]
      let large = imageSet.getElementsByClassName('large')[0]
      let caption = imageSet.getElementsByClassName('caption')[0]
      opacityItems.push(large, touchCover, caption)
      thumb.style.pointerEvents = 'auto'
      thumb.removeEventListener('click', tabletThumbHandler)
      thumb.removeEventListener('touchStart', tabletThumbHandler)
    })
  }

  opacityItems.forEach((item) => {
    if (item.classList.contains('fullOpacity')) {
      item.classList.remove('fullOpacity')
    }
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
