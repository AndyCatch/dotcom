// Manual current page widget.
// let currentPage
// let navItemChecker
// are both set in main.js file, the below code is made to be manually dropped into each page.
// currentPage * must * be a string equal to referenced element innerHTML
navItemChecker = setInterval(setPage, 500)
currentPage = 'Home'

function setPage() {
	let mobileNav = document.querySelector('nav.custom-nav-touch')
	let desktopNav = document.querySelector('nav.custom-nav-desktop')

	if (mobileNav && desktopNav) {
		clearInterval(navItemChecker)
		
		let mobileNavItems = Array.from(
			mobileNav.querySelectorAll('a.custom-nav-item')
		)
		let desktopNavItems = Array.from(
			desktopNav.querySelectorAll('a.custom-nav-item')
		)

		let navItems = [...desktopNavItems, ...mobileNavItems]

		navItems.forEach((item) => {
			// loops through nav items present in both desktop and mobile navs, resets
			item.classList.remove('current-item')
			if (item.innerText === currentPage) {
				// if nav item with matching currentPage found, updated to current item
				item.classList.add('current-item')
			}
		})
	}
}
