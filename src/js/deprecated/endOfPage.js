// Uses Intersection Observer to show nav at the end of a page

// For Observer object
let options = {
  rootMargin: '0px 0px',
  threshold: 0.99,
}

let observer = new IntersectionObserver(revealNav, options)
var observerChecker = setInterval('setUpObserver()', 200) // Brute force set up Observer; overrides Semplice's load order

function setUpObserver() {
  document.querySelectorAll('footer').forEach((module) => {
    observer.observe(module)
  })
}

function revealNav(entries, obs) {
  let nav = document.querySelectorAll('div.navbar-inner')[0]

  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
      console.log('entry.isIntersecting')
      showNav(nav)
    }
  })
}
