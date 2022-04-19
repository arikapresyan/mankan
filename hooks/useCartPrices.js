import { useMemo } from 'react';

const reduceFunc = (a, b) => ((a.percent ? a.price : a.xmlPrice) * a.count || a) + (b.percent ? b.price : b.xmlPrice) * b.count;

export default (cartData, promoCodeData) => {
  const fullPrice = useMemo(
    () => cartData.reduce(reduceFunc, 0),
    [cartData],
  );
  const fullNewPrice = useMemo(
    () => {
      if (!promoCodeData) return null;
      const reduce = cartData.reduce(reduceFunc, 0);
      return promoCodeData ? (reduce * (100 - promoCodeData.percent)) / 100 : reduce;
    },
    [promoCodeData, cartData],
  );

  const deliveryPrice = useMemo(() => ((fullNewPrice || fullPrice) >= 20000 ? 0 : 800),
    [fullNewPrice]);

  const total = useMemo(() => (fullNewPrice || fullPrice) + deliveryPrice,
    [fullNewPrice, deliveryPrice, fullPrice, cartData]);
  return {
    fullPrice, fullNewPrice, deliveryPrice, total,
  };
};
