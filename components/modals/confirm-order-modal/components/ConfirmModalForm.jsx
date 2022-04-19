import React from 'react';
import Form from 'antd/lib/form';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PropTypes from 'prop-types';
import SendForm from './send-form/SendForm';
import FinalCalculation from './final-calculation/FinalCalculation';
import useConfirmOrder from './useConfirmOrder';

function ConfirmModalForm({ data, handleHideModal }) {
  const modalLogic = useConfirmOrder(handleHideModal, data);

  return (
    <Form onSubmit={modalLogic.formik.handleSubmit}>
      <Row gutter={32}>
        <Col lg={12}>
          <SendForm modalLogic={modalLogic} />
        </Col>
        <Col lg={12}>
          <FinalCalculation modalLogic={modalLogic} data={data} />
        </Col>
      </Row>
    </Form>
  );
}

ConfirmModalForm.propTypes = {
  data: PropTypes.objectOf(Object).isRequired,
  handleHideModal: PropTypes.func.isRequired,
};
export default ConfirmModalForm;
