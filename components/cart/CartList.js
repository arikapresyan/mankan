import React from 'react';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IndexCartItem from './IndexCartItem';

function CartList({ cart }) {
  return (
    <div className="cart_list">

      {cart.map((cartItem) => (<IndexCartItem key={`cart_item${cartItem.id}`} product={cartItem} />))}
      {cart.map((cartItem) => (<IndexCartItem mode="mobile" key={`cart_item${cartItem.id}__mobile`} product={cartItem} />))}

    </div>
  );
}

function mapStateToProps() {
  return {};
}
CartList.propTypes = {
  cart: PropTypes.arrayOf(Array),
};

export default connect(mapStateToProps)(CartList);
