const iPad = window.matchMedia(
  '(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (hover: none)'
)

const iPadProLandscape = window.matchMedia(
  'screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)'
)

const nonRetinaScreen = window.matchMedia(
  'screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)'
)

const retinaScreen = window.matchMedia(
  'screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)'
)

const desktop = window.matchMedia('(min-width:1281px)')

export { iPad, iPadProLandscape, nonRetinaScreen, retinaScreen, desktop }
