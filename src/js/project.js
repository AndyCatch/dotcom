/*–––––––––––––––This lives in Semplice –> Code Module in Each Project ––––––––––––––––––*/
var isProjectChecker = setInterval(isProject, 500)

let projectName = 'Verizon DBI'
let projectNav

function isProject() {
	let projectCover = document.getElementsByClassName('project-cover')[0]
	projectNav = Array.from(document.querySelectorAll('.project-inPage-nav a'))

	// Set up for testing
	// if (projectNav) {
	// 	clearInterval(isProjectChecker)
	// 	setCurrentProj()
	// }

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

			if (item.innerHTML === projectName) {
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
