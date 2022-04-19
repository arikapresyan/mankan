import React from 'react';
import  Modal from 'antd/lib/modal';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import ApplyOnlineForm from './apply-online-form/ApplyOnlineForm';


function ApplyOnlineModal({
  visible,
  handleHideModal,
  vacancyId,
}) {
  const { messages } = useIntl();
  return (
    <Modal
      destroyOnClose
      title={messages['local.online_application']}
      visible={visible}
      onCancel={handleHideModal}
      footer={null}
      className="apply_online_modal"
    >
      <ApplyOnlineForm handleClose={handleHideModal} id={vacancyId} />
    </Modal>
  );
}

ApplyOnlineModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  vacancyId: PropTypes.any,
};

export default ApplyOnlineModal;
