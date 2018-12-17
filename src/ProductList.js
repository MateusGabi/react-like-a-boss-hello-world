import ProductListItem from './ProductListItem';
import ProductListSection from './ProductListSection';
import PropTypes from 'prop-types';
import React from 'react';
import { groupBy } from 'mylibjs'

const ProductsList = ({products}) => {
    const grouped = groupBy('category')(products)
    
    return (
        <div>
        {
            Object.keys(grouped).map(name => (
                <ProductListSection name={name} products={grouped[name]} />
            ))
        }
        </div>
    )
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductsList;