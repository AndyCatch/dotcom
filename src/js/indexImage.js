import { iPad } from './mediaQueries'

let indexItems
let header

function indexImage(itemsNodeList) {
  // Register event listener
  indexItems = Array.from(itemsNodeList[0].querySelectorAll('a'))
  header = document.querySelector('h1')

  renderElems(indexItems)
  iPad.addEventListener('change', handleTabletChange)
}

function renderElems(indexItems) {
  for (let i = 0; i < indexItems.length; i++) {
    let bgHover = document.createElement('div')
    bgHover.classList.add('thumbBg')
    indexItems[i].appendChild(bgHover)

    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    // console.log(indexItems[i].getElementsByClassName('numImages')[0])
    let numImagesLabel = indexItems[i].getElementsByClassName('numImages')[0]
    if (numImagesLabel) {
      numImagesLabel.innerHTML = imageSets.length
    }
    imageSets.forEach((imageSet) => {
      let smlImage = new Image() // === document.createElement('img')
      let lgImage = new Image()
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
    })
  }

  desktopLayer()
}

function desktopLayer() {
  for (let i = 0; i < indexItems.length; i++) {
    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )

    indexItems[i].addEventListener('mouseover', function (event) {
      indexItems.forEach((item) => {
        item.style.zIndex = 0 // reset all to 0
      })
      indexItemHandler(event)
    })
    indexItems[i].addEventListener('mouseout', function (event) {
      indexItemHandler(event)
    })

    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      let largeImg = imageSet.getElementsByClassName('large')[0]
      let caption = imageSet.getElementsByClassName('caption')[0]

      thumb.addEventListener('mouseover', function (event) {
        imageSets.forEach((item) => {
          item.getElementsByClassName('small')[0].style.opacity = 0.25
        })
        imageMouseHandler(event, largeImg, caption)
      })

      thumb.addEventListener('mouseout', function (event) {
        imageSets.forEach((item) => {
          item.getElementsByClassName('small')[0].style.opacity = 1
        })
        imageMouseHandler(event, largeImg, caption)
      })
    })
  }
}

function indexItemHandler(event) {
  let current = event.currentTarget
  if (event.type === 'mouseover') {
    current.style.zIndex = 1 // bring the current to 1
    header.classList.add('headingHover')
    current.getElementsByClassName('thumbBg')[0].style.opacity = 1
    current.getElementsByClassName('numImages')[0].style.color = 'var(--black)'
  } else {
    header.classList.remove('headingHover')
    current.getElementsByClassName('thumbBg')[0].style.opacity = 0
    current.getElementsByClassName('numImages')[0].style.color = 'var(--white)'
  }
}

function imageMouseHandler(event, largeImg, caption) {
  let current = event.currentTarget
  if (event.type === 'mouseover') {
    current.style.opacity = 1
    largeImg.style.opacity = 1
    caption.style.opacity = 1
  } else {
    largeImg.style.opacity = 0
    caption.style.opacity = 0
  }
}

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
  }
}

export { indexImage }
