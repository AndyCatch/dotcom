function updateClock() {
  if (luxon) {
    //
    let locations = document.querySelectorAll(
      '.footer-container .clock-container'
    )

    locations.forEach((location) => {
      let clockStyle = location.querySelector('.clock-style')
      let cityName = location.querySelector('.cityName')
      let timeZone = location.getAttribute('data-timezone')
      let now = luxon.DateTime.now().setZone(timeZone)

      clockStyle.innerHTML = now.toFormat('HH:mm:ss')

      let hour = parseInt(now.toFormat('H'))

      if (hour >= 9 && hour <= 18) {
        cityName.classList.add('open')
      }
    })
  }
}

export { updateClock }
