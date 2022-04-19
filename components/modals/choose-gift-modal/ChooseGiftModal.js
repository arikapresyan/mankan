import React from 'react';
import Modal from 'antd/lib/modal';
import PropTypes from 'prop-types';
import ChooseGift from '../../home/ChooseGift';

function ChooseGiftModal({ isVisible, handleClose }) {
  const events = {};
  return (
    <Modal
      destroyOnClose
      className="choose_gift_modal"
      visible={isVisible}
      centered={true}
      onCancel={handleClose}
      onOk={() => {
        events.onClick();
        handleClose();
      }}
      cancelText="x"
      okText="Հաստատել"
    >
      <ChooseGift getEvent={events} />
    </Modal>
  );
}

ChooseGiftModal.propTypes = {
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ChooseGiftModal;
