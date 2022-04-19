import React from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import PropTypes from 'prop-types';
import IndexProductItem from '../common/index-product-item/IndexProductItem';
// not using now

function RecommendedList({ recommendedList }) {
  return (

    <div className="recommended_list">
      <Row gutter={[8, {
        xs: 8, sm: 16, md: 16, lg: 16,
      }]}
      >
        {recommendedList.map((product) => (
          <Col xs={12} md={12} lg={8} xl={6} key={`recommendedList_${product.id}`}>
            <IndexProductItem product={product} />
            <IndexProductItem mode="accompanying" product={product} />
          </Col>
        ))}


      </Row>
    </div>
  );
}


RecommendedList.propTypes = {
  recommendedList: PropTypes.arrayOf(Array),
};

RecommendedList.defaultProps = {
  recommendedList: [],
};

export default RecommendedList;
