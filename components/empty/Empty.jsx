import React, { memo } from 'react';
import PropTypes from 'prop-types';
import bag from '../../assets/images/icons/bag.png';
import Heart from '../../assets/images/icons/Heart.png';

const Empty = ({ text, cart }) => (
  <div
    className="container mobileTop"
  >
    <div style={{
      marginTop: '21px', display: 'flex', alignItems: 'flex-start', minHeight: '469px', maxHeight: '100vh',
    }}
    >
      <img style={{ width: '60px' }} src={cart ? bag : Heart} alt="" />
      <p style={{ marginBottom: '0', marginLeft: '20px', marginTop: '22px' }}>{text}</p>
    </div>
  </div>
);

Empty.propTypes = {
  text: PropTypes.string.isRequired,
  cart: PropTypes.number,
};


export default memo(Empty);
