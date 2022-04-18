
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ProductMap', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    productTypeId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'ProductType',
        key: 'id',
      },
    },
    productUsageId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'ProductUsage',
        key: 'id',
      },

    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    schema: 'public',
  }),

};
