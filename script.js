const hamburgerMenu = document.querySelector('.hamburger-menu')
const before = document.querySelector('.hamburger-menu :before')
const mainMenu = document.querySelector('.navbar ul')

function showHamburgerMenu() {
	mainMenu.style.display = 'flex'
	mainMenu.classList.toggle('shown')
	hamburgerMenu.classList.toggle('active')
}

hamburgerMenu.addEventListener('click', showHamburgerMenu)
