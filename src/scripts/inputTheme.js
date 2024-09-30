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
	const Switch = document.querySelector('#theme-switch__checkbox');
	const root = document.documentElement;
	if (root.getAttribute('class') === 'light') {
		Switch.checked = false;
	} else if (root.getAttribute('class') === 'dark') {
		Switch.checked = true;
	}
});
