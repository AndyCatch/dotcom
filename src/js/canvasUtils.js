const sizer = function (canvas) {
	const windowWidth = window.innerWidth
	const windowHeight = window.innerHeight
	const dpi = window.devicePixelRatio

	const square = Math.max(windowWidth, windowHeight)

	canvas.width = square * dpi
	canvas.height = square * dpi

	canvas.style.width = square + 'px'
	canvas.style.height = square + 'px'
}

export { sizer }
