import React, { useState } from 'react';
import Button from 'antd/lib/button';
import  Icon  from 'antd/lib/icon';

import { useIntl } from 'react-intl';
import BuyProductModal from '../modals/buy-product-modal/BuyProductModal';
import ProdImage from '../../assets/images/slider/bag.png';

function RecommendedProductItem() {
  const [visible, setVisible] = useState(false);
  const { messages } = useIntl();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="recommended_item">
      <div className="product_image">
        <img src={ProdImage} alt="" />
      </div>
      <div className="product_info">
        <div className="prod_size">
          20 x 40 x 30 սմ
        </div>
        <div className="prod_price">
          9900
          {' '}
          {messages['local.dr']}
          .
        </div>
      </div>
      <Button className="add_to_cart" onClick={showModal}>
        <Icon className="icon" type="shopping" />
        {messages['local.add']}
      </Button>
      {visible

        ? (
          <BuyProductModal
            handleHideModal={handleCancel}
          />
        ) : null}
    </div>
  );
}


export default RecommendedProductItem;
