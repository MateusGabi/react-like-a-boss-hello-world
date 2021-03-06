const initialState = {
	inStock: false,
	products: [
		{
			category: 'Sporting Goods',
			price: '$49.99',
			stocked: true,
			name: 'Football'
		},
		{
			category: 'Sporting Goods',
			price: '$9.99',
			stocked: true,
			name: 'Baseball'
		},
		{
			category: 'Sporting Goods',
			price: '$29.99',
			stocked: false,
			name: 'Basketball'
		},
		{
			category: 'Electronics',
			price: '$99.99',
			stocked: true,
			name: 'iPod Touch'
		},
		{
			category: 'Electronics',
			price: '$399.99',
			stocked: false,
			name: 'iPhone 5'
		},
		{
			category: 'Electronics',
			price: '$199.99',
			stocked: true,
			name: 'Nexus 7'
		}
	]
};

const filterInStock = products => products.filter(product => product.stocked);

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH_TYPING':
			let products = initialState.products || [];
			products = products.filter(product => {
				return product.name
					.toLowerCase()
					.includes(action.payload.toLowerCase());
			});

			if (state.inStock) products = filterInStock(products);

			return {
				...state,
				products
			};
		case 'PRODUCTS_IN_STOCK':
			let _products = state.products || [];
			if (action.payload) _products = filterInStock(_products);
			else _products = initialState.products;

			return {
				...state,
				products: _products,
				inStock: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
