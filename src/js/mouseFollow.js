import { tablets, desktops } from './mediaQueries'
import { hasTouch, cancelAnimationFrame } from './utils'

let aimX = null
let aimY = null
let currentX = null
let currentY = null
let currentImage = null
let hoverElements
let images = []
let isPaused

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
  aimX = event.clientX
  aimY = event.clientY
  if (currentX === null) {
    currentX = event.clientX
    currentY = event.clientY
  }
}

function addImageMove() {
  isPaused = false

  images.forEach((image) => {
    image.classList.add('imageMoveOn')
    if (image.classList.contains('imageMoveOff')) {
      image.classList.remove('imageMoveOff')
    }
  })

  hoverElements.forEach((hoverElem) => {
    hoverElem.addEventListener('mouseover', mouseOver)
    hoverElem.addEventListener('mousemove', mouseMove)
    hoverElem.addEventListener('mouseout', mouseOut)
  })

  draw()
}

function removeImageMove() {
  isPaused = true

  cancelAnimationFrame(draw)

  hoverElements.forEach((hoverElem) => {
    hoverElem.removeEventListener('mouseover', mouseOver)
    hoverElem.removeEventListener('mousemove', mouseMove)
    hoverElem.removeEventListener('mouseout', mouseOut)
  })

  images.forEach((image) => {
    image.classList.add('imageMoveOff')
    if (image.classList.contains('imageMoveOn')) {
      image.classList.remove('imageMoveOn')
    }
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

  requestAnimationFrame(draw)
}

function isDesktop() {
  addImageMove()
}

function isTablet() {
  removeImageMove()
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

export { imageMove }
