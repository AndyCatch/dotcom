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

let projectImage // element
let marquee // element
let headerElements // Array
let mobileCover // element
let marqueeText // String

console.log(
  "%c Hello, console friend!",
  "font-family:‘Common Sans’, sans-serif; color:#000; font-weight: 400;font-size:48px;line-height: 1;"
);

window.addEventListener("load", (event) => {
  console.log("window is fully loaded Listener");

  init();
});

const init = function () {
  // Production
  projectImage = document.getElementsByClassName("project-cover")[0];
  marquee = document.querySelector(".cover_title h1 span");
  headerElements = [
    document.querySelector('.cover_title div[data-content-for="xl"] h1 span'),
    document.querySelector('.cover_title div[data-content-for="lg"] h1 span'),
    document.querySelector('.cover_title div[data-content-for="md"] h1 span'),
    document.querySelector('.cover_title div[data-content-for="sm"] h1 span'),
    document.querySelector('.cover_title div[data-content-for="xs"] h1 span'),
  ];

  mobileCover = document.querySelector('.cover_title div[data-content-for="xs"] h1 span');
  marqueeText = fillArray(title);

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
    } else {
      //browser is safari
      about.style.marginTop = "0";
    }
  }
}

const fadeIn = () => {
  projectImage.classList.add("fade-in");
};

const fillArray = function (titleName) {
  let string = new Array(50).fill(titleName).join(" — ");
  titleName = string;

  return titleName;
};

const makeMarquee = function (elArr, text) {
  for (let i = 0; i < elArr.length; i++) {
    elArr[i].innerHTML = text;

    if (elArr[i] === mobileCover) {
      mobileCover.style.fontSize = 40 + "px";
    }
  }
};
