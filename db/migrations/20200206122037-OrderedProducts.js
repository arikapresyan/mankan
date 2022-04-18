module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('OrderedProducts', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Orders',
            schema: 'public',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: {
        //     tableName: 'Product',
        //     schema: 'public',
        //   },
        //   key: 'id',
        // },
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'User',
        //     schema: 'public',
        //   },
        //   key: 'id',
        // },
      },
      xmlId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      xmlBarCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      xmlPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      percent: {
        type: Sequelize.INTEGER,
      },

      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      count: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nameForUser: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['pending', 'rejected', 'completed'],
        defaultValue: 'pending',
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    }, {
      schema: 'public',
    }).then((err) => {
      queryInterface.addConstraint('public.OrderedProducts', ['productId', 'orderId'], {
        type: 'unique',
        name: 'OrderedProductsUnique',
      });
    });
  },
};
