import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';


function ShopItem({
  address,
  phone,
  businessHours,
  src,
}) {
  const { messages } = useIntl();
  return (
    <div className="shop_item">
      <div className="shop_img">
        <img src={src} alt="" />
      </div>
      <div className="shop_info">
        <div className="shop_address">
          {address}
        </div>
        <div className="shop_info_item">
          {messages['local.Phone']}
          :
          <span>{phone}</span>
        </div>
        <div className="shop_info_item">
          {messages['local.Business_hours']}
          :
          <span>{businessHours}</span>
        </div>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  businessHours: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,

};
export default ShopItem;
