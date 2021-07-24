function indexImage(itemsNodeList) {
  let indexItems = Array.from(itemsNodeList[0].querySelectorAll('a'))
  let header = document.querySelector('h1')

  for (let i = 0; i < indexItems.length; i++) {
    let bgHover = document.createElement('div')
    bgHover.classList.add('thumbBg')

    indexItems[i].appendChild(bgHover)

    indexItems[i].addEventListener('mouseover', function (event) {
      let current = event.currentTarget
      indexItems.forEach((item) => {
        item.style.zIndex = 0 // reset all to 0
      })

      bgHover.style.opacity = 1
      header.classList.add('headingHover')
      current.getElementsByClassName('numImages')[0].style.color =
        'var(--black)'
      current.style.zIndex = 1 // bring the current to 1
    })

    indexItems[i].addEventListener('mouseout', function (event) {
      let current = event.currentTarget
      bgHover.style.opacity = 0
      header.classList.remove('headingHover')
      current.getElementsByClassName('numImages')[0].style.color =
        'var(--white)'
    })

    if (indexItems[i].querySelectorAll('div.image-set')[i]) {
      // getElementsByClassName returns an HTMLCollection, NOT an Array
      let imageSets = Array.from(
        indexItems[i].getElementsByClassName('image-set')
      )

      let numImagesLabel = indexItems[i].getElementsByClassName('numImages')[0]
      numImagesLabel.innerHTML = imageSets.length

      imageSets.forEach((imageSet) => {
        let smlImage = new Image()
        let lgImage = new Image() // === document.createElement('img')
        let caption = document.createElement('p')
        let childItems = [smlImage, lgImage, caption]

        if (imageSet.dataset.caption) {
          caption.innerHTML = imageSet.dataset.caption
        }
        smlImage.src = imageSet.dataset.small
        lgImage.src = imageSet.dataset.large

        caption.classList.add('caption')
        smlImage.classList.add('small')
        lgImage.classList.add('large')

        childItems.forEach((childItem) => {
          imageSet.appendChild(childItem)
        })

        // add listeners to thumbs
        smlImage.addEventListener('mouseover', function (event) {
          imageSets.forEach((item) => {
            let thumb = item.getElementsByClassName('small')
            thumb[0].style.opacity = 0.25
          })
          event.currentTarget.style.opacity = 1
          lgImage.style.opacity = 1
          caption.style.opacity = 1
        })

        smlImage.addEventListener('mouseout', function (event) {
          imageSets.forEach((item) => {
            let thumb = item.getElementsByClassName('small')
            thumb[0].style.opacity = 1
          })
          lgImage.style.opacity = 0
          caption.style.opacity = 0
        })
      })
    }
  }
}

export { indexImage }
