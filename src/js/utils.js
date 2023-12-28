/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// calculate distance between two points using Pythagoras
function calculateDistance(p1, p2) {
	let a = p2.x - p1.x
	let b = p2.y - p1.y

	return Math.sqrt(a * a + b * b)
}

var cancelAnimationFrame =
	window.cancelAnimationFrame || window.mozCancelAnimationFrame

function lerp(a, b, t) {
	return (1 - t) * a + t * b
}

function isInViewport(elem) {
	var distance = elem.getBoundingClientRect()
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	)
}

// Non-recursive helper function
function nthParent(element, n) {
	while (n-- && element) element = element.parentNode
	return element
}

/* Checks if device has touchEvents */
function hasTouch() {
	return (
		'ontouchstart' in document.documentElement ||
		navigator.maxTouchPoints > 0 ||
		navigator.msMaxTouchPoints > 0
	)
}

function navigationType(){
	var result;
	var p;

	if (window.performance.navigation) {
			result=window.performance.navigation;
			if (result==255){result=4} // 4 is my invention!
	}

	if (window.performance.getEntriesByType("navigation")){
		 p=window.performance.getEntriesByType("navigation")[0].type;

		 if (p=='navigate'){result=0}
		 if (p=='reload'){result=1}
		 if (p=='back_forward'){result=2}
		 if (p=='prerender'){result=3} //3 is my invention!
	}
	return result;
}

// Solving for mobile browser vh/vw discrepencies in different browsers
// via: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
function customVhUnitPx() {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vhPx', `${vh}px`)
}

function customVhUnitVal(){
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}`)
}

function customVwUnitPx() {
	let vw = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vwPx', `${vw}px`)
}

function customVwUnitVal() {
	let vw = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vw', `${vw}`)
}

export {
	calculateDistance,
	cancelAnimationFrame,
	customVhUnitPx,
	customVhUnitVal,
	customVwUnitPx,
	customVwUnitVal,
	getRandomArbitrary,
	getRandomInt,
	hasTouch,
	isInViewport,
	lerp,
	navigationType,
	nthParent,
}
