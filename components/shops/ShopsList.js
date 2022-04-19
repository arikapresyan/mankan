import React from 'react';

import  Row from 'antd/lib/row';
import  Col from 'antd/lib/col';
import { useIntl } from 'react-intl';
import ShopItem from '../common/ShopItem';
import ShopImage1 from '../../assets/images/shop/ulnetsi.png';
import ShopImage2 from '../../assets/images/shop/mashtots.png';
import ShopImage3 from '../../assets/images/shop/abovyan.png';
import ShopImage4 from '../../assets/images/shop/dalma.png';

const shopImages = [ShopImage1, ShopImage2, ShopImage3, ShopImage4];

function ShopsList() {
  const { messages } = useIntl();
  return (
    <div className="shop_list">
      <Row gutter={[15, {
        xs: 15, sm: 15, md: 15, lg: 15, xl: 15, xxl: 15,
      }]}
      >
        {messages['local.shop_adresses'].map((shopInfo, index) => (
          <Col key={index} sm={12} md={12} lg={6} xl={6}>
            <ShopItem {...shopInfo} src={shopImages[index]} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ShopsList;
