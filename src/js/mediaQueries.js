const iPad = window.matchMedia(
  '(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (hover: none)'
)
const iPadPortrait = window.matchMedia(
  '(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)'
)
const iPadLandscape = window.matchMedia(
  '(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)'
)

export { iPad, iPadPortrait, iPadLandscape }
