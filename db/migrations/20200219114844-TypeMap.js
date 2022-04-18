
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('TypeMap', {
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
      onDelete: 'cascade',

    },
    typeId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'ProductType',
        key: 'id',
      },
      onDelete: 'cascade',

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
