export default (product) => {

  const { percent } = product;
  const oldPrice = product.xmlPrice;
  const newPrice = percent ? product.price : product.xmlPrice;

  return {
    oldPrice,
    newPrice,
  };
};
