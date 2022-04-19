import React, { useState, useCallback, useEffect } from 'react';


import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import Form from 'antd/lib/form';
import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';

import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import useGlobalAPI from '../../../hooks/useGlobalAPI';
import { APISend } from '../../../store/global-APIS/action';
import userAPI from '../../../API_Paths/userAPI';
import { handleChange } from './constants';


function AttachCvModal({ visible, handleHideModal, vacancyId: id }) {
  const { messages } = useIntl();
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  useGlobalAPI({
    onCancel: () => {
      setLoading(false);
    },
    onSuccess: () => {
      setLoading(false);
      setFileList([]);
      setSubmit(false);
      handleHideModal();
    },
  });
  const changeAction = useCallback(handleChange(setFileList, messages),
    [setFileList, messages]);
  useEffect(() => setSubmit(false), [visible]);

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: changeAction,
    multiple: true,
    accept: 'png',
    showUploadList: { showDownloadIcon: false },
  };

  const sendCv = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!fileList.length) return false;
    const FD = new FormData();
    FD.set('image', fileList[0].originFileObj);
    FD.set('id', id);
    setLoading(true);

    dispatch(APISend({
      method: 'post',
      url: userAPI.vacancyFile,
      data: FD,
    }));
    return true;
  };

  return (
    <Modal
      destroyOnClose
      visible={visible}
      onCancel={handleHideModal}
      footer={null}
      className="attach_cv_modal"
    >
      <h2>
        {messages['local.attach']}
        {' '}
        CV
      </h2>
      <Form onSubmit={sendCv}>
        <Form.Item
          validateStatus={(submit && !fileList.length) ? 'error' : null}
          help={(submit && !fileList.length) && 'File is required'}
        >
          <Upload
            {...uploadProps}
            fileList={fileList}
            className="upload_file"
            accept=".doc, .docx, application/pdf, image/jpeg"
          >
            <Button>
              <Icon type="upload" />
              {' '}
              {messages['local.download_CV_using_formats']}
            </Button>
          </Upload>
        </Form.Item>
        <Button disabled={loading} type="primary" htmlType="submit" className="send_btn">
          {messages['local.send']}
        </Button>
      </Form>
    </Modal>
  );
}

AttachCvModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  vacancyId: PropTypes.any,
};

export default AttachCvModal;
