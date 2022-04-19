import React, { memo } from 'react';
import PropTypes from 'prop-types';
import  Button  from 'antd/lib/button';

function BuyProductComponent({ type, handleBuy, innerText }) {
  return (

    <Button type={type} className="buy_btn" onClick={handleBuy}>
      {innerText}
    </Button>

  );
}

BuyProductComponent.propTypes = {
  type: PropTypes.string,
  handleBuy: PropTypes.func.isRequired,
  innerText: PropTypes.any,
};

export default memo(BuyProductComponent);
