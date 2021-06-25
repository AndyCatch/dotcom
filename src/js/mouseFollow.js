let aimX = null
let aimY = null
let currentX = null
let currentY = null

function imageMove(hoverElems, hoverImages) {
  for (let i = 0; i < hoverElems.length; i++) {
    hoverElems[i].addEventListener('mouseover', function (event) {
      hoverImages.forEach((image) => {
        image.style.opacity = 1
      })
    })

    hoverElems[i].addEventListener('mousemove', function (event) {
      aimX = event.clientX
      aimY = event.clientY

      if (currentX === null) {
        currentX = event.clientX
        currentY = event.clientY
      }

      hoverImages.forEach((image) => {
        image.style.transform = `translate(${
          currentX - (window.innerWidth + image.offsetWidth) / 2
        }px, ${currentY - (window.innerHeight + image.offsetHeight) / 2}px)`
      })
    })

    hoverElems[i].addEventListener('mouseout', function (event) {
      hoverImages.forEach((image) => {
        image.style.opacity = 0
      })
    })
  }
  draw(hoverImages)
}

function draw(hoverImages) {
  currentX = currentX + (aimX - currentX) * 0.05
  currentY = currentY + (aimY - currentY) * 0.05

  requestAnimationFrame(draw)
}

export { imageMove }
