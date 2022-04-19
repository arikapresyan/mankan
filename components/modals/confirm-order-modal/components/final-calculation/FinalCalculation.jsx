import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import Tooltip from 'antd/lib/tooltip';
import { useIntl } from 'react-intl';
import InfoIcon from '../../../../../assets/images/icons/info.png';
import { getTooltipTexts } from '../../../../../constants/utils';

function FinalCalculation({
  modalLogic: {
    formik: {

      handleChange,
      values: {
        deliveryPeriodString,
        knowRules,
      },
    },
    loading,
    other: {
      bonus,
      total,
      deliveryPrice,
      fullNewPrice,
      fullPrice,
    },
  },
}) {
  const { messages } = useIntl();
  const { bonusText } = useMemo(() => getTooltipTexts(messages), [messages]);

  return (
    <div className="final_calculation">
      <div className="calculation_box">
        <div className="calculation_item">
          <span className="name">{messages['local.price']}</span>
          <span className="value">
            {fullPrice}
            {' '}
            {messages['local.dr']}
            ․
          </span>
        </div>
        {!!fullNewPrice && (
        <div className="calculation_item">
          <span className="name">{messages['local.discount_price']}</span>
          <span className="value">
            {fullNewPrice}
            {' '}
            {messages['local.dr']}
            ․
          </span>
        </div>
        )}
        {!!deliveryPrice
          && (
          <div className="calculation_item">
            <span className="name">
              {messages['local.delivery_price']}
            </span>
            <span className="value">
              {deliveryPrice}
              {' '}
              {messages['local.dr']}
              ․
            </span>
          </div>
          )}
        <div className="calculation_item">
          <span className="name">{messages['local.total']}</span>
          <span className="value total_price">
            {total}
            {' '}
            {messages['local.dr']}
            ․
          </span>
        </div>

        <div className="calculation_item">
          <span className="name">{messages['local.bonus']}</span>
          <div style={{ float: 'right' }}>
            <span className="value" style={{ float: 'left' }}>
              {bonus}
              {' '}
              {messages['local.dr']}
              ․
            </span>
            <Tooltip
              style={{ float: 'right' }}
              placement="bottom"
              title={bonusText}
              className="info_tooltip"
            >
              <span>
                <img src={InfoIcon} alt="" />
              </span>
            </Tooltip>
          </div>

        </div>
        <div className="calculation_item">
          <span className="name">
            {' '}
            {messages['local.delivery']}
          </span>
          <span className="value">
            {deliveryPeriodString}
          </span>
        </div>

        <div className="bottomContainer">
          <div className="accetpCondition" style={{ display: 'flex' }}>
            <Checkbox onChange={handleChange} name="knowRules" id="checked" checked={!!knowRules} />

            <div style={{ marginLeft: '8px' }}>
              <label htmlFor="checked">{` ${messages['local.i_know']} `}</label>

              <a href="/using-rules" target="_blank" style={{ marginLeft: '5px' }}>
                {messages['local.rules_of_using']}

              </a>
            </div>
          </div>

          <Button loading={loading} disabled={!knowRules} type="submit" htmlType="submit" className="confirm_order_btn">
            {messages['local.confirm_order']}
          </Button>
        </div>

      </div>

    </div>

  );
}

FinalCalculation.propTypes = {
  modalLogic: PropTypes.objectOf(Object).isRequired,
};

export default FinalCalculation;
