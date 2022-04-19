import React from 'react';
import  Col  from 'antd/lib/col';
import PropTypes from 'prop-types';

function ImageItem(props) {
  const { url, onClick } = props;
  return (
    <Col xs={12} sm={12} md={8} lg={8} xl={6}>
      <div onClick={onClick} className="gallery_item">
        <img src={url} alt="" />
      </div>
    </Col>
  );
}

ImageItem.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
ImageItem.defaultProps = {
  onClick: null,
};

export default ImageItem;
