/* --------- PREV VERSION May 30 2020----------- */

let navBar;
let nextModule;
let hamburger;
let tagsCollection;
let tagsList = [];

let isMobile = false;
let menuClick = false;

// For Observer object
let observer;
let options = {
  rootMargin: "0px 0px",
  threshold: 0.99,
};

let projectImage; // element
let marquee; // element
let breakpoints = Array.from(["xl", "lg", "md", "sm", "xs"]);
var headerElements = []; // Array
let mobileCover; // element
let marqueeText; // String

console.log(
  "%c #############Hi############ ",
  "font-family:‘Common Sans’, sans-serif; color:#ff5000; font-weight: 400;font-size:18px;line-height: 1;"
);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  init();
});

function init() {
  // Pushes data-project
  tagsCollection = document.getElementsByClassName("list")[0].children;
  breakpoints.forEach((breakpoint) => {
    headerElements.push(
      document.querySelector(`.cover_title div[data-content-for=${JSON.stringify(breakpoint)}] h1 span`)
    );
  });
  setUpTags();

  // Sets up navigation
  navBar = document.querySelectorAll("div.navbar-inner")[0];

  hamburger = document.getElementsByClassName("hamburger")[0];
  if (hamburger) {
    hamburger.addEventListener("click", menuToggle);
  }

  footerModule = document.getElementsByClassName("footer-module")[0];
  document.addEventListener("scroll", hideShowNav, {
    capture: false,
    passive: true,
  });

  // Sets up footer in clock
  setInterval("updateClock()", 200);
  setInterval("forceNav()", 200);

  // Nav reveal at the end of page
  observer = new IntersectionObserver(revealNav, options);
  document.querySelectorAll(".footer-module").forEach((module) => {
    observer.observe(module);
  });

  isThisMobile();
  browserType();
  hasTouch();

  // Event handling for marquee, uncomment in prod
  // console.log("Project is: " + public_projectName);
  // console.log("Is it a project? : " + public_isProject);
  if (public_isProject) {
    public_isProject = false;

    projectImage = document.getElementsByClassName("project-cover")[0];
    marquee = document.querySelector(".cover_title h1 span");
    mobileCover = document.querySelector('.cover_title div[data-content-for="xs"] h1 span');

    if (projectImage && marquee) {
      projectImage.classList.add("fade-out");
      marquee.classList.add("fade-out");
    }
  }
};

function forceNav() {
  document.removeEventListener("scroll", hideShowNav, {
    capture: false,
    passive: true,
  });
  document.addEventListener("scroll", hideShowNav, {
    capture: false,
    passive: true,
  });
}

function pageReset() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function onPopState(e) {
  var state = e.state;
  if (state !== null) {
    //load content with ajax
    console.log("popstate active");
  }
}

function setUpTags() {
  tagsList = Array.from(tagsCollection);

  tagsList.forEach((tag) => {
    tag.addEventListener("click", tagClickHandler);
  });
}

function tagClickHandler(ev) {
  public_projectName = ev.currentTarget.dataset.project;
  console.log("public_projectName = " + public_projectName);
  marqueeText = fillArray(public_projectName);
}

function revealNav(entries, obs) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
      navBar.classList.remove("hideNav");
      navBar.classList.add("showNav");
      document.removeEventListener("scroll", hideShowNav, {
        capture: false,
        passive: true,
      });
    } else {
      document.addEventListener("scroll", hideShowNav, {
        capture: false,
        passive: true,
      });
    }
  });
}

function updateClock() {
  // Gets the current time
  const now = new Date();
  // Get the hours, minutes and seconds from the current time
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format hours, minutes and seconds
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Gets the element we want to inject the clock into
  let elem = document.querySelector(".currentYear");

  // Sets the elements inner HTML value to our clock data
  if (elem) {
    elem.innerHTML = "© " + year + " " + hours + ":" + minutes + ":" + seconds;
  }
}

function isThisMobile() {
  // device detection
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }
};

function showNav() {
  navBar.classList.remove("hideNav");
  navBar.classList.add("showNav");
}

function hideNav() {
  navBar.classList.remove("showNav");
  navBar.classList.add("hideNav");
}

// hide / show Nav functionality
let prevScrollpos = window.pageYOffset;
function hideShowNav(event) {
  let currentScrollPos = window.pageYOffset;

  if (navBar) {
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
      showNav();
    } else {
      hideNav();
    }
    prevScrollpos = currentScrollPos;
  }
}

function menuChange(boolean) {
  if (boolean) {
    // menu is open, ensures menu doesn't scroll away
    document.removeEventListener("scroll", hideShowNav, {
      capture: false,
      passive: true,
    });
  } else {
    // menu is closed
    document.addEventListener("scroll", hideShowNav, {
      capture: false,
      passive: true,
    });
  }
}

function menuToggle() {
  menuClick = !menuClick;
  // toggles boolean between true and false
  menuChange(menuClick);
};

/* Please remove hover styles in mobile ;( */
function hasTouch() {
  return (
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (hasTouch()) {
  // remove all :hover stylesheets
  try {
    // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}

// Solving for mobile browser vh discrepencies for project image
// via: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// hack to adjust margin discrepency in browsers
const about = document.querySelector(".navItem-About");
function browserType() {
  let userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("safari") != -1) {
    if (userAgent.indexOf("chrome") > -1) {
      //browser is chrome
      console.log("Browser type: Chrome")
    } else {
      //browser is safari
      console.log("Browser type: Safari")
      about.style.marginTop = "0";
    }
  }
}

 function fadeIn() {
  marquee.classList.remove("fade-out");
  marquee.classList.add("title-fade-in");
  projectImage.classList.remove("fade-out");
  projectImage.classList.add("fade-in");

};

function fillArray(titleName) {
  let string = new Array(50).fill(titleName).join(" — ");
  titleName = string;

  return titleName;
};

function makeMarquee(elArr, text) {
  for (let i = 0; i < elArr.length; i++) {
    elArr[i].innerHTML = text;

    if (elArr[i] === mobileCover) {
      mobileCover.style.fontSize = 40 + "px";
    }
  }
};

function populate() {
  makeMarquee(headerElements, marqueeText);
};



/* ---------PREV VERSION----------- */
console.log(
  "%c Hello, console friend!",
  "font-family:‘Common Sans’, sans-serif; color:#000; font-weight: 400;font-size:48px;line-height: 1;"
);

//initiate as false
let isMobile = false;
const isThisMobile = function () {
  // device detection
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }
};
isThisMobile();

function updateClock() {
  // Gets the current time
  const now = new Date();

  // Get the hours, minutes and seconds from the current time
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format hours, minutes and seconds
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Gets the element we want to inject the clock into
  let elem = document.querySelector(".currentYear");

  // Sets the elements inner HTML value to our clock data
  if (elem) {
    elem.innerHTML = "© " + year + " " + hours + ":" + minutes + ":" + seconds;
  }
}

const showNav = function (element) {
  element.classList.remove("hideNav");
  element.classList.add("showNav");
};

const hideNav = function (element) {
  element.classList.remove("showNav");
  element.classList.add("hideNav");
};

// hide / show Nav functionality
let prevScrollpos = window.pageYOffset;
const navBar = document.getElementsByClassName("semplice-navbar")[0];
const hideShowNav = function (event) {
  let currentScrollPos = window.pageYOffset;

  if (navBar) {
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
      showNav(navBar);
    } else {
      hideNav(navBar);
    }
    prevScrollpos = currentScrollPos;
  }
};

document.addEventListener("scroll", hideShowNav);

// remove hide / show if mobile device
/*
const checkViewport = function() {
if (isMobile) {
document.removeEventListener('scroll', hideShowNav)
}
}
checkViewport();*/

//* makes sure the nav appears when we get to the end of the page */
document.body.onscroll = function (ev) {
  let windowHeight = window.innerHeight + window.pageYOffset;
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  if (windowHeight >= scrollHeight) {
    if (navBar) {
      showNav(navBar);
    }
  }
};

/* Remove hover styles in mobile ;( */
function hasTouch() {
  return (
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (hasTouch()) {
  // remove all :hover stylesheets
  try {
    // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;
        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
hasTouch();

var hamburger = document.getElementsByClassName("hamburger")[0];
function menuChange(boolean) {
  if (boolean) {
    // menu is open
  } else {
    // menu is closed
  }
}

let menuClick = false;
hamburger.onclick = function () {
  menuClick = !menuClick;
  // toggles boolean between true and false
  menuChange(menuClick);
};

// Solving for mobile browser vh discrepencies for project image
// via: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// hack to adjust margin discrepency in browsers
const about = document.querySelector(".navItem-About");
function browserType() {
  let userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("safari") != -1) {
    if (userAgent.indexOf("chrome") > -1) {
      //browser is chrome
    } else {
      //browser is safari
      about.style.marginTop = "0";
    }
  }
}

window.onload = function () {
  setInterval("updateClock()", 200);
};

browserType();


/* -------- PREV VERSION 05/26 ------- */

let navBar;
let nextModule;
let hamburger;

let isMobile = false;
let menuClick = false;

// For Observer object
let observer;
let options = {
  rootMargin: "0px 0px",
  threshold: 0.99,
};

console.log(
  "%c Hello, console friend!",
  "font-family:‘Common Sans’, sans-serif; color:#000; font-weight: 400;font-size:48px;line-height: 1;"
);


window.addEventListener("load", (event) => {
  init();
});

const init = function () {
  console.log("init called")
  console.log(public_projectName)
  // Production
  navBar = document.querySelectorAll("div.navbar-inner")[0];
  hamburger = document.getElementsByClassName("hamburger")[0];
  hamburger.addEventListener("click", menuToggle);
  footerModule = document.getElementsByClassName("footer-module")[0];
  document.addEventListener("scroll", hideShowNav, {
    capture: false,
    passive: true,
  });
  
  setInterval("updateClock()", 200);

  observer = new IntersectionObserver(revealNav, options);
  document.querySelectorAll(".footer-module").forEach((module) => {
    observer.observe(module);
  });

  isThisMobile();
  browserType();
  hasTouch();
};

function revealNav(entries, obs) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
      navBar.classList.remove("hideNav");
      navBar.classList.add("showNav");
      document.removeEventListener("scroll", hideShowNav, {
        capture: false,
        passive: true,
      });
    } else {
      document.addEventListener("scroll", hideShowNav, {
        capture: false,
        passive: true,
      });
    }
  });
}

function updateClock() {
  // Gets the current time
  const now = new Date();
  // Get the hours, minutes and seconds from the current time
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format hours, minutes and seconds
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Gets the element we want to inject the clock into
  let elem = document.querySelector(".currentYear");

  // Sets the elements inner HTML value to our clock data
  if (elem) {
    elem.innerHTML = "© " + year + " " + hours + ":" + minutes + ":" + seconds;
  }
}

const isThisMobile = function () {
  // device detection
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }
};

const showNav = function (element) {
  element.classList.remove("hideNav");
  element.classList.add("showNav");
};

const hideNav = function (element) {
  element.classList.remove("showNav");
  element.classList.add("hideNav");
};

// hide / show Nav functionality
let prevScrollpos = window.pageYOffset;
const hideShowNav = function (event) {
  let currentScrollPos = window.pageYOffset;

  if (navBar) {
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
      showNav(navBar);
    } else {
      hideNav(navBar);
    }
    prevScrollpos = currentScrollPos;
  }
};

function menuChange(boolean) {
  if (boolean) {
    // menu is open, ensures menu doesn't scroll away
    document.removeEventListener("scroll", hideShowNav, {
      capture: false,
      passive: true,
    });
  } else {
    // menu is closed
    document.addEventListener("scroll", hideShowNav, {
      capture: false,
      passive: true,
    });
  }
}

function pageReset() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// was trying this for trying to detect back button
function onPopState(e) {
  var state = e.state;
  if (state !== null) {
    //load content with ajax
    console.log("popstate active");
  }
}

const menuToggle = function () {
  menuClick = !menuClick;
  // toggles boolean between true and false
  menuChange(menuClick);
};

/* Please remove hover styles in mobile ;( */
function hasTouch() {
  return (
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (hasTouch()) {
  console.log("hasTouch")
  console.log(hasTouch())
  // remove all :hover stylesheets
  try {
    // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}

// Solving for mobile browser vh discrepencies for project image
// via: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
// We listen to the resize event
window.addEventListener("resize", () => {
  console.log("window-resize")
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// hack to adjust margin discrepency in browsers
const about = document.querySelector(".navItem-About");
function browserType() {
  let userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("safari") != -1) {
    if (userAgent.indexOf("chrome") > -1) {
      //browser is chrome
    } else {
      //browser is safari
      about.style.marginTop = "0";
    }
  }
}


const title = "Homepage Vision Verizon";
let event = new CustomEvent('projectname', {detail: title} );

const projectImage = document.getElementsByClassName("project-cover")[0];

const fadeIn = () => {
  projectImage.classList.add("fade-in");
};

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
  console.log("DOMContentLoaded")
  document.dispatchEvent(event);
  console.log("Project level Dispatched = " + event.detail)
  populate();
  fadeIn();
});
