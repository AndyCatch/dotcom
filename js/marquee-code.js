const projectImage = document.getElementsByClassName("project-cover")[0];

const fadeIn = () => {
  projectImage.classList.add("fade-in");
};

const title = "Homepage Vision Verizon";

const marquee = document.querySelector(".cover_title h1 span");

const fillArray = function (titleName) {
  let string = new Array(50).fill(titleName).join(" — ");
  titleName = string;

  return titleName;
};

const headerElements = [
  document.querySelector('.cover_title div[data-content-for="xl"] h1 span'),
  document.querySelector('.cover_title div[data-content-for="lg"] h1 span'),
  document.querySelector('.cover_title div[data-content-for="md"] h1 span'),
  document.querySelector('.cover_title div[data-content-for="sm"] h1 span'),
  document.querySelector('.cover_title div[data-content-for="xs"] h1 span'),
];

const mobileCover = document.querySelector(
  '.cover_title div[data-content-for="xs"] h1 span'
);
const marqueeText = fillArray(title);

const makeMarquee = function (elArr, text) {
  for (let i = 0; i < elArr.length; i++) {
    elArr[i].innerHTML = text;

    if (elArr[i] === mobileCover) {
      mobileCover.style.fontSize = 40 + "px";
    }
  }
};

const populate = function () {
  makeMarquee(headerElements, marqueeText);
};

document.addEventListener("DOMContentLoaded", () => {
  populate();
  fadeIn();
});
