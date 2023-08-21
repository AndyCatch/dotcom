import { sequencer } from './sequencer.min'

// const list = [
// 	'KIDA01.png',
// 	'KIDA02.png',
// 	'KIDA03.png',
// 	'KIDA04.png',
// 	'KIDA05.png',
// 	'KIDA06.png',
// 	'KIDA07.png',
// 	'KIDA08.png',
// 	'KIDA09.png',
// 	'KIDA10.png',
// 	'KIDA11.png',
// 	'KIDA12.png',
// 	'KIDA13.png',
// 	'KIDA14.png',
// 	'KIDA15.png',
// 	'KIDA16.png',
// ].map((e) => {
// 	return '../images/letters/' + e
// })

const configs = []
const sequencers = []
const containers = []

// https://andycatch.com/proto/wp-content/uploads/2023/08/KIDA01.png
// https://andycatch.com/proto/wp-content/uploads/2023/08/KIDA16.png

configs.push({
	// from: './images/letters/KIDA01.png', // Test
	// to: './images/letters/KIDA16.png',
	from: 'https://andycatch.com/proto/wp-content/uploads/2023/08/KIDA01.png',
	to: 'https://andycatch.com/proto/wp-content/uploads/2023/08/KIDA16.png',
	playMode: 'hover',
	direction: 'x',
	showLoadedImages: true,
	scaleMode: 'contain',
})

window.addEventListener('load', (event) => {
	console.log('Sequencer loaded')

	setCanvas()
})

function setCanvas() {
	configs.forEach(function (cfg, i) {
		cfg.canvas = document.querySelector('canvas') // need to have unique ids for the canvas

		const s = sequencer.make(cfg)
		s.size(
			cfg.canvas.parentNode.offsetWidth,
			cfg.canvas.parentNode.offsetHeight
		)
		sequencers.push(s)
	})
}

function resizeSequencer(event) {
	sequencers.forEach(function (sequencer, i) {
		if (sequencer) {
			let side = Math.floor(
				sequencer.ctx.canvas.parentNode.getBoundingClientRect().width
			)
			sequencer.size(side, side)
		}
	})
}

export { resizeSequencer }
