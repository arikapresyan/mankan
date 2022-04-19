import React, { memo } from 'react';
import  Input  from 'antd/lib/input';

function InputField(props) {
  return (
    <Input {...props} />
  );
}

InputField.propTypes = {
  ...Input.propTypes,
};

export default memo(InputField);
