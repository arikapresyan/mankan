import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ProductQuantity from '../../common/ProductQuantity';

function ProductQuantityBox({ count, handleChange, xmlCount }) {
  return (
    <div className="product_quantity_box">
      <ProductQuantity
        value={count}
        onChange={handleChange}
        xmlCount={xmlCount}
      />
    </div>
  );
}
ProductQuantityBox.propTypes = {
  count: PropTypes.number,
  handleChange: PropTypes.func,
  xmlCount: PropTypes.number,
};

export default memo(ProductQuantityBox);
