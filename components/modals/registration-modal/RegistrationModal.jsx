import React from 'react';


import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import Modal from 'antd/lib/modal';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registration } from '../../../store/user/action';

import { hideAll } from '../../../store/userEventListeners/action';
import useRegistration from './useRegistration';


function RegistrationModal({
  visible,
  handleHideModal,
  registrationAction,
  hideAllAction,
  userAuthorisationLoading,
  authSuccess,
  errorText,
}) {
  const { formik, messages, formatMessage } = useRegistration({
    registrationAction,
    hideAllAction,
    authSuccess,
    errorText,
  });
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;
  return (
    <Modal
      visible={visible}
      destroyOnClose
      centered
      onCancel={handleHideModal}
      footer={null}
      className="registration_modal"
    >
      <h2>{messages['local.registration']}</h2>
      <Form onSubmit={handleSubmit}>
        {errors.globalError && <p style={{ color: '#C40A04' }}>{errors.globalError}</p>}
        <Form.Item
          validateStatus={errors.name && touched.name && 'error'}
          help={touched.name && errors.name}
        >
          <Input
            placeholder={`${messages['local.name']} *`}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.surname && touched.surname && 'error'}
          help={touched.surname && errors.surname}
        >
          <Input
            placeholder={`${messages['local.last_name']} *`}
            value={values.surname}
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.email && touched.email && 'error'}
          help={touched.email && errors.email}
        >
          <Input
            placeholder={`${messages['local.email']} *`}
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.phone && touched.phone && 'error'}
          help={touched.phone && errors.phone}
        >
          <Input
            placeholder={`${messages['local.tel']} *`}
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.password && touched.password && 'error'}
          help={touched.password && errors.password}
        >
          <Input
            type="password"
            placeholder={`${messages['local.password']} *`}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.repeatPassword && touched.repeatPassword && 'error'}
          help={touched.repeatPassword && errors.repeatPassword}
        >
          <Input
            type="password"
            placeholder={messages['local.repeat_password']}
            name="repeatPassword"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.agreeTerms && touched.agreeTerms && 'error'}
          help={touched.agreeTerms && errors.agreeTerms}
        >
          <Checkbox
            className="terms"
            checked={+values.agreeTerms}
            onChange={handleChange}
            name="agreeTerms"
          >
            {` ${messages['local.i_know']} `}
            <a href="/using-rules" target="_blank">
              {messages['local.rules_of_using']}
            </a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <div className="registration_btn">

            {/* {userAuthorisationLoading && <p>loading ...</p>} */}
            <Button
              // disabled={userAuthorisationLoading}
              type="primary"
              htmlType="submit"
              loading={userAuthorisationLoading}
            >
              {messages['local.registration1']}
            </Button>
          </div>
        </Form.Item>
      </Form>

    </Modal>
  );
}

function mapStateToProps({
  user: {
    loading: userAuthorisationLoading,
    authSuccess,
    errorText,
  },
}) {
  return {
    userAuthorisationLoading,
    authSuccess,
    errorText,
  };
}

RegistrationModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  registrationAction: PropTypes.func.isRequired,
  hideAllAction: PropTypes.func,
  userAuthorisationLoading: PropTypes.bool,
  authSuccess: PropTypes.bool,
  errorText: PropTypes.string,
};

export default connect(
  mapStateToProps,
  {
    registrationAction: registration,
    hideAllAction: hideAll,
  },
)(RegistrationModal);
