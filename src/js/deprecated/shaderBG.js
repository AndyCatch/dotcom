// import { sizer } from './canvasUtils'
// import { frag } from './shaders/frag'

// var canvasChecker = setInterval(checkCanvas, 500)

// let glslCanvasTag = document.createElement('script')
// glslCanvasTag.src =
// 	'https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js'
// document.body.appendChild(glslCanvasTag)

// window.addEventListener('resize', (event) =>{
// let canvasTag = document.getElementById('shaderBG')
// if (canvasTag) {
// 	sizer(canvasTag)
// }
// })

// function checkCanvas() {
// 	let canvasTag = document.getElementById('shaderBG')

// 	if (canvasTag) {
// 		// console.log('Canvas')
// 		clearInterval(canvasChecker)
// 		let sandbox = new GlslCanvas(canvasTag)
// 		sandbox.load(frag)
// 		sandbox.setUniform('seed', Math.random())
// 		sizer(canvasTag)
// 	} else {
// 		setTimeout(() => {
// 			// console.log('No Canvas')
// 			clearInterval(canvasChecker)
// 		}, 1500)
// 	}
// }
