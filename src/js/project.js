/*–––––––––––––––This lives in Semplice –> Code Module in Each Project ––––––––––––––––––*/
var isProjectChecker = setInterval(isProject, 500)

function isProject() {
  let title = 'TITLE TITLE TITLE' // setting a title
  let marqueeText = fillArray(title) // String
  let projectCover // Element

  projectCover = document.getElementsByClassName('project-cover')[0]
  // console.log('isProject')

  let marquee // Element
  marquee = document.querySelector('.cover_title div h1 span')

  // sets to faded out
  if (projectCover && marquee) {
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
    fadeIn(projectCover, marquee)

    clearInterval(isProjectChecker)
  }
}

function fadeIn(projectCover, marquee) {
  setTimeout(function () {
    if (projectCover) {
      projectCover.classList.add('project-cover-fade-in')
    }
  }, 1000)

  setTimeout(function () {
    if (marquee) {
      marquee.classList.add('title-fade-in')
    }
  }, 1500)
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
