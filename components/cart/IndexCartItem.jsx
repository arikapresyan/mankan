import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import useCartActions from '../../store/cart/useCartActions';
import keys from '../../constants/keys';
import ProductQuantityBox from './components/ProductQuantityBox';
import RemoveProductButton from './components/RemoveProductButton';
import ProductName from './components/ProductName';
import ProductOldPrice from './components/ProductOldPrice';
import ProductImage from './components/ProductImage';
import useGetProductPrice from '../../hooks/useGetProductPrice';


const { IMAGE_POSTFIX } = keys;

function IndexCartItem({ product, mode }) {
  const {
    id, count, percent, xmlCount,
  } = product;

  const { cartRemoveProductAction, cartChangeProductAction } = useCartActions();

  const { messages } = useIntl();

  const { newPrice, oldPrice: op } = useGetProductPrice(product);
  const totalCount = useMemo(() => (count || 1) * newPrice, [newPrice, count]);

  const oldPrice = useMemo(() => (percent ? op * (count || 1) : null), [percent, op, count]);
  const firstPhoto = useMemo(() => product.photos.sort((a, b) => a.order - b.order)[0],
    [product.photos]);
  const src = useMemo(() => `${IMAGE_POSTFIX + id}/${firstPhoto.url}`, [IMAGE_POSTFIX, id, firstPhoto.url]);
  const name = useMemo(() => product.langs[0].name, [product.langs[0].name]);
  const changeCount = useCallback((value) => cartChangeProductAction({
    id,
    changes: { count: value },
  }), [id]);
  const removeItem = useCallback(
    () => {
      cartRemoveProductAction({ id });
    }, [id],
  );


  const ProductPrice = () => <span className="product_price">{`${totalCount} ${messages['local.dr']}․`}</span>;


  switch (mode) {
    case 'mobile':

      return (
        <div className="cart_item cart_item_mobile">
          <ProductImage src={src} id={id} />
          <div className="prod_info">

            <div className="product_price_box">
              <ProductPrice />
              <ProductOldPrice text={oldPrice + messages['local.dr']} oldPrice={oldPrice} />
            </div>
            <ProductName name={name} id={id} />

            <ProductQuantityBox count={count} handleChange={changeCount} xmlCount={xmlCount} />
          </div>
          <RemoveProductButton handleClick={removeItem} />
        </div>
      );

    default:
      return (
        <div className="cart_item cart_item_web">
          <span className="line line_1" />
          <span className="line line_2" />
          <span className="line line_3" />
          <ProductImage src={src} id={id} />
          <ProductName name={name} id={id} />

          <ProductQuantityBox count={count} handleChange={changeCount} xmlCount={xmlCount} />
          <div className="product_price_box">
            <ProductOldPrice text={oldPrice + messages['local.dr']} oldPrice={oldPrice} />
            <ProductPrice />
          </div>
          <RemoveProductButton handleClick={removeItem} />
        </div>
      );
  }
}

IndexCartItem.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
  mode: PropTypes.string,
};

export default IndexCartItem;
