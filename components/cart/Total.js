import React, { useEffect, useMemo, useState } from 'react';


import Tooltip from 'antd/lib/tooltip';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';

import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmOrderModal from '../modals/confirm-order-modal/ConfirmOrderModal';
import { getBonus, getTooltipTexts } from '../../constants/utils';
import { getSingleData } from '../../store/single-data/action';
import { selectSingleData } from '../../store/single-data/reducer';
import useCartPrices from '../../hooks/useCartPrices';
import { MIN_TOTAL } from './constants';


function TotalResult({ cartData, bonusPercent }) {
  const [visible, setVisible] = useState(false);
  const [promo, setPromo] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const { messages, formatMessage } = useIntl();
  const dispatch = useDispatch();

  const {
    fullPrice, fullNewPrice,
  } = useCartPrices(cartData, promo);

  const { bonusText, promoText } = useMemo(() => getTooltipTexts(messages), [messages]);

  const {
    promoCode: {
      data: promoCodeData,
      loading: promoCodeLoading,
      error: promoCodeError,
    },
  } = useSelector(selectSingleData) || {};


  useEffect(() => {
    if (promoCodeError) {
      message.warning(messages['local.wrong_promo_code']);
    }
  }, [promoCodeError]);

  const handleShowModal = () => {
    if ((fullNewPrice || fullPrice) < MIN_TOTAL) {
      message.warning(formatMessage({ id: 'local.min_price_of_order' }, { price: MIN_TOTAL }));
      return false;
    }
    setVisible(true);
    return true;
  };

  useSelector(() => {
    if (promoCodeData && !visible && !promo) {
      const shown = handleShowModal();
      if (shown) setPromo(promoCodeData);
    }
  }, [promoCodeData]);

  const showModal = () => {
    if (promoCode && promoCode.trim()) {
      dispatch(
        getSingleData({ data: { name: 'promoCode', promoCode } }),
      );
      return;
    }
    handleShowModal();
  };

  const handleCancel = () => {
    setVisible(false);
    setPromo(null);
  };

  let totalPrice = 0;
  let totalCount = 0;
  cartData.forEach((cartItem) => {
    totalPrice += cartItem.count * (cartItem.percent?cartItem.price:cartItem.xmlPrice);
    totalCount += 1;
  });

  return (
    <div className="result_container">
      <div className="total_item product_total">
        <div className="name">
          {messages['local.my_basket']}
          {' '}
        </div>
        <div className="description">
          {`${totalCount} ${messages['local.products']}`}
        </div>
      </div>
      <div className="total_item price_total">
        <div className="name">{messages['local.total']}</div>
        <div className="description">
          {`${totalPrice} `}
          {' '}
          {messages['local.dr']}
          {'. '}
        </div>
      </div>
      <div className="total_item bonus_total">
        <div className="name">{messages['local.bonus']}</div>

        <div className="description">


          {getBonus(totalPrice, bonusPercent || 2, 1)}
          {' '}
          {messages['local.dr']}
          {'.'}
          <Tooltip
            placement="bottom"
            title={bonusText}
            className="info_tooltip"
          >
            <span>
              <img src="/images/icons/info.png" alt="" />
            </span>
          </Tooltip>
        </div>

      </div>
      <div className="total_item promo_code">
        <div className="name">{messages['local.promo_code']}</div>
        <div className="description">

          <Input
            placeholder={messages['local.example']}
            onChange={({ target: { value } }) => setPromoCode(value)}
            value={promoCode}
          />
          <Tooltip placement="bottom" title={() => <span>{promoText}</span>} className="info_tooltip">
            <span>
              <img src="/images/icons/info.png" alt="" />
            </span>
          </Tooltip>

        </div>
      </div>
      <Button loading={promoCodeLoading} className="confirm_btn" onClick={showModal}>{messages['local.confirm']}</Button>

      <ConfirmOrderModal
        visible={visible}
        handleHideModal={handleCancel}
        data={{ cartData, bonusPercent, promoCodeData: promo }}
      />
    </div>
  );
}

TotalResult.propTypes = {
  cartData: PropTypes.arrayOf(Array),
  bonusPercent: PropTypes.any,
};


export default TotalResult;
