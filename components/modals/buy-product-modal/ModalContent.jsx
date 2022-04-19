import React, { useMemo } from 'react';


import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import Tooltip from 'antd/lib/tooltip';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import PropTypes from 'prop-types';
import InfoIcon from '../../../assets/images/icons/info.png';
import ProductQuantity from '../../common/ProductQuantity';
import useBuyProductModal from './useBuyProductModal';
import { getProductBoxSize } from '../../../constants/utils';


function ModalContent({
  wishlistChangeItemAction,
  handleHideModal,
  localChanges,
  inWishlist,
  product,
  isInCart,
  bonus,
}) {
  const {
    addToCartAndRedirect,
    addToCart,
    bonusText,
    batteryText,
    brandName,
    sizeText,
    photo,
    battery,
    text,
    text2,
    setCount,
    xmlPrice,
    percent,
    productAga,
    messages,
    count,
    hasBattery,
    setHasBattery,
    xmlCount,
    xmlBarCode,
    priceBayCount,
  } = useBuyProductModal({
    product, localChanges, handleHideModal, bonus,
  });

  const boxSizeText = useMemo(() => getProductBoxSize(product.boxSize), [product.boxSize, getProductBoxSize]);


  const characteristics = [
    {
      visible: boxSizeText,
      name: messages['local.box_size'],
      text: boxSizeText + messages['local.sm'],
    },
    {
      visible: sizeText?.trim(),
      name: messages['local.size'],
      text: `${sizeText} ${messages['local.sm']}`,
    }, {
      visible: true,
      name: messages['local.age'],
      text: `${productAga} ${messages['local.shortYear']}․`,
    },
    {
      visible: brandName,
      name: messages['local.brand'],
      text: brandName,
    }, {
      visible: battery,
      name: messages['local.battery'],
      text: batteryText,
    },
    {
      visible: true,
      name: messages['local.barcode'],
      text: xmlBarCode,
    },
  ];


  return (
    <Row gutter={30} className="modal_content">
      <Col sm={24} md={12} lg={6}>
        <div className="prod_image">
          <img src={photo.url} alt={photo.alt} title={photo.title} />
        </div>
      </Col>
      <Col sm={24} md={12} lg={9} className="characteristics_list_web">
        <div className="characteristics_list">
          {characteristics.map(({ visible, name, text: content }, index) => {
            if (!visible) return null;
            return (
              <div className="characteristics_list_item" key={index}>
                <div className="characteristic_name">{name}</div>
                <div className="characteristic_description">
                  {content}
                </div>
              </div>
            );
          })}

        </div>
      </Col>
      <Col sm={24} md={12} lg={9}>
        <div className="product_info">
          <div className="product_price_box product_info_item clearfix">
            <span className="product_price">
              {priceBayCount}
              {' '}
              {messages['local.dr']}
              ․
              {percent > 0 && (
              <span className="old_price">
                {xmlPrice * count}
                {messages['local.dr']}
                ․
              </span>
              )}
            </span>

          </div>


          <div className="product_quantity_box product_info_item clearfix">
            <div className="product_quantity_title">
              {messages['local.quantity']}
            </div>
            <ProductQuantity value={count} onChange={setCount} xmlCount={xmlCount} />

          </div>

          {battery ? (
            <div className="bonus_box product_info_item clearfix">


              <div className="add_prod">
                <Checkbox
                  checked={hasBattery}
                  onChange={(
                    { target: { checked } },
                  ) => setHasBattery(checked)}
                >
                  {messages['local.add_batteries']}

                </Checkbox>


              </div>
              {battery && (
                <div className="bonus_quantity">
                    {(battery.price * battery.ProductAccessoriesMap.count) * count}
                    {' '}
                    {messages['local.dr']}
                  .
                  <Tooltip
                    placement="bottom"
                    title={text}
                    className="info_tooltip"
                  >
                    <span>
                      <img src={InfoIcon} alt="" />
                    </span>
                  </Tooltip>

                </div>
              )}


            </div>
          ) : null}
          <div className="bonus_box product_info_item clearfix">
            <p>{messages['local.bonus']}</p>
            <div className="bonus_quantity">

              {bonusText}
              {' '}
              {bonusText && messages['local.dr']}
              ․
              <Tooltip placement="bottom" title={text2} className="info_tooltip">
                <span>
                  <img src={InfoIcon} alt="" />
                </span>
              </Tooltip>
            </div>
          </div>


          {/* {hasBattery */}
          {/*  ? ( */}
          {/*    <div className="product_price_box clearfix"> */}
          {/*      <p>{messages['local.battery']}</p> */}
          {/*      <span className="product_price"> */}
          {/*        {(battery && `${battery.price} `)} */}
          {/*        {' '} */}
          {/*        {messages['local.dr']} */}
          {/*        . */}
          {/*      </span> */}
          {/*    </div> */}
          {/*  ) */}
          {/*  : null} */}
          <div className="characteristics_list characteristics_list_mobile">

            {characteristics.map(({ visible, name, text: content }, index) => {
              if (!visible) return null;
              return (
                <div className="characteristics_list_item" key={index}>
                  <div className="characteristic_name">{name}</div>
                  <div className="characteristic_description">
                    {content}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn_group clearfix">
            <Button
              className="buy_now_btn"
              disabled={!xmlCount || isInCart}
              onClick={addToCart}
            >
              { isInCart ? messages['local.already_in_cart'] : messages['local.add_to_cart']}

            </Button>
            <button
              type="button"
              className={`ant-btn add_to_wishlist ${inWishlist ? 'is_selected' : 'is_active'}`}
              onClick={() => wishlistChangeItemAction({ productId: product.id })}
            />
            <Button
              className="add_to_cart_btn"
              onClick={addToCartAndRedirect}
              disabled={!xmlCount}
            >
              {messages['local.buy_now']}
            </Button>


          </div>
        </div>
      </Col>
    </Row>
  );
}

ModalContent.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
  handleHideModal: PropTypes.func.isRequired,
  inWishlist: PropTypes.bool.isRequired,
  wishlistChangeItemAction: PropTypes.func.isRequired,
  localChanges: PropTypes.oneOfType([PropTypes.objectOf(Object)]),
  bonus: PropTypes.number,
  isInCart: PropTypes.bool.isRequired,
};

export default ModalContent;
