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
          // current.classList.add('thumbBum')
          lgImage.style.opacity = 1
        })

        smlImage.addEventListener('mouseout', function (event) {
          let current = event.currentTarget
          imageSets.forEach((item) => {
            let thumb = item.getElementsByClassName('small')
            // console.log(thumb[0])
            thumb[0].style.opacity = 1
          })
          // current.classList.remove('thumbBum')
          lgImage.style.opacity = 0
        })
      })
    }
  }
}

export { indexImage }
