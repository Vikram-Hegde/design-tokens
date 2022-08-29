//@ts-check

/** @type {HTMLInputElement | null} */
let range = document.querySelector('.range');

/** @type {HTMLHtmlElement | null} */
let html = document.querySelector('html');

range?.addEventListener('input', () => {
	html?.style.setProperty('--h', `${range?.value}`);
});
