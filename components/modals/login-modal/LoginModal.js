import React, { useEffect, useMemo } from 'react';

import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Modal from 'antd/lib/modal';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { login } from '../../../store/user/action';
import { hideAll } from '../../../store/userEventListeners/action';
import { getLoginSchema } from '../../../utils/validationSchemas';


function LoginModal(props) {
  const { messages } = useIntl();
  const {
    visible,
    handleHideModal,
    onForgotPassword,
    onMoveToRegistration,
    loginAction,
    hideAllAction,
    userAuthorisationLoading,
    authSuccess,
    errorText,
  } = props;
  const validationSchema = useMemo(() => getLoginSchema(messages), [messages]);
  const formik = useFormik({
    initialValues: { emailOrPhone: '', password: '', rememberMe: false },
    onSubmit: (values) => {
      loginAction({ ...values });
    },
    validationSchema,
  });

  useEffect(() => {
    if (authSuccess) {
      hideAllAction();
    }
  }, [authSuccess]);

  useEffect(() => {
    if (errorText) {
      if (errorText.includes('Wrong email')) {
        formik.setErrors({ globalError: messages['local.wrong_email_or_password'] });
      } else {
        formik.setErrors({ globalError: errorText });
      }
    }
  }, [errorText]);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = formik;
  return (
    <Modal
      destroyOnClose
      title=""
      centered
      visible={visible}
      onCancel={handleHideModal}
      footer={null}
      className="login_modal"
    >
      <h2>{messages['local.login']}</h2>
      <Form className="login-form" onSubmit={handleSubmit}>
        {errors.globalError && <p>{errors.globalError}</p>}
        <Form.Item
          validateStatus={errors.emailOrPhone && touched.emailOrPhone && 'error'}
          help={touched.emailOrPhone && errors.emailOrPhone}
        >
          <Input
            name="emailOrPhone"
            placeholder={messages['local.email']}
            value={values.emailOrPhone}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.password && touched.password && 'error'}
          help={touched.password && errors.password}
        >
          <Input
            name="password"
            type="password"
            placeholder={messages['local.password']}
            value={values.password}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox
            name="rememberMe"
            checked={+values.rememberMe}
            onChange={handleChange}
          >

            {messages['local.remember']}

          </Checkbox>
          <span className="forgot_password" onClick={onForgotPassword}>
            {messages['local.forgot_password']}
          </span>
        </Form.Item>
        <Form.Item>
          <div className="login_btn">

            {/*  TODO: ask about preloader */}
            {userAuthorisationLoading && <p>loading ...</p>}
            <Button disabled={userAuthorisationLoading} type="primary" htmlType="submit" className="login-form-button">
              {messages['local.login1']}
            </Button>
          </div>
          <div className="move_to_registration">
            <span onClick={onMoveToRegistration}>{messages['local.registration']}</span>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

function mapStateToProps({ user: { loading, authSuccess, errorText } }) {
  return {
    userAuthorisationLoading: loading,
    authSuccess,
    errorText,
  };
}


LoginModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  onMoveToRegistration: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  hideAllAction: PropTypes.func,
  userAuthorisationLoading: PropTypes.bool,
  authSuccess: PropTypes.bool,
  errorText: PropTypes.string,
};

export default connect(mapStateToProps, { loginAction: login, hideAllAction: hideAll })(LoginModal);
