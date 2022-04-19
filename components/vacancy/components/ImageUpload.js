import React from 'react';


import Upload from 'antd/lib/upload';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Form from 'antd/lib/form';
import Col from 'antd/lib/col';
import PropTypes from 'prop-types';

import { useIntl } from 'react-intl';


function ImageUpload(props) {
  const { messages } = useIntl();
  const { fileList, error } = props;
  return (
    <Col xs={24}>
      <Form.Item
        validateStatus={error && 'error'}
        help={error}
      >
        <Upload
          name="file"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          showUploadList={{ showDownloadIcon: false }}
          {...props}
        >
          {!fileList.length && (
            <Button>
              <Icon type="upload" />
              {' '}
              {messages['local.download_picture']}
              {' '}
              *
            </Button>
          )}
        </Upload>
      </Form.Item>
    </Col>

  );
}

ImageUpload.propTypes = {
  fileList: PropTypes.arrayOf(Array).isRequired,
  error: PropTypes.any,
};

export default ImageUpload;
