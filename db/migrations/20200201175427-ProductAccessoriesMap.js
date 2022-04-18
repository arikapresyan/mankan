
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ProductAccessoriesMap', {
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
    accessoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    count: {
      type: Sequelize.INTEGER,
      defaultValue: 1,

    },
    type: {
      type: Sequelize.ENUM,
      values: ['bug', 'battery'],
      allowNull: false,
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
  }).then((err) => {
    queryInterface.addConstraint('public.ProductAccessoriesMap', ['productId', 'accessoryId'], {
      type: 'unique',
      name: 'ProductIdAccessoryIdUnique',
    });
  }),
};
