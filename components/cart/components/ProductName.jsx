import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function ProductName({ name, id }) {
  return (
    <Link href="/product/[id]" as={`/product/${id}`}>
      <a className="product_name">

        {name}
      </a>
    </Link>
  );
}

ProductName.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default memo(ProductName);
