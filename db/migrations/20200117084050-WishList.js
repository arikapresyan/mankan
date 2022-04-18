
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('WishList', {

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
    queryInterface.addConstraint('public.WishList', ['productId', 'userId'], {
      type: 'unique',
      name: 'ProductIdUserIdUnique',
    });
  }),
};
