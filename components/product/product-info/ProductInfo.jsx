import React from 'react';

import Button from 'antd/lib/button'
import Tooltip from 'antd/lib/tooltip'

import PropTypes from 'prop-types';
import ProductQuantity from '../../common/ProductQuantity';
import OneProductSlider from '../ProductSlider';
import InfoIcon from '../../../assets/images/icons/info.png';
import useProductFullInfo from './useProductFullInfo';


function ProductInfo({
  oneProduct, user, wishlistChangeItemAction, inWishlist,
}) {
  const {
    text,
    setCount,
    addToCart,
    addToCartAndRedirect,
    text2,
    count,
    messages,
    bonus,
    batteryPrice,
    AddBattery,
    name,
    LastPrice,
    Price,
    isInCart,
    changeWishlist,
    xmlCount,
  } = useProductFullInfo({ product: oneProduct, user, wishlistChangeItemAction });


  return (
    <div className="product_info_wrapper">
      <div className="product-title">
        <h1>{name}</h1>
      </div>

      <div className="product_price_box product_info_item clearfix">
        <Price />
        <LastPrice />
      </div>
      <OneProductSlider oneProduct={oneProduct} />
      <div className="product_quantity_box product_info_item clearfix">
        <div className="borderBottom">
          <div className="product_quantity_title">
            {messages['local.quantity']}
          </div>
          <ProductQuantity value={count} onChange={setCount} xmlCount={xmlCount} />
        </div>

        <div className="boxShadowBlock">
          <AddBattery />
          {batteryPrice && (
          <div className="bonus_quantity">
            <Tooltip
              placement="bottom"
              title={text}
              className="info_tooltip"
            >
              {batteryPrice}
              {' '}
              {messages['local.dr']}
              ․
              <span>
                <img src={InfoIcon} alt="" />
              </span>
            </Tooltip>
          </div>
          )}
        </div>

      </div>

      <div className="bonus_box product_info_item clearfix">
        <p>{messages['local.bonus']}</p>
        <div className="bonus_quantity">
          {bonus}
          {' '}
          {bonus ? `${messages['local.dr']}․` : ''}
          <div className="bonus_quantity">
            <Tooltip placement="bottom" title={text2} className="info_tooltip">
              <span>
                <img src={InfoIcon} alt="" />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>

      {!!xmlCount && (
      <div className="btn_group clearfix">

        <Button className="buy_now_btn" disabled={isInCart} onClick={addToCart}>

          {' '}
          { isInCart ? messages['local.already_in_cart']
            : messages['local.add_to_cart']}
        </Button>

        <Button className={`add_to_wishlist ${inWishlist ? 'selected' : ''}`} onClick={changeWishlist} />
        <Button className="add_to_cart_btn" onClick={addToCartAndRedirect}>
          {/* <Icon type="shopping" />
          {' '} */}
          {messages['local.buy_now']}
          {' '}
        </Button>

      </div>
      ) }
    </div>
  );
}

ProductInfo.propTypes = {
  oneProduct: PropTypes.objectOf(Object),
  user: PropTypes.objectOf(Object),
  wishlistChangeItemAction: PropTypes.func.isRequired,
  inWishlist: PropTypes.bool.isRequired,
};


export default ProductInfo;
