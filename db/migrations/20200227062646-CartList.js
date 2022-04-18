
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('CartList', {

    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    batteryId: {
      type: Sequelize.INTEGER,
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
  }).then((err) => {
    queryInterface.addConstraint('public.CartList', ['productId', 'userId'], {
      type: 'unique',
      name: 'ProIdUserIdUnique',
    });
  }),
};
