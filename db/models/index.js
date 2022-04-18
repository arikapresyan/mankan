const public1 = require('./public');

module.exports = (seq) => {
  const products = {
    public: public1(seq),
  };

  for (const productName in products) {
    for (const groupName in products[productName]) {
      for (const modelName in products[productName][groupName]) {
        if ('associate' in products[productName][groupName][modelName]) {
          products[productName][groupName][modelName].associate(products);
        }
      }
    }
  }
  return products;
};
