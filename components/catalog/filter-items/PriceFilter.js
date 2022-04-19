import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import PriceSlider from '../../common/PriceSlider';

function PriceFilter({ price, onChange }) {
  const { messages } = useIntl();
  return (
    <div className="sidebar_info_box">
      <h2 className="sidebar_info_title">{messages['local.price']}</h2>
      <div className="option_list">
        <PriceSlider
          handleChange={onChange}
          price={price}
        />
      </div>
    </div>
  );
}


function pamStateToProps({ catalogFilter: { price } }) {
  return {
    price,
  };
}

PriceFilter.propTypes = {
  price: PropTypes.array,
  onChange: PropTypes.func,
};

export default connect(pamStateToProps)(PriceFilter);
