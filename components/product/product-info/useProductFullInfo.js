import React, { useState, useMemo, useCallback } from 'react';
import { useIntl } from 'react-intl';
import Checkbox from 'antd/lib/checkbox';
import { useSelector } from 'react-redux';
import useCartActions from '../../../store/cart/useCartActions';
import { getBonus, addToCartObj } from '../../../constants/utils';
import { selectCart } from '../../../store/cart/reducer';
import useGetProductPrice from '../../../hooks/useGetProductPrice';


const useProductFullInfo = ({ product, user, wishlistChangeItemAction }) => {
  const cart = useSelector(selectCart);
  const isInCart = !!cart?.[product.id];

  const [hasBattery, setHasBattery] = useState(false);
  const { messages } = useIntl();
  const [count, setCount] = useState(1);

  const text = useCallback(
    () => (
      <span>
        {messages['local.modal_battery'] }
      </span>
    ),
    [messages['local.modal_battery']],
  );

  const text2 = useCallback(() => <span>{messages['local.can_use_bonus_if']}</span>, [messages['local.can_use_bonus_if']]);
  const { cartAddProductAction } = useCartActions();

  const name = useMemo(() => product.langs[0].name, [product.name]);

  const { newPrice, oldPrice } = useGetProductPrice(product);

  const Price = useCallback(() => (
    <span key="product_price" className="product_price">
      {newPrice * count}
      {' '}
      {messages['local.dr']}
      ․
    </span>
  ), [newPrice, count]);

  const LastPrice = useCallback(() => (newPrice !== oldPrice
    ? (
      <span className="old_price">
        {oldPrice * count}
        {' '}
        {messages['local.dr']}
        ․
      </span>
    )
    : null), [oldPrice, count, newPrice]);

  const bonus = useMemo(() => getBonus(product.price, user.bonusPercent || 2, count),
    [user, product.price, user.bonusPercent, count]);

  const battery = useMemo(() => {
    const bat = product.accessories.find((accessory) => accessory.ProductAccessoriesMap.type
      === 'battery');
    if (bat?.xmlCount) return bat;
    return null;
  }, []);


  const batteryPrice = useMemo(() => battery && battery.price * count
    * battery.ProductAccessoriesMap.count,
  [battery, count]);


  const AddBattery = useCallback(() => (
    battery ? (
      <div className="add_prod">
        <Checkbox
          checked={hasBattery}
          onChange={() => setHasBattery(!hasBattery)}
        >
          {messages['local.add_batteries']}

        </Checkbox>
      </div>
    ) : ''
  ), [hasBattery, battery, setHasBattery, messages['local.add_batteries']]);

  const addToCart = (redirect) => {
    cartAddProductAction(
      addToCartObj({
        hasBattery, battery, count, product,
      }),
      redirect,
    );
  };


  const addToCartAndRedirect = () => {
    addToCart(true);
  };

  const changeWishlist = useCallback(() => {
    wishlistChangeItemAction({ productId: product.id });
  });

  return {
    setHasBattery,
    AddBattery,
    hasBattery,
    text,
    setCount,
    text2,
    count,
    messages,
    name,
    Price,
    LastPrice,
    bonus,
    isInCart,
    batteryPrice,
    addToCart,
    addToCartAndRedirect,
    changeWishlist,
    xmlCount: product.xmlCount,
  };
};

export default useProductFullInfo;
