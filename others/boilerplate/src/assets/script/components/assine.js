const assine = () => {
	// MODAL DE ASSINATURA
	// checa se o endereço é aplicável
	// const $select = $('.modal__inside_assine select');
	// $select.on('change', () => {
	// 	const val = $select.find(':selected')[0];
	// 	const price = $(val).data('price');
	// 	if (val.value === 'assine-impressa') {
	// 		$('fieldset.endereco').slideDown();
	// 	} else {
	// 		$('fieldset.endereco').slideUp();
	// 	}
	// 	// muda o valor
	// 	$('.assine__number p').html(`R$ <span>${price}</span> mensais`);
	// 	$('.assine__number').attr('data-price', price);

	// });

	// // checa se o email tem @
	// const $email = $('.modal__inside_assine input[name=email');
	// $email.on('keyup', (e) => {
	// 	const val = e.target.value;
	// 	if (val.includes('@')) {
	// 		$('.email_warning').slideUp();
	// 	} else {
	// 		$('.email_warning').slideDown();
	// 	}
	// });

	// // pega os dados quando clica no botão
	// $('.modal__inside_assine').on('click', 'button.assine', () => {
	// 	event.preventDefault();
	// 	// pega os dados
	// 	const input = {};
	// 	const $sel = $('.modal__inside_assine');
	// 	if ($('.modal__inside_assine select').val() === 'assine-impressa') {
	// 		input.rua = $sel.find('input[name=rua]').val();
	// 		input.bairro = $sel.find('input[name=bairro]').val();
	// 		input.cep = $sel.find('input[name=cep]').val();
	// 		input.cidade = $sel.find('input[name=cidade]').val();
	// 		input.uf = $sel.find('input[name=uf]').val();
	// 	}
	// 	input.name = $sel.find('input[name=name]').val();
	// 	input.email = $sel.find('input[name=email]').val();
	// 	input.price = $('.assine__number').data().price;

	// 	// checa se tem input vazio
	// 	if (!(Object.values(input).some(elem => elem === ''))) {
	// 		$('.button_warning').slideUp();
	// 	} else {
	// 		$('.button_warning').slideDown();
	// 	}

	// });
};

export default assine;
