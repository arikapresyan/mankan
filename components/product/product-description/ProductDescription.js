import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

function ProductDescription({ product }) {
  const { messages } = useIntl();

  const { description } = product.langs[0];
  return description && (
    <div className="product_description_box">
      <h2>{messages['local.description']}</h2>
      <div className="description_text" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}


ProductDescription.propTypes = {
  product: PropTypes.object,
};

export default ProductDescription;
