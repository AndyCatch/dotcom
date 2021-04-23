let prevScrollpos = window.pageYOffset,
  isMobile = !1,
  menuClick = !1,
  options = { rootMargin: '0px 0px', threshold: 0.99 },
  observer = new IntersectionObserver(revealNav, options)
var clock = setInterval('updateClock()', 200),
  navChecker = setInterval('addNav()', 200),
  observerChecker = setInterval('setUpObserver()', 200)
function windowResize() {
  console.log('resize')
}
function addNav() {
  'undefined' !== document.querySelectorAll('div.navbar-inner')[0] &&
    (window.addEventListener('scroll', hideShowNav, {
      capture: !1,
      passive: !0,
    }),
    clearInterval(navChecker))
}
function setUpObserver() {
  document.querySelectorAll('.footer-module').forEach((e) => {
    observer.observe(e)
  })
}
function setUpHamburger() {
  let e = document.getElementsByClassName('hamburger')[0]
  e && e.addEventListener('click', menuToggle)
}
function revealNav(e, t) {
  let n = document.querySelectorAll('div.navbar-inner')[0]
  e.forEach((e) => {
    e.isIntersecting &&
      0.99 <= e.intersectionRatio &&
      (console.log('entry.isIntersecting'),
      n.classList.remove('hideNav'),
      n.classList.add('showNav'))
  })
}
function updateClock() {
  let o = document.querySelector('.currentYear')
  if ('undefined' !== o) {
    const i = new Date()
    var r = i.getFullYear()
    let e = i.getHours(),
      t = i.getMinutes(),
      n = i.getSeconds()
    e < 10 && (e = '0' + e),
      t < 10 && (t = '0' + t),
      n < 10 && (n = '0' + n),
      o && (o.innerHTML = '© ' + r + ' ' + e + ':' + t + ':' + n)
  }
}
function isThisMobile() {
  ;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) && (isMobile = !0)
}
function showNav(e) {
  e.classList.remove('hideNav'), e.classList.add('showNav')
}
function hideNav(e) {
  e.classList.remove('showNav'), e.classList.add('hideNav')
}
function hideShowNav(e) {
  var t = document.querySelectorAll('div.navbar-inner')[0],
    n = window.pageYOffset
  'undefined' != t &&
    ((prevScrollpos > n || n <= 0 ? showNav : hideNav)(t), (prevScrollpos = n))
}
function menuChange(e) {
  e
    ? document.removeEventListener('scroll', hideShowNav, {
        capture: !1,
        passive: !1,
      })
    : document.addEventListener('scroll', hideShowNav, {
        capture: !1,
        passive: !1,
      })
}
function menuToggle() {
  ;(menuClick = !menuClick), menuChange(menuClick)
}
function hasTouch() {
  return (
    'ontouchstart' in document.documentElement ||
    0 < navigator.maxTouchPoints ||
    0 < navigator.msMaxTouchPoints
  )
}
if (
  (window.addEventListener(
    'sempliceTransitionInDone',
    function (e) {
      isProject()
    },
    !1
  ),
  setUpHamburger(),
  window.addEventListener('load', (e) => {
    console.log('Window loaded')
  }),
  hasTouch())
)
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si]
      if (styleSheet.rules)
        for (var ri = styleSheet.rules.length - 1; 0 <= ri; ri--)
          styleSheet.rules[ri].selectorText &&
            styleSheet.rules[ri].selectorText.match(':hover') &&
            styleSheet.deleteRule(ri)
    }
  } catch (e) {}
let vh = 0.01 * window.innerHeight
function browserType() {
  let e = navigator.userAgent.toLowerCase()
  ;-1 != e.indexOf('safari') &&
    (-1 < e.indexOf('chrome')
      ? console.log('Browser type: Chrome')
      : console.log('Browser type: Safari'))
}
document.documentElement.style.setProperty('--vh', `${vh}px`),
  window.addEventListener('resize', () => {
    var e = 0.01 * window.innerHeight
    document.documentElement.style.setProperty('--vh', `${e}px`)
  }),
  isThisMobile(),
  browserType(),
  hasTouch()
