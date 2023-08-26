import { sequencer } from './sequencer.min'

const sequencers = []

function setCanvas() {
	console.log('setCanvas')

	let sequenceTag = document.getElementsByClassName('sequencer-project-square')[0]
	// Clear any existing sequencers
	if(sequencers.length > 0){
		sequencers.replaceChildren()
	}

	if(sequenceTag){
		console.log(sequenceTag)
			configs.forEach(function (cfg, i) {
				cfg.config.canvas = document.getElementById(configs[i].id) // need to have unique ids for the canvas
		
				const s = sequencer.make(cfg.config)
				let side = Math.floor(cfg.config.canvas.parentNode.getBoundingClientRect().width) // will create a square canvas
				s.size(side,side)
				sequencers.push(s)
			})
	}
}

function resizeSequencer(event) {
	console.log('setSequencer')
	sequencers.forEach(function (sequencer, i) {
		console.log(sequencer)
		if (sequencer) {
			let side = Math.floor(
				sequencer.ctx.canvas.parentNode.getBoundingClientRect().width
			)
			sequencer.size(side, side)
		}
	})
}

export { resizeSequencer,setCanvas }