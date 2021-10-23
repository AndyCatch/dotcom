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

const params = {
  pageOffset: 0.75,
}

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
  // draw()
}

function mouseOver(event) {
  // look into z-Indexes effecting the "switch off"
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
  // currentImage.style.zIndex = 0
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
  if (!isPaused) {
    if (currentImage) {
      currentImage.style.transform = `translate3d(${
        currentX - currentImage.offsetWidth / 2 - window.innerWidth / 2
      }px, ${
        currentY -
        (currentImage.offsetHeight / 2 - window.innerHeight / 2) +
        currentImage.offsetHeight * 0.75 * -1
      }px, 0px)`
    }
  }

  /*+
        window.pageYOffset -
        currentImage.offsetHeight * 0.25  * params.pageOffset*/
  // if (!isPaused) {
  //   if (currentImage) {
  //     currentImage.style.transform = `translate3d(${
  //       currentX - currentImage.offsetWidth / 2 - window.innerWidth / 2
  //     }px, ${
  //       currentY -
  //       (currentImage.offsetHeight + window.innerHeight) / 2 +
  //       window.pageYOffset /*-
  //       currentImage.offsetHeight * 0.25  * params.pageOffset*/
  //     }px, 0px)`
  //   }
  // }

  currentX = currentX + (aimX - currentX) * 0.2
  currentY = currentY + (aimY - currentY) * 0.2

  requestID = window.requestAnimationFrame(draw)
}

function stopDraw() {
  window.cancelAnimationFrame(requestID)
}

function isDesktop() {
  isPaused = false
  images.forEach((image) => {
    image.style.setProperty('position', 'fixed', '!important')
    image.style.opacity = 0
    image.style.transform = `none`
    image.style.pointerEvents = 'none'
    image.style.top = '0%'

    /* - - - - Semplice Setting - - - */
    // image.style.top = '-25%'

    /* - - - - Proto Setting - - - */
    // image.style.top = '50%'
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
