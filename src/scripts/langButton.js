const button = document.querySelector('.radio-input');
const buttonEn = button.querySelector('#en');
const buttonEs = button.querySelector('#es');
console.log(buttonEn);
console.log(buttonEs);

const lang = document.querySelector('html').lang;

document.addEventListener('DOMContentLoaded', () => {
	if (lang == 'es') {
		buttonEs.checked = 'true';
	} else if (lang == 'en') {
		buttonEn.checked = 'true';
	}
});
document.addEventListener('change', () => {
	if (buttonEs.checked) {
		console.log('button es prendido');
        
	} else if (buttonEn.checked) {
		console.log('button en prendido');
	}
});
