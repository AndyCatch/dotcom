import { tablets, desktops } from './mediaQueries'
import { hasTouch } from './utils'

let aimX = null
let aimY = null
let currentX = null
let currentY = null
let currentImage = null
let hoverElements
let images = []
let isPaused
let requestID

function imageMove(hoverElems) {
  hoverElements = hoverElems
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

  draw()
}

function mouseOver(event) {
  currentImage = event.currentTarget.querySelector('img')
  currentImage.style.opacity = 1
}

function mouseOut(event) {
  currentImage = event.currentTarget.querySelector('img')
  currentImage.style.opacity = 0
}

function mouseMove(event) {
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null) {
    currentX = event.pageX
    currentY = event.pageY
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
  currentX = currentX + (aimX - currentX) * 0.2
  currentY = currentY + (aimY - currentY) * 0.2

  if (!isPaused) {
    if (currentImage) {
      currentImage.style.transform = `translate3d(${
        currentX - (currentImage.offsetWidth + window.innerWidth) / 2
      }px, ${
        currentY - (currentImage.offsetHeight + window.innerHeight) / 2
      }px, 0px)`
    }
  }

  requestID = window.requestAnimationFrame(draw)
}

function stopDraw() {
  window.cancelAnimationFrame(requestID)
}

function isDesktop() {
  isPaused = false
  images.forEach((image) => {
    image.style.opacity = 0
    image.style.transform = `none`
    image.style.pointerEvents = 'none'
    image.style.top = '50%'
    image.style.left = '50%'
  })

  addImageMove()
  draw()
}

function isTablet() {
  isPaused = true
  images.forEach((image) => {
    image.style.opacity = 1
    image.style.transform = `none`
    image.style.pointerEvents = 'auto'
    image.style.top = '50%'
    image.style.left = '0%'
  })

  removeImageMove()
  stopDraw()
}

function desktopHandler(event) {
  // console.log(event)
  isDesktop()
}

function tabletHandler(event) {
  // console.log('tabletHandler')
  /* Uncomment if statement for prod */
  // isTablet()
  if (hasTouch()) {
    isTablet()
  } else {
    isDesktop()
  }
}

export { imageMove }
