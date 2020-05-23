console.log(
  "%c Hello, console friend!",
  "font-family:‘Common Sans’, sans-serif; color:#000; font-weight: 400;font-size:48px;line-height: 1;"
);

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

//initiate as false
var isMobile = false;
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
const checkViewport = function () {
  if (isMobile) {
    document.removeEventListener("scroll", hideShowNav);
  }
};
checkViewport();

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
