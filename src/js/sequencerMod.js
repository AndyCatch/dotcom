import { sequencer } from './sequencer.min'

const sequencers = []

function setCanvas() {
	// console.log('setCanvas')

	let sequenceTag = document.getElementsByClassName(
		'sequencer-project-square'
	)[0]

	// Clear any existing sequencers
	if (sequencers.length > 0) {
		sequencers.replaceChildren()
	}

	if (sequenceTag) {
		configs.forEach(function (cfg, i) {
			cfg.config.canvas = document.getElementById(configs[i].id) // need to have unique ids for the canvas
			// console.log(cfg.config.canvas)

			let parentNode = document.getElementById(configs[i].id).parentNode
			// console.log(parentNode)
			let loader = parentNode.getElementsByClassName('sequenceLoader')[0]
			// console.log(loader)

			cfg.config.imageLoad = function (e) {
				// console.log('imageLoad')
				loader.style.width = (e.count / e.total) * 100 + '%'
			}
			cfg.config.queueComplete = function (e) {
				// console.log('loadComplete')
				loader.style.width = '100%'
				loader.style.backgroundColor = 'rgba(255, 69, 0, 0)'
			}

			const s = sequencer.make(cfg.config)
			let side = Math.floor(
				cfg.config.canvas.parentNode.getBoundingClientRect().width
			) // will create a square canvas
			s.size(side, side)
			sequencers.push(s)
		})
	}
}

function resizeSequencer(event) {
	// console.log('resizeSequencer')
	sequencers.forEach(function (sequencer, i) {
		if (sequencer) {
			let side = Math.floor(
				sequencer.ctx.canvas.parentNode.getBoundingClientRect().width
			)
			sequencer.size(side, side)
		}
	})
}

export { resizeSequencer, setCanvas }
