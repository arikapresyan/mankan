import React from 'react';
import  Checkbox  from 'antd/lib/checkbox';
import Row  from 'antd/lib/row';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';


function ClassificationFilter({ classification, onChange, extraFilters }) {
  const { messages } = useIntl();

  const changeValues = (values) => {
    onChange([values[values.length - 1]]);
  };


  return (
    <div className="sidebar_info_box">
      <h2 className="sidebar_info_title">{messages['local.specification']}</h2>
      <div className="option_list">
        <Checkbox.Group
          value={classification}
          onChange={changeValues}
          className="classification"
        >
          <Row>
            <Checkbox value="isNew">{messages['local.new_products']}</Checkbox>
            <Checkbox value="percent">{messages['local.discounted_assortment']}</Checkbox>
            <Checkbox value="bestSeller">{messages['local.best_selling']}</Checkbox>
            <Checkbox value="priceByAsc">{messages['local.price_by_increase']}</Checkbox>
            {extraFilters.map(({ id, name }) => (
              <Checkbox value={`${id}`} key={`${id}extra `}>
                {name}
                {' '}
              </Checkbox>
            ))}
            <Checkbox value="All">{messages['local.all_of']}</Checkbox>
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
}


function pamStateToProps({ catalogFilter: { classification } }) {
  return {
    classification,
  };
}

ClassificationFilter.propTypes = {
  classification: PropTypes.array,
  onChange: PropTypes.func,
  extraFilters: PropTypes.array,
};
ClassificationFilter.defaultProps = {
  extraFilters: {},
};

export default connect(pamStateToProps)(ClassificationFilter);
