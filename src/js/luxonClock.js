// Footer clocks – uses the browser's built-in Intl API (no Luxon needed)

let yearSet = false

// Returns { year, hour, minute, second } as zero-padded strings for a time zone,
// e.g. timeIn('America/New_York') → { hour: '07', minute: '42', second: '09', year: '2026', ... }
function timeIn(timeZone) {
	const parts = new Intl.DateTimeFormat('en-GB', {
		timeZone,
		hourCycle: 'h23',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	}).formatToParts(new Date())

	return Object.fromEntries(parts.map((p) => [p.type, p.value]))
}

function updateClock() {
	let locations = document.querySelectorAll('.footer-container .clock-container')

	locations.forEach((location) => {
		let clock = location.querySelector('p')
		let city = clock.getAttribute('data-city')
		let timeZone = location.getAttribute('data-timezone')
		let now = timeIn(timeZone)

		clock.innerHTML = `${city} ${now.hour}:${now.minute}:${now.second}`

		let hour = parseInt(now.hour)

		if (hour >= 9 && hour <= 18) {
			clock.classList.add('open')
		} else {
			clock.classList.remove('open')
		}
	})

	if (!yearSet) {
		getCurrentYear()
	}
}

function getCurrentYear() {
	let currentYear = document.getElementById('currentYear')

	if (currentYear) {
		currentYear.innerHTML = timeIn('America/New_York').year
		yearSet = true
	}
}

export { updateClock }
