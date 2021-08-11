// Semplice guidance
const desktopWide = window.matchMedia('screen and (min-width: 1170px)')

const desktop = window.matchMedia(
  'screen and (max-width: 1169px) and (min-width: 992px)'
)

const tabletWide = window.matchMedia(
  'screen and (max-width: 991px) and (min-width: 768px) and (hover: none)'
)

const tablet = window.matchMedia(
  'screen and (max-width: 767px) and (min-width: 544px) and (hover: none)'
)

const mobile = window.matchMedia(
  'screen and (max-width: 543px) and (hover: none)'
)

const devices = [desktopWide, desktop, tabletWide, tablet, mobile]
const desktops = [desktopWide, desktop]
const tablets = [tabletWide, tablet]

export {
  desktopWide,
  desktop,
  tabletWide,
  tablet,
  mobile,
  devices,
  desktops,
  tablets,
}

// const iPad = window.matchMedia(
//   '(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (hover: none)'
// )

// const iPadProLandscape = window.matchMedia(
//   'screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)'
// )

// const nonRetinaScreen = window.matchMedia(
//   'screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)'
// )

// const retinaScreen = window.matchMedia(
//   'screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)'
// )
