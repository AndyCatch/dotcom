function indexImage(itemsNodeList) {
  let indexItems = Array.from(itemsNodeList[0].querySelectorAll('a'))
  let header = document.querySelector('h1')

  for (let i = 0; i < indexItems.length; i++) {
    let wrappers = Array.from(
      indexItems[i].querySelectorAll('div.image-set-wrapper')
    )

    let numLabel = document.createElement('p')
    numLabel.classList.add('numImages')
    numLabel.innerHTML = 0
    if (wrappers[0]) {
      wrappers[0].appendChild(numLabel)
    }
    let bgHover = document.createElement('div')
    bgHover.classList.add('thumbBg')

    indexItems[i].appendChild(bgHover)

    indexItems[i].addEventListener('mouseover', function (event) {
      indexItems.forEach((item) => {
        item.style.zIndex = 0 // reset all to 0
      })

      bgHover.style.opacity = 1
      numLabel.style.color = 'var(--black)'
      header.classList.add('headingHover')
      event.currentTarget.style.zIndex = 1 // bring the current to 1
    })

    indexItems[i].addEventListener('mouseout', function (event) {
      bgHover.style.opacity = 0
      header.classList.remove('headingHover')
      numLabel.style.color = 'var(--white)'
    })

    if (indexItems[i].querySelectorAll('div.image-set')[i]) {
      // getElementsByClassName returns an HTMLCollection, NOT an Array
      let imageSets = Array.from(
        indexItems[i].getElementsByClassName('image-set')
      )
      numLabel.innerHTML = imageSets.length

      imageSets.forEach((imageSet) => {
        let smlImage = new Image()
        let lgImage = new Image() // === document.createElement('img')

        smlImage.src = imageSet.dataset.small
        lgImage.src = imageSet.dataset.large
        smlImage.classList.add('small')
        lgImage.classList.add('large')

        imageSet.appendChild(smlImage)
        imageSet.appendChild(lgImage)

        // add listeners to thumbs
        smlImage.addEventListener('mouseover', function (event) {
          let current = event.currentTarget
          imageSets.forEach((item) => {
            let thumb = item.getElementsByClassName('small')
            thumb[0].style.opacity = 0.25
          })
          current.style.opacity = 1
          lgImage.style.opacity = 1
        })

        smlImage.addEventListener('mouseout', function (event) {
          let current = event.currentTarget
          imageSets.forEach((item) => {
            let thumb = item.getElementsByClassName('small')
            thumb[0].style.opacity = 1
          })
          lgImage.style.opacity = 0
        })
      })
    }
  }
}

export { indexImage }
