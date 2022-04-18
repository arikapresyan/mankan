module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Orders', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'User',
            schema: 'public',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      paymentId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paymentAccepted: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      firstName: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: 3,
            msg: 'FirstName must be at least 3 characters in length',
          },
          is: {
            args: ['^\\p{L}+$', 'u'],
            msg: 'Only letters allowed',
          },
        },
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: 3,
            msg: 'LirstName must be at least 3 characters in length',
          },
          is: {
            args: ['^\\p{L}+$', 'u'],
            msg: 'Only letters allowed',
          },
        },
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isEmail: {
            msg: 'Invalid email.',
          },
        },
      },
      phone: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [9, 12],
            msg: 'phone number must be at least 9 and at max 12 characters in length',
          },
          is: {
            args: ['^[\\+]?[(]?[0-9]+$', 'i'],
            msg: 'Only numbers allowed',
          },
        },
        allowNull: false,
      },
      promoCodeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // references: {
        //   model: {
        //     tableName: 'PromoCodes',
        //     schema: 'public',
        //   },
        //   key: 'id',
        // },
      },
      promoCode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      promoCodePercent: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryTime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryPrice: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      percent: {
        type: Sequelize.INTEGER,
      },
      paymentType: {
        type: Sequelize.ENUM,
        values: ['cash', 'non-cash', 'bonus'],
        defaultValue: 'cash',
      },
      totalWithOutPromo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalWithPromo: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      totalAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['pending', 'rejected', 'completed'],
        defaultValue: 'pending',
      },
      bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
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
    });
  },
};
