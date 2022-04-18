/*––––––––––––––– Hijacks the hamburger menu open/close in Semplice mobile breakpoints ––––––––––––––––––*/
let menuClick = false // open / close check

var hamburgerChecker = setInterval(setUpHamburger, 1000) // brute force to see if the menu is in the DOM

function setUpHamburger() {
	let hamburger = document.getElementsByClassName('hamburger')[0] // might not be the same selector path

	if (hamburger) {
		hamburger.addEventListener('click', menuToggle)
		clearInterval(hamburgerChecker)
	} else {
		// Times out Checker
		// console.log('No Hamburger menu')
		setTimeout(function () {
			clearInterval(hamburgerChecker)
		}, 10000)
	}
}

function menuToggle() {
	// toggles boolean between true and false
	menuClick = !menuClick

	if (menuClick) {
		// menu is open
		// Example: CSS class to prevent scroll
		document.querySelector('html').classList.add('disableScroll')
	} else {
		// menu is closed
		// Re-enable scroll
		document.querySelector('html').classList.remove('disableScroll')
	}
}

// Place this in CSS
// .disableScroll {
//   margin: 0;
//   height: 100%;
//   overflow: hidden !important;
//   overflow-y: hidden !important;
// }
