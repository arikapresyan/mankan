import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import Icon from 'antd/lib/icon';
import Badge from 'antd/lib/badge';

import PropTypes from 'prop-types';
import { getTotalCount } from '../../store/cart/reducer';
import { getWishlistLength } from '../../store/wishlist/reducer';

function CartWishlistConteiner({ mode, isPageActive }) {
  const counts = useSelector((store) => ({
    cart: getTotalCount(store),
    wishlist: getWishlistLength(store),
  }));


  switch (mode) {
    case 'mobil':
      return (
        <>
          <div className={`menu_bar_item ${isPageActive('/wishlist') ? 'is_active' : ''}`}>
            <Link href="/wishlist">
              <a>

                <Badge count={counts.wishlist}>
                  <Icon type="heart" />
                </Badge>
              </a>
            </Link>
          </div>
          <div className={`menu_bar_item ${isPageActive('/cart') ? 'is_active' : ''}`}>
            <Link href="/cart">
              <a>
                <Badge count={counts.cart}>
                  <Icon type="shopping" />
                </Badge>
              </a>
            </Link>
          </div>

        </>
      );
    default:
      return (
        <>
          <div className="cart_container">
            <Link href="/cart">
              <a className="cart"><span className="count">{counts.cart}</span></a>
            </Link>
            <Link href="/wishlist">
              <a className="wishlist"><span className="count">{counts.wishlist}</span></a>
            </Link>
          </div>
        </>
      );
  }
}

CartWishlistConteiner.propTypes = {
  mode: PropTypes.string,
  isPageActive: PropTypes.func,
};
export default CartWishlistConteiner;
