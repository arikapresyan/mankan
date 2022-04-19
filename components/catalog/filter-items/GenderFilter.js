import React from 'react';
import Row from 'antd/lib/row';
import Checkbox from 'antd/lib/checkbox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

function GenderFilter({ gender, onChange, genderFilter }) {
  const { messages } = useIntl();
  return (
    <div className="sidebar_info_box">
      <h2 className="sidebar_info_title">{messages['local.gender']}</h2>
      <div className="option_list">
        <Checkbox.Group
          value={gender}
          onChange={onChange}
          className="gender"
        >
          <Row>
            {(genderFilter.find(({ sex }) => sex === 'BOY' || sex === 'ALL')) && <Checkbox value="BOY">{messages['local.boy']}</Checkbox>}
            {(genderFilter.find(({ sex }) => sex === 'GIRL' || sex === 'ALL')) && <Checkbox value="GIRL">{messages['local.girl']}</Checkbox>}
            <Checkbox value="ALL">{messages['local.all']}</Checkbox>
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
}


function pamStateToProps({ catalogFilter: { gender } }) {
  return {
    gender,
  };
}

GenderFilter.propTypes = {
  gender: PropTypes.array,
  onChange: PropTypes.func,
  genderFilter: PropTypes.array,
};

export default connect(pamStateToProps)(GenderFilter);
