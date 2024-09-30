const themeSwitch = document.getElementById('theme-switch');
const checkbox = document.getElementById('theme-switch__checkbox');

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
