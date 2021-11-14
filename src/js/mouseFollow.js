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
}

function mouseOver(event) {
  let current = event.currentTarget
  let label = current.querySelector('h1')
  currentImage = event.currentTarget.querySelector('img')
  hoverElements.forEach((hoverElem) => {
    hoverElem.style.zIndex = 0
  })
  current.style.zIndex = 1
  currentImage.style.opacity = 1
  currentImage.style.zIndex = -1
  label.style.transform = 'translate(var(--four-units, 0px))'
}

function mouseOut(event) {
  currentImage = event.currentTarget.querySelector('img')
  hoverElements.forEach((hoverElem) => {
    hoverElem.querySelector('h1').style.transform = 'translate(0px, 0px)'
  })
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

  if (!isPaused) {
    if (currentImage) {
      currentImage.style.transform = `translate3d(${
        currentX - currentImage.offsetWidth / 2 - viewportWidth / 2
      }px, ${
        currentY - (currentImage.offsetHeight / 2 - viewportHeight / 2)
      }px, 0px)`
    }
  }

  // Just in case
  // (currentImage.offsetHeight / 2 - window.innerHeight / 2) -
  // currentImage.offsetHeight * 0.75}px, 0px)

  currentX = currentX + (aimX - currentX) * 0.2
  currentY = currentY + (aimY - currentY) * 0.2

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
