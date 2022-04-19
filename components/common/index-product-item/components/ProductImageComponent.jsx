import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function ProductImageComponent({ imageURL, id }) {
  return (
    <Link href="/product/[id]" as={`/product/${id}`}>
      <a>
        <span className="prod_image">
          <img src={imageURL} alt="" />
        </span>
      </a>
    </Link>
  );
}

ProductImageComponent.propTypes = {
  imageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default memo(ProductImageComponent);
