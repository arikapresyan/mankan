import React  from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PropTypes from 'prop-types';
// import LazyLoad  from 'react-lazyload';
import IndexProductItem from '../common/index-product-item/IndexProductItem';

function ProductList({
  products,
}) {

  return (
    <div className="product_list">
      <Row gutter={[24, {
        xs: 24, sm: 24, md: 24, lg: 24,
      }]}
      >
        {products && products.map((product, index) => (

          // eslint-disable-next-line react/no-array-index-key
          <Col key={`catalog_ item ${index}`} sm={12} md={12} lg={12} xl={12} xxl={8}>

            {/*<LazyLoad height={375}>*/}
              <IndexProductItem product={product} />
            {/*</LazyLoad>*/}
          </Col>
        ))}
      </Row>
    </div>
  );
}


ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
