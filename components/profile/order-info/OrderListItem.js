import React, { useState } from 'react';

import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getProductToBuy } from '../../../store/buy-product/action';

import useGlobalAPI from '../../../hooks/useGlobalAPI';

function OrderListItem({
  product, reloadPageData, page, data,
}) {
  const { messages } = useIntl();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const getProductToBuyActon = (id, notShowModal, errorMessage) => {
    dispatch(getProductToBuy({ id, notShowModal, errorMessage }));
  };
  useGlobalAPI({
    onCancel: () => {
      setLoading(false);
    },
    onSuccess: () => {
      if (loading) {
        let newPage = page;
        if (data.length === 0 && page > 1) {
          newPage = page - 1;
        }
        reloadPageData({ page: newPage });
      }
    },
  });

  const {
    totalPrice,
    count,
    nameForUser,
    // url: postUrl,
    createdAt,
    xmlCount,
    id,
    productId,
  } = product;

  const date = new Date(createdAt);
  const min = date.getMinutes();
  const newMin = (`${min}`).length === 1 ? `0${min}` : min;
  const time = `${date.getHours()}:${newMin}`;
  const showDate = `${date.toLocaleDateString()}, ${time}`;
  // const url = `${IMAGE_POSTFIX + id}/${postUrl}`;


  // const removeItem = () => {
  //   // setLoading(true);
  //   // dispatch(APISend({
  //   //   method: 'post',
  //   //   url: userAPI.removeUserPageOrder,
  //   //   data: {
  //   //     id,
  //   //   },
  //   // }));
  // };

  return (
    <div className="order_list_item clearfix">
      <div className="prod_img">
        {/* <img */}
        {/* src={url} */}
        {/* // alt={alt} */}
        {/* // title={title} */}
        {/* /> */}
      </div>
      <div className="prod_info_box">
        <div className="prod_info">
          <div className="prod_name">
            {nameForUser}
          </div>
          <div className="date">
            <span>
              {messages['local.date_of_purchase']}
              ։
            </span>
            {showDate}
          </div>
        </div>
        <div className="prod_info">
          <div className="product_quantity">
            <span>
              {messages['local.quantity']}
              ։
            </span>
            {count}
            {' '}
            {messages['local.item(s)']}
          </div>
          <div className="product_price">
            <span>
              {messages['local.price']}
              ։
            </span>
            {totalPrice}
            {' '}
            {messages['local.dr']}
            ․
          </div>
          {xmlCount && <div className="product_availability">{messages['local.product_available']}</div>}
        </div>
      </div>

      <Button type="link" className="buy_again" onClick={() => getProductToBuyActon(productId, true, messages['local.not_available_product'])}>
        <Icon type="shopping" />
        {messages['local.order_again']}
      </Button>


      {/* {!loading && (
        <Button
          type="primary"
          shape="circle"
          icon="close"
          className="remove_item"
          onClick={removeItem}
        />
      )} */}
    </div>
  );
}

OrderListItem.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
  reloadPageData: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};
export default OrderListItem;
