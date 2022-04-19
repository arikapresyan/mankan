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
import { getFeedbackSchema } from '../../../utils/validationSchemas';


const { TextArea } = Input;
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

  const validationSchema = useMemo(() => getFeedbackSchema(messages), [messages]);

  useEffect(() => {
    if (globalAPIS.hasError) {
      setLoading(false);
    } else if (globalAPIS.success) {
      hideAllAction();
    }
  }, [globalAPIS]);

  const resTextsForGlobal = useMemo(() => ({
    errorText: messages['local.errorText'],
    successText: messages['local.successText'],
    loadingText: messages['local.loadingText'],
  }), [messages]);

  const formik = useFormik({
    initialValues: {
      phone: '',
      email: '',
      fullName: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      APISendAction({
        method: 'post',
        url: userAPI.feedback,
        data: {
          userEmail: values.email,
          firstLastNames: values.fullName,
          phone: values.phone,
          description: values.message,
        },
        ...resTextsForGlobal,
      });
    },
  });

  const {
    errors, values, touched,
    handleSubmit, handleChange, handleBlur,
  } = formik;

  return (
    <Modal
      destroyOnClose
      title={messages['local.feedback']}
      visible={visible}
      onCancel={handleHideModal}
      footer={null}
      className="callback_modal"
    >
      <div className="phone">
        <a href="tel:+37499530311">
          <span>
            {`${messages['local.tel']}:`}
          </span>
          (+374) 99 530 311
        </a>
      </div>
      <div className="email">
        <a href="mailto:contact@mankan.am">
          <span>
            {`${messages['local.email']}:`}
          </span>
          contact@mankan.am
        </a>
      </div>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Item
          validateStatus={errors.fullName && touched.fullName && 'error'}
          help={touched.fullName && errors.fullName}
        >
          <Input
            placeholder={messages['local.name_surname']}
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.email && touched.email && 'error'}
          help={touched.email && errors.email}
        >
          <Input
            placeholder={messages['local.email']}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.phone && touched.phone && 'error'}
          help={touched.phone && errors.phone}
        >
          <Input
            placeholder={messages['local.tel']}
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.message && touched.message && 'error'}
          help={touched.message && errors.message}
        >
          <TextArea
            placeholder={messages['local.message']}
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            autoSize={{ minRows: 5, maxRows: 10 }}
          />
        </Form.Item>
        <Form.Item>
          <div className="send_btn">
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
