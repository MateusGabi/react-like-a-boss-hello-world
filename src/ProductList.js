import ProductListSection from './ProductListSection';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'mylibjs';

const ProductsList = ({ products }) => {
	const grouped = groupBy('category')(products);

	return (
		<div>
			{Object.keys(grouped).map(name => (
				<ProductListSection name={name} products={grouped[name]} />
			))}
		</div>
	);
};

ProductsList.propTypes = {
	products: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		products: state.products
	};
};

export default connect(mapStateToProps)(ProductsList);
