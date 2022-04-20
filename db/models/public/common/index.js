const ProductModel = require('./Product');
const ProductItemModel = require('./ProductItem');
const Orders = require('./Orders');
const OrderedProducts = require('./OrderedProducts');

/**
 *
 * @param seq
 * @returns {{Company}}
 */
module.exports = (seq) => ({

  ProductModel: ProductModel(seq),
  ProductItemModel: ProductItemModel(seq),
  Orders: Orders(seq),
  OrderedProducts: OrderedProducts(seq),
});
