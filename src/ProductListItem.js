import PropTypes from 'prop-types';
import React from 'react';

const ProductListItem = ({name, price}) => {
    return (
        <div>
            <p>{name} {price}</p>
        </div>
    );
};

ProductListItem.propTypes = {
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};

export default ProductListItem;