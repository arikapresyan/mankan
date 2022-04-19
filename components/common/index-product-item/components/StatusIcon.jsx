import React from 'react';
import PropTypes from 'prop-types';
import { New } from '../../../../assets/images/icons';
import topProd from '../../../../assets/images/icons/top.png';

const CheckProductIs = ({ percent, bestSeller, isNew }) => {
  if (percent) {
    return (
      <span className="iconPercent">
        {`${percent}%`}
      </span>
    );
  } if (bestSeller) {
    return (
      <span className="icon">
        <img src={topProd} alt="" />
      </span>
    );
  } if (isNew) {
    return (
      <span className="icon">
        <img src={New} alt="status icon" title="status icon" />
      </span>
    );
  }
  return null;
};


CheckProductIs.propTypes = {
  percent: PropTypes.number,
  bestSeller: PropTypes.bool,
  isNew: PropTypes.bool,
};
export default CheckProductIs;
