/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useMemo } from 'react';
import Modal from 'antd/lib/modal';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import { getProductToBuyReset } from '../../../store/buy-product/action';
import { wishlistChangeItem } from '../../../store/wishlist/action';

const ModalContent = dynamic(() => import('./ModalContent'));


function BuyProductModal({
  wishlistChangeItemAction,
  wishlistProductIds,
  handleHideModal,
  product,
  cart,
  user,
}) {
  const data = useMemo(() => ((product.data && product.data.productById) || {}), [product.data]);
  const name = useMemo(() => (data?.langs?.[0]?.name) || 'loading', [data.name]);
  const isInCart = !!useMemo(() => cart?.data?.[data.id], [cart, data]);


  const visible = useMemo(() => !!(
    (product.loading
     || product.data)
     && !product.error),
  [
    product.loading,
    product.data,
    product.error,
  ]);

  return (
    <Modal
      destroyOnClose
      title={name}
      centered
      visible={visible}
      onCancel={() => handleHideModal()}
      footer={null}
      className="buy_product_modal"
    >
      {data?.name ? (
        <ModalContent
          product={data}
          inWishlist={!!wishlistProductIds[data.id]}
          localChanges={cart.data || {}}
          handleHideModal={handleHideModal}
          wishlistChangeItemAction={wishlistChangeItemAction}
          bonus={user.bonusPercent}
          isInCart={isInCart}
        />
      ) : ''}
    </Modal>
  );
}


BuyProductModal.propTypes = {
  handleHideModal: PropTypes.func.isRequired,
  product: PropTypes.object,
  wishlistProductIds: PropTypes.objectOf(Object).isRequired,
  wishlistChangeItemAction: PropTypes.func.isRequired,
  cart: PropTypes.objectOf(Object).isRequired,
  user: PropTypes.objectOf(Object).isRequired,
};

const mapStateToProps = ({
  buyProduct,
  wishlist,
  cart,
  user,
}) => ({
  product: buyProduct,
  wishlistProductIds: wishlist.productIds,
  cart,
  user,
});

export default connect(mapStateToProps, {
  handleHideModal: getProductToBuyReset,
  wishlistChangeItemAction: wishlistChangeItem,
})(BuyProductModal);
