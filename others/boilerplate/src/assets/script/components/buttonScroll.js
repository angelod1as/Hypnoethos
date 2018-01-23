const buttonScroll = () => {
	// // Aparece menu 'carrinho' no scroll
	// $(document).on('scroll', () => {
	// 	// pegando o tamanho + margem do header
	// 	const headerH = parseInt($('header')
	// 		.height(), 10) + parseInt($('header')
	// 		.css('margin-bottom'), 10);
	// 	// pegando o scroll atual
	// 	const scroll = $(document).scrollTop();
	// 	// pegando posição da div - headerH
	// 	const divTop = $('#compre').offset().top - headerH;
	// 	// FadeIn se o scoll chega no divTop
	// 	if (scroll > divTop) {
	// 		$('footer .top').fadeIn(200).css('display', 'flex');
	// 	} else {
	// 		$('footer .top').fadeOut(200);
	// 	}
	// });
};

export default buttonScroll;
