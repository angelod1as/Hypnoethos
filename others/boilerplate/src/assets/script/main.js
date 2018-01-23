import jQuery from 'jquery';
import buttonScroll from './components/buttonScroll';
import modal from './components/modal';
import assine from './components/assine';
import compre from './components/compre';

// export for others scripts to use
window.$ = jQuery;
window.jQuery = jQuery;


// LOJA
$(document).ready(() => {
	// Avoid enter-submit
	$(window).keydown((event) => {
		if (event.keyCode === 13) {
			event.preventDefault();
		}
	});
	// modal toggle
	modal();

	// específico loja
	if (document.URL.includes('loja')) {
		buttonScroll();
		assine();
		compre();
	}

	// download na home
	$('.form.download').on('click', (event) => {
		const url = `${window.location.href}others/tf.pdf`;
		event.preventDefault();
		window.open(url, '_blank');
	});
});

// Change footer menu
const url = window.location.href;

if (url.includes('loja')) {
	const button = $('.button.left');
	button.attr('href', './');
	button.find('.inside').html('<p>home</p>');
}

if (url.includes('colabore')) {
	const button = $('.button.right');
	button.attr('href', './');
	button.find('.inside').html('<p>home</p>');
}
