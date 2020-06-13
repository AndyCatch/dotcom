let navBar;
let nextModule;
let hamburger;
let tagsCollection;

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
var projectTitles = []; // Array
let mobileCover; // element
let marqueeText; // String
let prevScrollpos; // element
let about; // element
let footerModule; // element

window.addEventListener("load", (event) => {
  console.log("Window loaded");
  prevScrollpos = window.pageYOffset;

  about = document.querySelector(".navItem-About");
  navBar = document.querySelectorAll("div.navbar-inner")[0]; // Finds nav
  hamburger = document.getElementsByClassName("hamburger")[0];
  setUpHamburger();

  window.addEventListener("scroll", hideShowNav, {
    capture: false,
    passive: false,
  });
});

function isProject() {
  if (public_isProject) {
    console.log("public_isProject: " + public_isProject);
    // We have received a "projectname" event
    projectImage = document.getElementsByClassName("project-cover")[0];
    marquee = document.querySelector(".cover_title h1 span");
    
    mobileCover = document.querySelector(
      '.cover_title div[data-content-for="xs"] h1 span'
    );

    if (projectImage && marquee) {
      projectImage.classList.add("fade-out");
      marquee.classList.add("fade-out");
    }

    setProjectTitles(); // pushes project title elements to an array
  }
}

function setUpObserver() {
  observer = new IntersectionObserver(revealNav, options);

  document.querySelectorAll(".footer-module").forEach((module) => {
    observer.observe(module);
  });
}

/* 
  // Sets up clock in footer
  //setInterval("updateClock()", 200);
*/

function setUpHamburger() {
  if (hamburger) {
    hamburger.addEventListener("click", menuToggle);
  }
}

function setProjectTitles() {
  for (let i = 0; i < breakpoints.length; i++) {
    let selectorPath = `.cover_title div[data-content-for=${JSON.stringify(
      breakpoints[i]
    )}] h1 span`;
    projectTitles.push(document.querySelector(selectorPath));
  }

  marqueeText = fillArray(public_projectName);
  console.log("marqueeText: " + marqueeText);
  populate();
  fadeIn();

  // resets
  public_isProject = false;
}

function revealNav(entries, obs) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
      if (navBar) {
        navBar.classList.remove("hideNav");
        navBar.classList.add("showNav");
      }
      window.removeEventListener("scroll", hideShowNav, {
        capture: false,
        passive: true,
      });
    } else {
      window.addEventListener("scroll", hideShowNav, {
        capture: false,
        passive: true,
      });
    }
  });
}

function updateClock() {
  // Gets the element we want to inject the clock into
  let elem = document.querySelector(".currentYear");

  const now = new Date(); // Gets the current time

  let year = now.getFullYear(); // Get the hours, minutes and seconds from the current time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours; // Format hrs, mins and secs
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

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
}

function showNav() {
  navBar.classList.remove("hideNav");
  navBar.classList.add("showNav");
}

function hideNav() {
  navBar.classList.remove("showNav");
  navBar.classList.add("hideNav");
}

// hide / show Nav functionality
// relies on let prevScrollpos in window.load
function hideShowNav(event) {
  navBar = document.querySelectorAll("div.navbar-inner")[0];

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
      passive: false,
    });
  } else {
    // menu is closed
    document.addEventListener("scroll", hideShowNav, {
      capture: false,
      passive: false,
    });
  }
}

function menuToggle() {
  menuClick = !menuClick;
  // toggles boolean between true and false
  menuChange(menuClick);
}

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

function browserType() {
  let userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("safari") != -1) {
    if (userAgent.indexOf("chrome") > -1) {
      //browser is chrome
      console.log("Browser type: Chrome");
    } else {
      //browser is safari
      console.log("Browser type: Safari");
      //about.style.marginTop = "0";
    }
  }
}

function fadeIn() {
  console.log("fadeIn");
  projectImage.classList.remove("fade-out");
  projectImage.classList.add("fade-in");

  setTimeout(function () {
    marquee.classList.remove("fade-out");
    marquee.classList.add("title-fade-in");
  }, 500);
}

function fillArray(titleName) {
  console.log("fillArray" + titleName);
  let string = new Array(50).fill(titleName).join(" — ");
  titleName = string;

  return titleName;
}

function makeMarquee(elArr, text) {
  for (let i = 0; i < elArr.length; i++) {
    elArr[i].innerHTML = text;

    if (elArr[i] === mobileCover) {
      mobileCover.style.fontSize = 40 + "px";
    }
  }
}

function populate() {
  makeMarquee(projectTitles, marqueeText);
}

isProject();
setUpObserver();
isThisMobile();
browserType();
hasTouch();
