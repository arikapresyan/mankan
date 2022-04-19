import React, { memo } from 'react';
import PropTypes from 'prop-types';
import  Button  from 'antd/lib/button';


const AddToWishlistButton = ({ inWishlist, wishlistChangeItemAction, product }) => (
  <Button
    className={`add_to_wishlist ${inWishlist ? 'selected' : ''} `}
    onClick={() => wishlistChangeItemAction({ productId: product.id })}
    shape="circle"
  />
);

AddToWishlistButton.propTypes = {
  inWishlist: PropTypes.bool.isRequired,
  wishlistChangeItemAction: PropTypes.func.isRequired,
  product: PropTypes.objectOf(Object).isRequired,
};

export default memo(AddToWishlistButton);
