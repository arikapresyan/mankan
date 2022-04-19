import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';


import Layout from 'antd/lib/layout';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { APISend } from '../../../store/global-APIS/action';
import userAPI from '../../../API_Paths/userAPI';
import { getNewPasswordSchema } from '../../../utils/validationSchemas';
import '../ChangePassowrd.less';
import { setCookie } from '../../../utils/cookies';
import { C_TOKEN } from '../../../constants/utils';
import { getUserData } from '../../../store/user/action';

const { Content } = Layout;

function PaymentDeliveryReturn({ APISendAction, token, globalAPIS }) {
  const [loading, setLoading] = useState(false);
  const { messages } = useIntl();
  const router = useRouter();
  const dispatch = useDispatch();


  const validationSchema = useMemo(() => getNewPasswordSchema(messages), [
    messages,
  ]);

  const formik = useFormik({
    initialValues: {
      password: '',
      retryPassword: '',
      token,
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      APISendAction({
        method: 'put',
        url: `${userAPI.change_password}/${values.token}`,
        data: { ...values },
      });
    },
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
  } = formik;

  useEffect(() => {
    if (globalAPIS.hasError) {
      setLoading(false);
    } else if (globalAPIS.success) {
      if (values.rememberMe) {
        setCookie(C_TOKEN, token, { 'max-age': 100 * 24 * 60 * 60 });
      } else {
        setCookie(C_TOKEN, token);
      }

      dispatch(getUserData());
      router.push('/');
    }
  }, [globalAPIS]);

  return (
    <Content>
      <div className="changePasswordContainer">
        <form onSubmit={handleSubmit} className="changePasswordForm">
          <h1>{messages['local.password_recovery']}</h1>
          <Form.Item
            validateStatus={errors.password && touched.password && 'error'}
            help={touched.password && errors.password}
            label={messages['local.password']}
          >
            <Input
              type="password"
              name="password"
              placeholder={messages['local.new_password']}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
          </Form.Item>
          <Form.Item
            validateStatus={
              errors.retryPassword && touched.retryPassword && 'error'
            }
            help={touched.retryPassword && errors.retryPassword}
            label={messages['local.repeat_password']}
          >
            <Input
              type="password"
              name="retryPassword"
              placeholder={messages['local.repeat_new_password']}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.retryPassword}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox
              name="rememberMe"
              checked={values.rememberMe}
              onChange={handleChange}
            >
              {messages['local.remember']}
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <div className="login_btn">
              <Button type="primary" htmlType="submit" loading={loading}>
                {' '}
                {messages['local.login']}
              </Button>
            </div>
          </Form.Item>
        </form>
      </div>
    </Content>
  );
}

PaymentDeliveryReturn.propTypes = {
  APISendAction: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  globalAPIS: PropTypes.objectOf(Object).isRequired,
};

PaymentDeliveryReturn.getInitialProps = ({ query }) => {
  const { token } = query;

  return { token };
};

const mapStateToProps = ({ globalAPIS }) => ({ globalAPIS });
export default connect(mapStateToProps, {
  APISendAction: APISend,
})(PaymentDeliveryReturn);
