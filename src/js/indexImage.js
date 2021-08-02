import { iPad } from './mediaQueries'

let indexItems
let bgHover
let header
let bodyTag

function indexImage(itemsNodeList) {
  bodyTag = document.body
  indexItems = Array.from(itemsNodeList[0].querySelectorAll('a'))
  bgHover = document.getElementsByClassName('thumbBg')[0]
  header = document.querySelector('h1')

  renderElems(indexItems)

  document.addEventListener('click', function (event) {
    console.log(event.target)
  })
}

function renderElems(indexItems) {
  for (let i = 0; i < indexItems.length; i++) {
    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )

    let numImagesLabel = indexItems[i].getElementsByClassName('numImages')[0]
    if (numImagesLabel) {
      numImagesLabel.innerHTML = imageSets.length
    }
    imageSets.forEach((imageSet) => {
      let touchCover = document.createElement('div')
      let smlImage = new Image() // === document.createElement('img')
      let lgImage = new Image()
      let caption = document.createElement('p')
      let childItems = [lgImage, caption, touchCover, smlImage]
      if (imageSet.dataset.caption) {
        caption.innerHTML = imageSet.dataset.caption
      }

      smlImage.src = imageSet.dataset.small
      lgImage.src = imageSet.dataset.large
      touchCover.classList.add('touchCover')
      smlImage.classList.add('small')
      lgImage.classList.add('large')
      caption.classList.add('caption')

      childItems.forEach((childItem) => {
        imageSet.appendChild(childItem)
      })
    })
  }

  addDesktopLayer()

  iPad.addEventListener('change', handleTabletChange)
  handleTabletChange(iPad)
}

function addDesktopLayer() {
  console.log('Desktop active!')
  for (let i = 0; i < indexItems.length; i++) {
    indexItems[i].addEventListener('mouseover', indexItemHandler)
    indexItems[i].addEventListener('mouseout', indexItemHandler)

    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      thumb.addEventListener('mouseover', desktopThumbHandler)
      thumb.addEventListener('mouseout', desktopThumbHandler)
    })
  }
}

function removeDesktopLayer() {
  console.log('remove Desktop')
  for (let i = 0; i < indexItems.length; i++) {
    indexItems[i].removeEventListener('mouseover', indexItemHandler)
    indexItems[i].removeEventListener('mouseout', indexItemHandler)

    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      thumb.removeEventListener('mouseover', desktopThumbHandler)
      thumb.removeEventListener('mouseout', desktopThumbHandler)
    })
  }
}

function indexItemHandler(event) {
  let current = event.currentTarget
  if (event.type === 'mouseover') {
    indexItems.forEach((item) => {
      item.style.zIndex = 0 // reset all to 0
    })
    current.style.zIndex = 1 // bring the current to 1
    header.classList.add('headingHover')
    bgHover.classList.add('fullOpacity')
  } else if (event.type === 'mouseout') {
    header.classList.remove('headingHover')
    bgHover.classList.remove('fullOpacity')
  }
}

function desktopThumbHandler(event) {
  let current = event.currentTarget
  let parent = current.parentNode
  let imageSetWrapper = Array.from(
    parent.parentNode.getElementsByClassName('image-set')
  )

  let lgImg = parent.getElementsByClassName('large')[0]
  let caption = parent.getElementsByClassName('caption')[0]

  if (event.type === 'mouseover') {
    imageSetWrapper.forEach((imageSet) => {
      imageSet.getElementsByClassName('small')[0].style.opacity = 0.25
    })
    current.style.opacity = 1
    lgImg.classList.add('fullOpacity')
    caption.classList.add('fullOpacity')
  } else {
    imageSetWrapper.forEach((imageSet) => {
      imageSet.getElementsByClassName('small')[0].style.opacity = 1
    })
    lgImg.classList.remove('fullOpacity')
    caption.classList.remove('fullOpacity')
  }
}

function addTabletLayer() {
  console.log('iPad Active!')
  for (let i = 0; i < indexItems.length; i++) {
    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      thumb.addEventListener('click', tabletThumbHandler)
      thumb.addEventListener('touchStart', tabletThumbHandler)
    })
  }
}

// Non-recursive helper function
function nthParent(element, n) {
  while (n-- && element) element = element.parentNode
  return element
}

function tabletThumbHandler(event) {
  let current = event.currentTarget //
  let parent = current.parentNode // need this to track the large image / caption / cover
  let superParent = nthParent(parent, 2)
  let cover = parent.getElementsByClassName('touchCover')[0]
  let lgImg = parent.getElementsByClassName('large')[0]
  let caption = parent.getElementsByClassName('caption')[0]

  bodyTag.classList.add('disableScroll')

  if (event.type === 'click' || 'touchstart') {
    indexItems.forEach((item) => {
      item.style.zIndex = 0 // reset all to 0
    })
    superParent.style.zIndex = 1
    superParent.style.color = 'var(--black) !important'
    for (let i = 0; i < indexItems.length; i++) {
      let thumbs = Array.from(indexItems[i].getElementsByClassName('small'))
      thumbs.forEach((thumb) => {
        thumb.style.pointerEvents = 'none'
      })
    }
    header.classList.add('headingHover')
    cover.classList.add('fullOpacity')
    lgImg.classList.add('fullOpacity')
    caption.classList.add('fullOpacity')
  }

  event.preventDefault()
}

function removeTabletLayer() {
  bodyTag.classList.remove('disableScroll')
  header.classList.remove('headingHover', 'touchHeading')
  bgHover.classList.remove('touchCover')
  for (let i = 0; i < indexItems.length; i++) {
    let imageSets = Array.from(
      indexItems[i].getElementsByClassName('image-set')
    )
    imageSets.forEach((imageSet) => {
      let thumb = imageSet.getElementsByClassName('small')[0]
      thumb.removeEventListener('click', tabletThumbHandler)
      thumb.removeEventListener('touchStart', tabletThumbHandler)
    })
  }
}

function isDesktop() {
  removeTabletLayer()
  addDesktopLayer()
}

function isTablet() {
  removeDesktopLayer()
  addTabletLayer()
}

function handleTabletChange(event) {
  if (event.matches) {
    isTablet()
  } else {
    //
    isDesktop()
  }
}

export { indexImage }
