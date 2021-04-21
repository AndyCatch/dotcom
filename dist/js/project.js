isProject()

function isProject() {
  let title = 'Homepage Vision Verizon' // setting a title
  let mobileCover = document.querySelector(
    '.cover_title div[data-content-for="xs"] h1 span'
  ) // setting a mobile cover (Not sure what this is tbh)

  let marqueeText // String
  marqueeText = fillArray(title)

  let projectImage // Element
  projectImage = document.getElementsByClassName('project-cover')[0] //

  let marquee // Element
  marquee = document.querySelector('.cover_title h1 span')

  // sets to faded out

  if (projectImage) {
    projectImage.classList.add('fade-out')
  }

  if (marquee) {
    marquee.classList.add('fade-out')
  }

  // pushes project title elements to an array
  let breakpoints = Array.from(['xl', 'lg', 'md', 'sm', 'xs']) //
  let projectTitles = [] // Array

  for (let i = 0; i < breakpoints.length; i++) {
    let selectorPath = `.cover_title div[data-content-for=${JSON.stringify(
      breakpoints[i]
    )}] h1 span`
    projectTitles.push(document.querySelector(selectorPath)) // finds all the elements in the DOM that will have titles to account for responsiveness
  }

  makeMarquee(projectTitles, marqueeText)
  fadeIn(projectImage, marquee)
}

function fadeIn(projectImage, marquee) {
  if (projectImage) {
    projectImage.classList.remove('fade-out')
    projectImage.classList.add('fade-in')
  }

  setTimeout(function () {
    if (marquee) {
      marquee.classList.remove('fade-out')
      marquee.classList.add('title-fade-in')
    }
  }, 500)
}

function fillArray(titleName) {
  let string = new Array(50).fill(titleName).join(' — ')
  titleName = string

  return titleName
}

function makeMarquee(elArr, text) {
  for (let i = 0; i < elArr.length; i++) {
    if (elArr[i]) {
      elArr[i].innerHTML = text
    }
  }
}
