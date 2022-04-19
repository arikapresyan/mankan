import React, { useState, useEffect } from 'react';

import Select  from 'antd/lib/select';
import Icon  from 'antd/lib/icon';
import PropTypes from 'prop-types';


import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleData } from '../../store/single-data/action';
import { selectLang } from '../../store/user/reducer';

const { Option } = Select;
const selectUsages = ({
  singleData: {
    usage: {
      loading,
      error, data,
    },
  },
}) => ({ loading, error, data });

function ChooseMeaning({ handleChange }) {
  const { messages } = useIntl();
  const [localeData, setLocaleData] = useState([]);
  const dispatch = useDispatch();
  const lng = useSelector(selectLang);
  // usage


  const { data } = useSelector(selectUsages);

  useEffect(() => {
    dispatch(
      getSingleData({
        data: { name: 'usage' },
      }),
    );
  }, [getSingleData, dispatch, lng]);


  useEffect(() => {
    if (data) {
      setLocaleData(data.rows);
    }
  }, [data]);

  return (
    <Select
      defaultValue={messages['local.not_specifiedе']}
      suffixIcon={<Icon type="caret-down" />}
      onChange={handleChange}
    >
      {localeData.map(({ id, langs }) => (<Option key={id} value={id}>{langs[0].name}</Option>))}

    </Select>
  );
}


ChooseMeaning.propTypes = {
  handleChange: PropTypes.func,
};


export default ChooseMeaning;
