const title = "TITLE OF PROJECT";
const mobileCover = document.querySelector(
  '.cover_title div[data-content-for="xs"] h1 span'
);
const breakpoints = Array.from(["xl", "lg", "md", "sm", "xs"]);

let projectTitles = []; // Array
let marqueeText; // String
let projectImage; // Element
let marquee; // Element

public_projectName = title;

isProject();

function isProject() {
  projectImage = document.getElementsByClassName("project-cover")[0];
  marquee = document.querySelector(".cover_title h1 span");

  if (projectImage) {
    projectImage.classList.add("fade-out");
  }

  if (marquee) {
    marquee.classList.add("fade-out");
  }

  setProjectTitles(); // pushes project title elements to an array
}

function setProjectTitles() {
  for (let i = 0; i < breakpoints.length; i++) {
    let selectorPath = `.cover_title div[data-content-for=${JSON.stringify(
      breakpoints[i]
    )}] h1 span`;
    projectTitles.push(document.querySelector(selectorPath));
  }

  marqueeText = fillArray(public_projectName);

  populate();
  fadeIn();
}

function fadeIn() {
  if (projectImage) {
    projectImage.classList.remove("fade-out");
    projectImage.classList.add("fade-in");
  }

  setTimeout(function () {
    if (marquee) {
      marquee.classList.remove("fade-out");
      marquee.classList.add("title-fade-in");
    }
  }, 500);
}

function fillArray(titleName) {
  let string = new Array(50).fill(titleName).join(" — ");
  titleName = string;

  return titleName;
}

function makeMarquee(elArr, text) {
  for (let i = 0; i < elArr.length; i++) {
    if (elArr[i]) {
      elArr[i].innerHTML = text;
    }

    if (elArr[i] && elArr[i] === mobileCover) {
      mobileCover.style.fontSize = 40 + "px";
    }
  }
}

function populate() {
  makeMarquee(projectTitles, marqueeText);
  // resets length
  projectTitles = [];
}
