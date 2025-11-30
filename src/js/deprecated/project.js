/*–––––––––––––––This lives in Semplice –> Code Module in Each Project ––––––––––––––––––*/
var isProjectChecker = setInterval(isProject, 500)

function isProject() {
	let projectCover = document.getElementsByClassName('project-cover')[0]

	if (projectCover) {
		// console.log('project Cover')
		clearInterval(isProjectChecker)
		// fadeIn(projectCover)
	}
}

function fadeIn(projectCover) {
	console.log('project fadeIn')
	setTimeout(function () {
		if (projectCover) {
			projectCover.classList.add('project-cover-fade-in')
		}
	}, 500)
}
