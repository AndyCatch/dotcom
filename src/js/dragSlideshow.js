// var slideChecker = setInterval('slides()', 200)

function slides() {
  // Grab all the indexItems
  let indexItems = document.querySelectorAll('div.index-items a')

  // Go through all of them, see which ones have slideshows
  indexItems.forEach((indexItem) => {
    if (indexItem.querySelectorAll('div.slideshow')[0]) {
      // the ones that do, grab some references
      let slideShow = indexItem.querySelectorAll('div.slideshow')[0]
      let images = slideShow.querySelectorAll('img')

      // Assuming that any indexItem in here * has * a slideshow, add a mouse move listener to it
      indexItem.addEventListener('mousemove', function (event) {
        // console.log(event.clientX)
        const x = event.clientX
        const width = slideShow.offsetWidth
        const percentage = x / width
        const imageNumber = Math.floor(percentage * images.length)

        images.forEach((image) => {
          // set the z back to 0, opacity to 0
          image.style.zIndex = 0
          image.style.opacity = 0
        })

        images[imageNumber].style.zIndex = 1
        images[imageNumber].style.opacity = 1
      })

      indexItem.addEventListener('mouseout', function (event) {
        images.forEach((image) => {
          image.style.opacity = 0
        })
      })
    }
  })

  // clearing the interval to stop the brute force
  clearInterval(slideChecker)
}
