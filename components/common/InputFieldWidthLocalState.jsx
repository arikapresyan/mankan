import React, {
  useCallback, useState, useEffect, memo,
} from 'react';
import PropTypes from 'prop-types';
import  Input  from 'antd/lib/input';


function InputFieldWidthLocalState({ defaultValue, ...res }) {
  const [value, setValue] = useState('');
  const handleSetValue = useCallback(
    ({ target: { value: targetValue } }) => {
      setValue(targetValue);
    }, [],
  );
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <Input value={value} onChange={handleSetValue} {...res} />
  );
}

InputFieldWidthLocalState.propTypes = {
  defaultValue: PropTypes.string,
};

export default memo(InputFieldWidthLocalState);
