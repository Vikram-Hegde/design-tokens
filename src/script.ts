let range = document.querySelector('.range') as HTMLInputElement;

let html = document.querySelector('html') as HTMLHtmlElement;

range?.addEventListener('input', () => {
	html?.style.setProperty('--h', `${range?.value}`);
});

function getThemePreference() {
	let theme: boolean | string = window.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;
	theme = theme ? 'light' : 'dark';
	document
		.querySelectorAll('[generated-colors~="invert"]')
		.forEach((gen) => gen?.setAttribute('generated-colors', `invert ${theme}`));
}
getThemePreference();

window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', getThemePreference);
