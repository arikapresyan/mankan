import React from 'react';

import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import IndexProductItem from '../../common/index-product-item/IndexProductItem';

function MobileWishlist({ products, keys }) {
  return (
    <div className="wishlist_prod_list_mobile">

      {keys.map((key) => (
        <Row gutter={[16, {
          xs: 16, sm: 16, md: 16, lg: 16,
        }]}
        >
          <Col xs={12}>
            <IndexProductItem product={products[key]} mod="mobil" />
          </Col>
        </Row>
      ))}
    </div>
  );
}


MobileWishlist.propTypes = {
  products: PropTypes.object,
  keys: PropTypes.array,
};

MobileWishlist.defaultProps = {
  products: {},
  keys: [],
};

export default MobileWishlist;
