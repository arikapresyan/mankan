import React from 'react';
import Radio from 'antd/lib/radio';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

function ChooseGender({ handelChange, selected }) {
  const { messages } = useIntl();

  return (
    <Radio.Group
      name="radiogroup"
      value={selected}
    >
      <Radio value="BOY" onClick={handelChange}>{messages['local.boy1']}</Radio>
      <Radio value="GIRL" onClick={handelChange}>{messages['local.girl1']}</Radio>
    </Radio.Group>
  );
}
ChooseGender.propTypes = {
  handelChange: PropTypes.func,
  selected: PropTypes.string,
};
export default ChooseGender;
