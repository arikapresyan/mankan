module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ProductStatistic', {
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
          model: {
            tableName: 'Product',
            schema: 'public',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,

      },
      totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,

      },
      bestSeller: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      queryInterface.addConstraint('public.ProductStatistic', ['productId'], {
        type: 'unique',
        name: 'ProductStatisticUnique',
      });
    });
  },
};
