import React from 'react';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import PropTypes from 'prop-types';
import IndexProductItem from '../../common/index-product-item/IndexProductItem';

function MobileProductList({ products }) {
  return (
    <div className="mobile_prod_list">
      <Row
        gutter={[8, {
          xs: 8, sm: 16, md: 16, lg: 16,
        }]}
      >
        {products.map((product, index) => (
          <Col xs={12}>
            <IndexProductItem
              key={`${product.id}___${index}`}
              product={product}
              mode="mobil"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

MobileProductList.propTypes = {
  products: PropTypes.arrayOf(Array),
};
export default MobileProductList;
