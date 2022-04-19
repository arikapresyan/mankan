import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function ProductImage({ src, id }) {
  return (
    <Link href="/product/[id]" as={`/product/${id}`}>
      <a className="prod_image">

        <img src={src} alt="" />
      </a>
    </Link>
  );
}

ProductImage.propTypes = {
  src: PropTypes.string,
  id: PropTypes.number,
};

export default memo(ProductImage);
