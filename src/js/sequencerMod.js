import { sequencer } from './libraries/sequencer'

const sequencers = []

function setCanvas() {
	let sequenceTag = document.getElementsByClassName('sequencer-project-square')[0]

	// Tear down sequencers from a previous page (e.g. after a Semplice transition)
	sequencers.forEach((s) => s.destroy())
	sequencers.length = 0

	if (sequenceTag && typeof configs !== 'undefined') {
		// Define sequencer configurations.
		// Configs are an array of objects, each containing an id and config for a sequencer instance.
		configs.forEach(function (cfg, i) {
			cfg.config.canvas = document.getElementById(configs[i].id) // need to have unique ids for the canvas
			if (!cfg.config.canvas) return // config for a canvas that isn't on this page

			let parentNode = cfg.config.canvas.parentNode
			let loader = parentNode.getElementsByClassName('sequenceLoader')[0]

			cfg.config.imageLoad = function (e) {
				loader.style.width = (e.count / e.total) * 100 + '%'
			}
			cfg.config.queueComplete = function (e) {
				loader.style.width = '100%'
				loader.style.backgroundColor = 'rgba(255, 69, 0, 0)'
			}

			const s = sequencer.make(cfg.config)
			let side = Math.floor(cfg.config.canvas.parentNode.getBoundingClientRect().width) // will create a square canvas
			s.size(side, side)
			sequencers.push(s)
		})
	}
}

function resizeSequencer(event) {
	sequencers.forEach(function (sequencer, i) {
		if (sequencer) {
			let side = Math.floor(sequencer.ctx.canvas.parentNode.getBoundingClientRect().width)
			sequencer.size(side, side)
		}
	})
}

export { resizeSequencer, setCanvas }
