// eslint-disable-next-line import/prefer-default-export

const isOneMountPass = (data) => {
  const today = new Date();
  const diff = Math.abs(today.getTime() - data.getTime());
  return ((diff / (1000 * 60 * 60 * 24)) > 30);
};
export const isProductBestSeller = (product) => {
  if (!product.statistic) return false;
  const updatedDate = new Date(product.statistic.updatedAt);
  const { bestSeller } = product?.statistic?.[0] || {};

  return !!(bestSeller || (!isOneMountPass(updatedDate) && product.statistic[0].count));
};

export const isProductNew = (product) => {
  const updatedDate = new Date(product.updatedAt);
  return product.isNew || !isOneMountPass(updatedDate);
};
