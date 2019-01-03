const search = string => ({
	type: 'SEARCH_TYPING',
	payload: string
});

const inStock = bool => ({
	type: 'PRODUCTS_IN_STOCK',
	payload: bool
});

export default {
	search,
	inStock
};
