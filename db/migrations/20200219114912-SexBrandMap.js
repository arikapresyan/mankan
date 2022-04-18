
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('SexBrandMap', {
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
        model: {
          tableName: 'Product',
          schema: 'public',
        },
        key: 'id',
      },
      onDelete: 'cascade',
    },
    brandId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Brand',
        key: 'id',
      },
      onDelete: 'cascade',

    },
    sex: {
      type: Sequelize.ENUM,
      values: ['BOY', 'GIRL', 'ALL'],
      defaultValue: 'ALL',
    },

    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  }, {
    schema: 'public',
  }),

};
