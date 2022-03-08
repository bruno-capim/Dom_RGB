function changeMode() {
	changeClasses();
	changeText();
    mudaCorpo();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	//body.classList.toggle(darkModeClass);
	//footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Click on me!';
	const darkMode = 'Click on me!';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ';
}

function gerar_cor(opacidade = 1) {
    var o = Math.round,
    r = Math.random,
    s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
 }

function mudaCorpo(){
    document.getElementsByTagName('body')[0].style.backgroundColor = gerar_cor();
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);