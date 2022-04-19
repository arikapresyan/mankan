import React, {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import { useIntl } from 'react-intl';
import router from 'next/router';
import useCartActions from '../../../store/cart/useCartActions';
import {
  getProductSizeFromObj, getBonus, getProductBrand, getProductAge, getProductBattery, addToCartObj,
} from '../../../constants/utils';
import keys from '../../../constants/keys';
import useGetProductPrice from '../../../hooks/useGetProductPrice';

const { IMAGE_POSTFIX } = keys;

function useBuyProductModal({
  product, localChanges, handleHideModal, bonus,
}) {
  const { cartAddProductAction } = useCartActions();
  const { messages } = useIntl();
  const text = <span>{messages['local.modal_battery']}</span>;


  const {
    size,
    brand,
    id,
    percent,
    price,
    accessories,
    photos,
    xmlCount,
    xmlBarCode,
  } = product;
  const [hasBattery, setHasBattery] = useState(false);

  const [count, setCount] = useState(
    (localChanges[product.id] && localChanges[product.id].count)
    || product.count
    || 1,
  );
  const battery = useMemo(() => getProductBattery(accessories), [accessories]);
  useEffect(() => {
    if (
      battery
       && localChanges[id]
       && (localChanges[id].hasBattery || localChanges[id].batteryId)
       && battery.xmlCount
    ) {
      setHasBattery(true);
    }
  }, [battery, localChanges]);


  const batteryText = useMemo(() => battery && `${battery.ProductAccessoriesMap.count}  ${messages['local.item(s)']} ${battery.name}`, [battery, messages]);
  const brandName = useMemo(() => getProductBrand(brand), [brand]);
  const sizeText = useMemo(() => getProductSizeFromObj(size), [size]);
  const productAga = useMemo(() => getProductAge(product.minAge, product.maxAge),
    [product.minAge, product.maxAge]);

  const photo = useMemo(() => {
    const firstPhoto = photos ? photos.sort((a, b) => a.order - b.order)[0] : null;

    if (!firstPhoto) return {};
    return ({
      url: `${IMAGE_POSTFIX}${id}/${firstPhoto.url}`,
      alt: firstPhoto.alt,
      title: firstPhoto.title,
    });
  }, [photos]);

  const { newPrice, oldPrice } = useGetProductPrice(product);

  const bonusText = useMemo(() => getBonus(newPrice, bonus || 2, count), [newPrice, bonus, count]);
  const priceBayCount = useMemo(() => newPrice * count, [newPrice, count]);

  const addToCart = (redirect) => {
    cartAddProductAction(
      addToCartObj({
        hasBattery, battery, count, product,
      }),
      router.router.route === '/cart' || redirect,
    );
    handleHideModal();
  };

  const addToCartAndRedirect = () => {
    addToCart(true);
  };

  const text2 = useCallback(
    () => <span>{messages['local.can_use_bonus_if']}</span>,
    [messages],
  );


  return {
    addToCartAndRedirect,
    addToCart,
    bonusText,
    batteryText,
    brandName,
    sizeText,
    photo,
    text,
    setCount,
    messages,
    xmlPrice: oldPrice,
    percent,
    battery,
    productAga,
    text2,
    id,
    count,
    hasBattery,
    setHasBattery,
    price,
    xmlCount,
    xmlBarCode,
    priceBayCount,
  };
}

export default useBuyProductModal;
