const button = document.querySelector('.radio-input');
const buttonEn = button.querySelector('#en');
const buttonEs = button.querySelector('#es');

const lang = document.querySelector('html').lang;

document.addEventListener('DOMContentLoaded', () => {
	if (lang == 'es') {
		buttonEs.checked = 'true';
	} else if (lang == 'en') {
		buttonEn.checked = 'true';
	}
});
