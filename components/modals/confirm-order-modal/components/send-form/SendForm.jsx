import React, {
  memo, useCallback, useState,
} from 'react';
import PropTypes from 'prop-types';

import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Tooltip from 'antd/lib/tooltip';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Radio } from 'antd';
import InputField from '../../../../common/InputField';
import InfoIcon from '../../../../../assets/images/icons/info.png';

const { Option } = Select;
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

const FormItemInput = memo((props) => {
  const inputProps = { ...props };
  delete inputProps.formItemClassName;
  delete inputProps.error;
  return (
    <Form.Item
      className={props.formItemClassName || ''}
      validateStatus={props.error && 'error'}
      help={props.error}
    >
      <InputField
        {...inputProps}
      />
    </Form.Item>
  );
});

FormItemInput.propTypes = {
  formItemClassName: PropTypes.string,
  error: PropTypes.any,
};

function SendForm({ modalLogic }) {
  const isUser = useSelector(({ user }) => user.authSuccess);
  const { messages } = useIntl();
  const [, setOpenSelect] = useState(false);
  const {
    formik: {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      setFieldValue,
      setFieldTouched,
    },
    dateInfo,
  } = modalLogic;

  const setMode = useCallback((mode) => () => setFieldValue('method', mode), []);

  const blurSelect = useCallback(() => {
    setOpenSelect(false);
    setFieldTouched('deliveryPeriodString', true);
  }, []);
  const focusSelect = useCallback(() => setOpenSelect(true), []);
  const changeSelectValue = useCallback((value, reactElement) => {
    setFieldValue('deliveryPeriod', value);
    setFieldValue('deliveryPeriodString', reactElement.props.children);
  }, []);


  return (
    <>
      <FormItemInput
        value={values.firstName}
        name="firstName"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={`${messages['local.name']}*`}
        error={touched.firstName && errors.firstName}
      />
      <FormItemInput
        value={values.lastName}
        name="lastName"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={`${messages['local.last_name']} *`}
        error={touched.lastName && errors.lastName}
      />

      <FormItemInput
        value={values.phone}
        name="phone"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={`${messages['local.mobile_phone']} *`}
        error={touched.phone && errors.phone}
      />

      <FormItemInput
        value={values.email}
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={`${messages['local.email']} *`}
        error={touched.email && errors.email}
      />
      <div className="d-flex justify-content_space-between reportItem">
        <div className="d-flex align-items_center mt--15">
          <div className="bonus_quantity">
            <Tooltip placement="bottomLeft" title={messages['local.delivery_only_in_yerevan']} className="info_tooltip">
              <span>
                <img src={InfoIcon} alt="" />
              </span>
            </Tooltip>
          </div>
          {messages['local.yerevan_cty']}
        </div>

        <FormItemInput
          className="street"
          value={values.street}
          name="street"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={`${messages['local.city_street']}*`}
          error={touched.street && errors.street}
        />
      </div>


      <FormItemInput
        formItemClassName="apartment clearfix"
        value={values.house}
        name="house"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={`${messages['local.apartment_house']}*`}
        error={touched.house && errors.house}
      />


      <FormItemInput
        formItemClassName="entrance clearfix"
        value={values.entry}
        name="entry"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={`${messages['local.enter']}`}
        error={touched.entry && errors.entry}
      />


      <Form.Item
        className="delivery_date"
        validateStatus={errors.deliveryPeriodString && touched.deliveryPeriodString && 'error'}
        help={touched.deliveryPeriodString && errors.deliveryPeriodString}
      >
        <Select
          placeholder={`${messages['local.delivery_period']} *`}
          onFocus={focusSelect}
          onBlur={blurSelect}
          onChange={changeSelectValue}
          name="deliveryPeriod"
        >
          {
            dateInfo.map((optionData) => (
              <Option value={optionData.date} key={optionData.date}>
                {optionData.text}
              </Option>
            ))
          }
        </Select>
      </Form.Item>

      <p className="payment_method">{messages['local.payment_method']}</p>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setMode(value)();
        }}
        value={values.method}
      >
        <Radio style={radioStyle} value={1}>
          {messages['local.credit_card']}
        </Radio>
        <Radio style={radioStyle} value={2}>
          {messages['local.cash']}
        </Radio>
        {isUser && (
        <Radio style={radioStyle} value={3}>
          {messages['local.bonus_Wey']}
        </Radio>
        )}
      </Radio.Group>

      {/* <div className="payment_type"> */}
      {/*  <p>{messages['local.payment_method']}</p> */}
      {/*  <div className={`payment_type_item ${values.method === 1 ? 'selected' : ''}`}> */}
      {/*    <Button shape="circle" onClick={setMode(1)} className="credit_card_btn" /> */}
      {/*    {messages['local.credit_card']} */}
      {/*  </div> */}
      {/*  <div className={`payment_type_item ${values.method === 2 ? 'selected' : ''}`}> */}
      {/*    <Button shape="circle" onClick={setMode(2)} className="cash_btn" /> */}
      {/*    {messages['local.cash']} */}
      {/*  </div> */}
      {/*  {isUser && ( */}
      {/*  <div className={`payment_type_item ${values.method === 3 ? 'selected' : ''}`}> */}
      {/*    <Button shape="circle" onClick={setMode(3)} className="bonus_btn" /> */}
      {/*    {messages['local.bonus_Wey']} */}
      {/*  </div> */}
      {/*  )} */}
      {/* </div> */}
    </>
  );
}

SendForm.propTypes = {
  modalLogic: PropTypes.objectOf(Object),
};

export default SendForm;
