import React from 'react';
import  Row from 'antd/lib/row';
import  Col from 'antd/lib/col';
import PropTypes from 'prop-types';
import IndexProductItem from '../common/index-product-item/IndexProductItem';


function WishlistItems({
  products,
}) {
  return (
    <div className="wishlist_product_list">
      <Row gutter={[40, {
        xs: 32, sm: 32, md: 32, lg: 32,
      }]}
      >
        {products.map((product) => (
          <Col sm={12} md={12} lg={8} xxl={6} key={`wishlist${product.id}`}>
            <IndexProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

WishlistItems.propTypes = {
  products: PropTypes.arrayOf(Array),
};

WishlistItems.defaultProps = {
  products: {},
};
export default WishlistItems;
