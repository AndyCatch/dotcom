function indexImage(itemsNodeList) {
  let indexItems = Array.from(itemsNodeList)

  for (let i = 0; i < indexItems.length; i++) {
    // add mouseover event to set all items to change z-index
    indexItems[i].addEventListener('mouseover', function (event) {
      indexItems.forEach((item) => {
        item.style.zIndex = 0 // reset all to 0
        event.currentTarget.style.zIndex = 1 // bring the current to 1
      })
    })

    if (indexItems[i].querySelectorAll('div.image-set')[i]) {
      // getElementsByClassName returns an HTMLCollection, NOT an Array
      let imageSets = Array.from(
        indexItems[i].getElementsByClassName('image-set')
      )

      imageSets.forEach((imageSet) => {
        let thumb = imageSet.getElementsByClassName('small')[0] // in imageSets, find the small thumb
        let lgImageSrc = thumb.dataset.large // extract the data-large attribute, .dataset returns object
        let lgImage = new Image() // === document.createElement('img')
        lgImage.classList.add('large') // add class, src, add to imageSet
        lgImage.src = lgImageSrc
        imageSet.appendChild(lgImage)

        // add listeners to thumbs
        thumb.addEventListener('mouseover', function (event) {
          lgImage.style.opacity = 1
        })

        thumb.addEventListener('mouseout', function (event) {
          lgImage.style.opacity = 0
        })
      })
    }
  }
}

export { indexImage }
