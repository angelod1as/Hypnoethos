import jQuery from 'jquery';
// import buttonScroll from './components/buttonScroll';

// export for others scripts to use
window.$ = jQuery;
window.jQuery = jQuery;

$(document).ready(() => {
	$('.modal__btn').on('click', () => {
		$('.menu').toggleClass('modal');
	});
});
