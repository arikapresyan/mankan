import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ProductOldPrice({ oldPrice, text }) {
  return (
    oldPrice && (
    <span className="old_price">
      {text}
    </span>
    )
  );
}

ProductOldPrice.propTypes = {
  oldPrice: PropTypes.any,
  text: PropTypes.string,
};

export default memo(ProductOldPrice);
