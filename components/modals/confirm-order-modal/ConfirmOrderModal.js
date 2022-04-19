import React from 'react';

import Modal  from 'antd/lib/modal';

import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import ConfirmModalForm from './components/ConfirmModalForm';


function ConfirmOrderModal({ visible, handleHideModal, data }) {
  const { messages } = useIntl();
  return (
    <Modal
      destroyOnClose
      centered
      title={messages['local.fill_in_the_data']}
      visible={visible}
      onCancel={handleHideModal}
      footer={null}
      className="confirm_order_modal"
    >
      <ConfirmModalForm data={data} handleHideModal={handleHideModal} />
    </Modal>
  );
}

ConfirmOrderModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  data: PropTypes.objectOf(Object).isRequired,
};

export default ConfirmOrderModal;
