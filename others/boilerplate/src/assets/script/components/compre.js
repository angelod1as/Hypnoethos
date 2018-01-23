const compre = () => {

	// Globais (nesse escopo hahaha)
	// jquery
	const $globalQtd = $('.form_qtd');
	const cart = [];
	const $item = {
		parent: '',
		price: '',
		qtd: '',
		value: '',
		cart: '',
	};

	// ------- //
	// FUNÇÕES //
	// ------- //

	const calculate = () => {
		const val = parseInt($item.qtd.val(), 10);
		const price = $item.price.find(':selected').data().price;
		const emptyZero = val !== '' && val !== 0 && !isNaN(val);
		$($item.value).html(`R$ ${emptyZero ? price * $item.qtd.val() : price},00`);
		$item.value.attr('data-value', price);
	};

	const select = (el) => {
		$item.parent = $(el.target).closest('.loja__item');
		$item.num = $item.parent.find('.loja__numero');
		$item.price = $item.parent.find('.loja__select');
		$item.qtd = $item.parent.find('.form_qtd');
		$item.value = $item.parent.find('.preco_num');
		$item.cart = $item.parent.find('.button__carrinho');
	};

	const pushCart = () => {
		// cria um carrinho temporário
		const tempCart = {};

		tempCart.num = $item.num.text().split('#')[1];
		tempCart.qtd = parseInt($item.qtd.val(), 10);
		tempCart.price = $item.price.find(':selected').data().price;
		tempCart.value = $item.parent.find('.preco_num').data().value;

		cart.push(tempCart);
	};

	// ----------- //
	// QUANTIDADES //
	// ----------- //

	// zera on load
	$globalQtd.val(1);

	// observa o focusout e zera.
	$globalQtd.on('focusout', (e) => {
		if (e.currentTarget.valueAsNumber === '' || isNaN(e.currentTarget.valueAsNumber) || e.currentTarget.valueAsNumber === 0) {
			$globalQtd.val(1);
		} else {
			calculate();
		}
	});

	// // Seta o que estamos trabalhando no clique.
	$('.loja__item').on('click', (e) => {
		select(e);
	});

	// -------- //
	// DROPDOWN //
	// -------- //

	$('.loja__select').on('change', () => {
		calculate();
	});

	// -------- //
	// CARRINHO //
	// -------- //

	// CARRINHO
	$('.button__carrinho').on('click', (e) => {
		// jQuery
		select(e);

		// se não 0, pusha --- Vai pra antes da linha 73
		if (parseInt($item.qtd.val(), 10) !== 0) {
			// animação
			$('.modal__carrinho').addClass('animate').delay(300).queue(() => {
				$('.modal__carrinho').removeClass('animate');
				$('.modal__carrinho').dequeue();
			});

			if (cart.length > 0) {
				let hasItem = false;
				for (let i = 0; i < cart.length; i++) {
					if (cart[i].num === $item.num.text().split('#')[1]) {
						cart[i].qtd += parseInt($item.qtd.val(), 10);
						hasItem = true;
					}
				}
				if (!hasItem) {
					pushCart();
				}
			} else {
				pushCart();
			}
		}
	});


	$('footer').on('click', '.modal__carrinho', () => {
		const $table = $('.modal__inside_carrinho').find('.table');

		// limpando
		$table.html('<tr class="first"><th>Número</th><th>Preço unitário</th><th>Quantia</th><th>Total</th></tr>');

		// preenchendo a tabela
		cart.forEach((obj) => {
			$table.find('.first').after(`
				<tr>
					<td>${obj.num}</td>
					<td>${obj.price}</td>
					<td>${obj.qtd}</td>
					<td>${obj.price * obj.qtd}</td>
				</tr>
			`);
		});

	});

};

export default compre;
