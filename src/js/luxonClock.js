function updateClock() {
  if (luxon) {
    //
    let locations = document.querySelectorAll(
      '.footer-container .clock-container'
    )

    locations.forEach((location) => {
      let clock = location.querySelector('h1')
      let city = clock.getAttribute('data-city')
      let timeZone = location.getAttribute('data-timezone')
      let now = luxon.DateTime.now().setZone(timeZone)

      clock.innerHTML = `${city}` + ' ' + now.toFormat('HH:mm:ss')

      let hour = parseInt(now.toFormat('HH'))

      if (hour >= 9 && hour <= 18) {
        clock.classList.add('open')
      } else {
        clock.classList.remove('open')
      }
    })
  }
}

export { updateClock }
