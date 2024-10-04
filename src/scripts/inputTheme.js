const themeSwitch = document.getElementById('theme-switch');
const checkbox = document.getElementById('theme-switch__checkbox');
const htmlTheme = document.querySelector('html');

setTimeout(() => {
	if (htmlTheme.classList.value == 'dark') {
		checkbox.checked = true;
	}
}, 10);

document.addEventListener('DOMContentLoaded', () => {
	const themeSwitch = document.querySelector('#theme-switch__checkbox');
	const root = document.documentElement;

	themeSwitch.addEventListener('click', toggleTheme);

	function toggleTheme() {
		const setTheme = themeSwitch.checked ? 'dark' : 'light';

		root.setAttribute('class', setTheme);
	}
});
document.addEventListener('change', () => {
	const themeSwitch = document.querySelector('#theme-switch__checkbox');
	if (themeSwitch.checked === true) {
		window.localStorage.theme = 'dark';
	} else if (themeSwitch.checked === false) {
		window.localStorage.theme = 'light';
	}
});

document.addEventListener('DOMContentLoaded', () => {
	var theme = window.localStorage.theme;
	const themeSwitch = document.querySelector('#theme-switch__checkbox');
	if (theme === 'dark') {
		themeSwitch.checked = true;
	} else if (theme === 'light') {
		themeSwitch.checked = false;
	}
});

/* Header change for mobile */
const button = document.getElementById('burger');
const header = document.getElementById('headerMobile');
const navItems = document.getElementById('navMobile');

button.addEventListener('click', activate);

function activate() {
	if (button.checked === true) {
		header.style.display = 'flex';
		navItems.style.display = 'flex';
		header.style.animation = 'fade-in .5s forwards';
	} else {
		navItems.style.display = 'none';
		header.style.animation = 'fade-out .5s forwards';
		setTimeout(() => {
			header.style.display = 'none';
		}, 300);
	}
}

document.querySelector('main').addEventListener('click', () => {
	navItems.style.display = 'none';
	header.style.animation = 'fade-out .5s forwards';
	setTimeout(() => {
		header.style.display = 'none';
	}, 300);
	button.checked = false;
});

window.addEventListener('resize', () => {
	if (window.innerWidth >= 764) {
		navItems.style.display = 'none';
		header.style.display = 'none';
		button.checked = false;
	}
});
