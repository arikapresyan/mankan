import React, { useState, useMemo } from 'react';


import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Modal from 'antd/lib/modal';
import Tabs from 'antd/lib/tabs';

import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';
import { getSuggestionSchema } from '../../../utils/validationSchemas';
import userAPI from '../../../API_Paths/userAPI';
import { APISend } from '../../../store/global-APIS/action';
import { hideAll } from '../../../store/userEventListeners/action';
import useGlobalAPI from '../../../hooks/useGlobalAPI';

const { TextArea } = Input;
const { TabPane } = Tabs;


function SuggestionModal(props) {
  const { messages } = useIntl();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('suggestion');
  const [success, setSuccess] = useState('');
  const validationSchema = useMemo(() => getSuggestionSchema(messages, type), [messages, type]);
  const {
    visible,
    handleHideModal,
    APISendAction,
    hideAllAction,
  } = props;

  useGlobalAPI({
    onCancel: () => {
      setLoading(false);
    },
    onSuccess: hideAllAction,
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      suggestion: '',
      Complaint: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      APISendAction({
        method: 'post',
        url: userAPI.offer_complaint,
        data: {
          userEmail: values.email,
          type: 'complain',
          description: values[type],
          title: type === 'suggestion' ? 'suggestion' : 'complain',
        },
        successText: messages['local.successText'],
        errorText: messages['local.errorText'],
        loadingText: messages['local.loadingText'],
      });
      return true;
    },
    validationSchema,
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = formik;

  const decoratedHandelBlur = (e) => {
    success && setSuccess('');
    return handleBlur(e);
  };
  return (
    <Modal
      destroyOnClose
      title={messages['local.complain_suggestion']}
      visible={visible}
      onCancel={handleHideModal}
      footer={null}
      className="complain_suggestion_modal"
    >
      <Form onSubmit={handleSubmit}>
        {errors && errors.global}

        <Tabs defaultActiveKey="suggestion" onChange={(type) => setType(type)}>
          <TabPane tab={messages['local.suggestion']} key="suggestion">
            <Form.Item
              validateStatus={errors.suggestion && touched.suggestion && 'error'}
              help={touched.suggestion && errors.suggestion}
            >
              <TextArea
                name="suggestion"
                value={values.suggestion}
                onChange={handleChange}
                onBlur={decoratedHandelBlur}
                placeholder={messages['local.write_offer']}
                autoSize={{ minRows: 3, maxRows: 12 }}
              />
            </Form.Item>
          </TabPane>
          <TabPane tab={messages['local.complaint']} key="Complaint">
            <Form.Item
              validateStatus={errors.Complaint && touched.Complaint && 'error'}
              help={touched.Complaint && errors.Complaint}
            >
              <TextArea
                name="Complaint"
                value={values.Complaint}
                onChange={handleChange}
                onBlur={decoratedHandelBlur}
                placeholder={messages['local.write_complaint']}
                autoSize={{ minRows: 3, maxRows: 12 }}
              />
            </Form.Item>
          </TabPane>
        </Tabs>
        <Form.Item
          validateStatus={errors.email && touched.email && 'error'}
          help={touched.email && errors.email}
        >
          <Input
            placeholder={messages['local.email']}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={decoratedHandelBlur}
            className="email"
          />
          <Button disabled={loading} type="primary" className="send_suggestion_btn" htmlType="submit">
            {messages['local.send']}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
SuggestionModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  APISendAction: PropTypes.func,
  hideAllAction: PropTypes.func,
};
function mapStateToProps({ globalAPIS }) {
  return { globalAPIS };
}

export default connect(mapStateToProps, {
  APISendAction: APISend,
  hideAllAction: hideAll,
})(SuggestionModal);
