let aimX = null
let aimY = null
let currentX = null
let currentY = null

let currentImage = null

function imageMove(hoverElems) {
  for (let i = 0; i < hoverElems.length; i++) {
    hoverElems[i].addEventListener('mouseover', function (event) {
      currentImage = event.currentTarget.querySelector('img')
      currentImage.style.opacity = 1
    })

    hoverElems[i].addEventListener('mousemove', function (event) {
      aimX = event.clientX
      aimY = event.clientY

      if (currentX === null) {
        currentX = event.clientX
        currentY = event.clientY
      }
    })

    hoverElems[i].addEventListener('mouseout', function (event) {
      currentImage.style.opacity = 0
    })
  }
}

function draw() {
  currentX = currentX + (aimX - currentX) * 0.2
  currentY = currentY + (aimY - currentY) * 0.2

  if (currentImage) {
    currentImage.style.transform = `translate3d(${
      currentX - (window.innerWidth + currentImage.offsetWidth) / 2
    }px, ${
      currentY - (window.innerHeight + currentImage.offsetHeight) / 2
    }px, 0px)`
  }

  requestAnimationFrame(draw)
}

draw()

export { imageMove }
