import React, { useState, useEffect, useMemo } from 'react';

import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Modal from 'antd/lib/modal';

import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';
import userAPI from '../../../API_Paths/userAPI';
import { APISend } from '../../../store/global-APIS/action';
import { hideAll } from '../../../store/userEventListeners/action';
import { getRecoverySchema } from '../../../utils/validationSchemas';


function ForgotPasswordModal(props) {
  const { messages } = useIntl();
  const {
    visible,
    handleHideModal,
    APISendAction,
    globalAPIS,
    hideAllAction,
  } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (globalAPIS.hasError) {
      setLoading(false);
    } else if (globalAPIS.success) {
      hideAllAction();
    }
  }, [globalAPIS]);

  const validationSchema = useMemo(() => getRecoverySchema(messages), [messages]);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      APISendAction({ method: 'post', url: userAPI.recoveringPassword, data: { ...values } });
    },
    validationSchema,
  });
  return (
    <Modal
      destroyOnClose
      centered
      visible={visible}
      onCancel={handleHideModal}
      footer={null}
      className="password_recover_modal"
    >
      <h2>{messages['local.password_recovery']}</h2>

      <Form onSubmit={handleSubmit}>
        {errors.global ? <p>{errors.global}</p> : null}
        <Form.Item
          validateStatus={errors.email && touched.email && 'error'}
          help={touched.email && errors.email}
        >
          <Input
            placeholder={`${messages['local.email']}*`}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Item>
        <p>
          {messages['local.will_send_new_password']}
        </p>


        <Form.Item>
          <div className="password_recover_btn">
            <Button disabled={loading} type="primary" htmlType="submit">
              {messages['local.send']}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}


ForgotPasswordModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  APISendAction: PropTypes.func,
  globalAPIS: PropTypes.object,
  hideAllAction: PropTypes.func,
};
function mapStateToProps({ globalAPIS }) {
  return { globalAPIS };
}

export default connect(mapStateToProps, {
  APISendAction: APISend,
  hideAllAction: hideAll,
})(ForgotPasswordModal);
