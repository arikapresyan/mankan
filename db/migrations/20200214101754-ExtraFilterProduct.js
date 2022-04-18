
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ExtraFilterProduct', {
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
    extraFilterId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'ExtraFilter',
        key: 'id',
      },
      onDelete: 'cascade',
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
