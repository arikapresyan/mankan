import React from 'react';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import IndexProductItem from './index-product-item/IndexProductItem';


function AccompanyingProductList({ products }) {
  return (
    <div className="accompanying_product_list">
      <Row
        gutter={[8, {
          xs: 8, sm: 16, md: 16, lg: 16,
        }]}
      >
        {products.map(((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Col xs={12} key={`mobtle_catalog_list${index}`}>

            <LazyLoad height={355}>
              <IndexProductItem mode="accompanying" product={product} />
            </LazyLoad>
          </Col>
        )))}
      </Row>
    </div>
  );
}


AccompanyingProductList.propTypes = {
  products: PropTypes.arrayOf(Array),
};

export default AccompanyingProductList;
