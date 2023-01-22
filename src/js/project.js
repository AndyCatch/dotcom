/*–––––––––––––––This lives in Semplice –> Code Module in Each Project ––––––––––––––––––*/
var isProjectChecker = setInterval(isProject, 500)

let projectName = 'Vision'
let projectNav

function isProject() {
	let projectCover = document.getElementsByClassName('project-cover')[0]
	projectNav = Array.from(document.querySelectorAll('.project-inPage-nav a'))

	if (projectCover) {
		clearInterval(isProjectChecker)
		fadeIn(projectCover)
		setCurrentProj()
	}
}

function setCurrentProj() {
	if (projectNav.length > 0) {
		projectNav.forEach((item) => {
			item.classList.remove('current-project')

			let project = item.dataset.project

			if (project === projectName) {
				item.classList.add('current-project')
			}
		})
	}
}

function fadeIn(projectCover) {
	setTimeout(function () {
		if (projectCover) {
			projectCover.classList.add('project-cover-fade-in')
		}
	}, 1000)
}
