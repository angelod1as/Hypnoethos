// Modal
const modal = () => {
	const $carrinho = $('.modal__inside_carrinho');
	// const $assine = $('.modal__inside_assine');

	// ModalToggle! Não tire daqui!
	const modalToggle = () => {
		$('.modal').fadeToggle();
		$('body, html').toggleClass('noscroll');
	};

	// Footer modal
	$('footer').on('click', '.modal__carrinho', () => {
		modalToggle();
		$('.modal__close').show();
		// $assine.hide();
		$carrinho.show();
		$('.modal__carrinho').removeClass('.modal__carrinho_animate');
	});

	// Assine modal
	// $('#assine').on('click', '.modal__assine', (e) => {
	// 	e.preventDefault();
	// 	$('.modal__close').show();
	// 	$carrinho.hide();
	// 	$assine.show();
	// 	modalToggle();
	// });

	// Close modal
	$('.modal').on('click', '.modal__close', () => {
		modalToggle();
		$('.modal__close').hide();
		$carrinho.hide();
		// $assine.hide();
	});
};

export default modal;
