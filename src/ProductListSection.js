import ProductListItem from './ProductListItem';
import PropTypes from 'prop-types';
import React from 'react';

const ProductListSection = ({ name, products }) => {
    return (
        <div>
            <div><b>{name}</b></div>
            <div>
                {
                    products.map(item => <ProductListItem {...{...item}} />)
                }
            </div>
        </div>
    );
};

ProductListSection.propTypes = {
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired
};

export default ProductListSection;