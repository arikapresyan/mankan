import React from 'react';
import  Row from 'antd/lib/row';
import  Col from 'antd/lib/col';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';
import keys from '../../../constants/keys';
const GlobusImage = '/images/icons/globus.png';

function ProductUsefulness({ usefulness }) {
  const { messages } = useIntl();

  return (
    <div className="product_usefulness_box">
      <h2>{messages['local.usefulness']}</h2>
      <Row
        gutter={[32, {
          xs: 32, sm: 32, md: 32, lg: 32, xl: 32, xxl: 32,
        }]}
        className="product_usefulness_list"
      >

        {usefulness.map((us) => {
          const { name, description } = us.langs[0];
          const imgSrc = `${keys.HOST}/ProductUsageImages/${us.image}`;
          return (
            <Col lg={8} xl={8} key={nextId()}>
              <div className="product_usefulness_list_item">
                <div className="icon">
                  <img src={imgSrc || GlobusImage} alt={name} />
                </div>
                <div className="info">
                  <h3><a style={{ cursor: 'inherit' }}>{name}</a></h3>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </div>
            </Col>
          );
        })}

      </Row>
    </div>
  );
}

ProductUsefulness.propTypes = {
  usefulness: PropTypes.array,
};

export default ProductUsefulness;
