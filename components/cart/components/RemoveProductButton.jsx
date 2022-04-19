import React, { memo } from 'react';
import PropTypes from 'prop-types';
import  Icon  from 'antd/lib/icon';

function RemoveProductButton({ handleClick }) {
  return (
    <div className="remove_product" onClick={handleClick}>
      <span>
        <Icon type="close" />
      </span>
    </div>
  );
}

RemoveProductButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default memo(RemoveProductButton);
