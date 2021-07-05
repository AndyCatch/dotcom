function indexImage(itemsNodeList) {
  let indexItems = Array.from(itemsNodeList[0].querySelectorAll('a'))
  let header = document.querySelector('h1')

  for (let i = 0; i < indexItems.length; i++) {
    let bgHover = document.createElement('div')
    bgHover.classList.add('thumbBg')
    indexItems[i].appendChild(bgHover)

    indexItems[i].addEventListener('mouseover', function (event) {
      indexItems.forEach((item) => {
        item.style.zIndex = 0 // reset all to 0
        header.classList.remove('headingHover')
      })
      bgHover.style.opacity = 1
      header.classList.add('headingHover')
      event.currentTarget.style.zIndex = 1 // bring the current to 1
    })

    indexItems[i].addEventListener('mouseout', function (event) {
      bgHover.style.opacity = 0
      header.classList.remove('headingHover')
    })

    if (indexItems[i].querySelectorAll('div.image-set')[i]) {
      // getElementsByClassName returns an HTMLCollection, NOT an Array
      let imageSets = Array.from(
        indexItems[i].getElementsByClassName('image-set')
      )

      imageSets.forEach((imageSet) => {
        let smlImageSrc = imageSet.dataset.small
        let lgImageSrc = imageSet.dataset.large // extract the data-large attribute, .dataset returns object
        let smlImage = new Image()
        let lgImage = new Image() // === document.createElement('img')

        smlImage.classList.add('small')
        smlImage.src = smlImageSrc
        lgImage.classList.add('large') // add class, src, add to imageSet
        lgImage.src = lgImageSrc
        imageSet.appendChild(smlImage)
        imageSet.appendChild(lgImage)

        // add listeners to thumbs
        smlImage.addEventListener('mouseover', function (event) {
          lgImage.style.opacity = 1
        })

        smlImage.addEventListener('mouseout', function (event) {
          lgImage.style.opacity = 0
        })
      })
    }
  }
}

export { indexImage }
