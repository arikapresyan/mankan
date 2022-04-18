module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('BoughtProducts', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'User',
            schema: 'public',
          },
          key: 'id',
        },
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
      },
      minAge: {
        type: Sequelize.INTEGER,
      },
      maxAge: {
        type: Sequelize.INTEGER,
      },
      sex: {
        type: Sequelize.ENUM,
        values: ['BOY', 'GIRL', 'ALL'],
      },
      paymentType: {
        type: Sequelize.ENUM,
        values: ['cash', 'non-cash', 'bonus'],
        defaultValue: 'cash',
      },
      amount: {
        type: Sequelize.STRING,
        allowNull: false,
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
      queryInterface.addConstraint('public.BoughtProducts', ['productId', 'userId'], {
        type: 'unique',
        name: 'ProductIdUserIdBoughtUnique',
      });
    });
  },
};
