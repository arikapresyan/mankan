import React from 'react';
import Row from 'antd/lib/row';
import Checkbox from 'antd/lib/checkbox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';


function AgeFilter({ age, onChange, ages }) {
  const { messages } = useIntl();
  const agesArray = ages.map(({ id, minAge, maxAge }) => ({
    id,
    text: `${minAge}${maxAge < 11 ? ` - ${maxAge}` : '+'}`,
  }));


  return (
    <div className="sidebar_info_box">
      <h2 className="sidebar_info_title">{messages['local.age']}</h2>
      <div className="option_list">
        <Checkbox.Group
          value={Array.isArray(age) ? age : [age]}
          onChange={onChange}
          className="age"
        >
          <Row>

            {agesArray.map(({ id, text }) => (
              <Checkbox value={`${id}`} key={`${id}ageFilter`}>
                {text}
                {' '}
                {messages['local.years']}
              </Checkbox>
            ))}
            <Checkbox value="all">
              {messages['local.all']}
            </Checkbox>
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
}

function pamStateToProps({ catalogFilter: { age } }) {
  return {
    age,
  };
}

AgeFilter.propTypes = {
  age: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  onChange: PropTypes.func,
  ages: PropTypes.array,
};
AgeFilter.defaultProps = {
  ages: {},
};


export default connect(pamStateToProps)(AgeFilter);
