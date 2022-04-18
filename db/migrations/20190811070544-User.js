module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
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
            msg: 'LastName must be at least 3 characters in length',
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
        allowNull: false,
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
            msg: 'Only numbers allowed for phone',
          },
        },
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: 6,
            msg: 'Password length must be  between 6 to  20',
          },

        },
        allowNull: false,
      },
      lang: {
        type: Sequelize.ENUM,
        values: ['ENG', 'ARM', 'RU'],
        defaultValue: 'ENG',
      },
      isEmailConfirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      isAcceptedRules: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      boughtSum: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      bonusPercent: {
        type: Sequelize.INTEGER,
        defaultValue: 2,
      },
      deliveryAddress: {
        type: Sequelize.JSONB,
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
    }).then((err) => queryInterface.addConstraint('public.User', ['email'], {
      type: 'unique',
      name: 'userEmailUnique',
    }));
  },
  down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query('DROP TABLE public.user cascade;');
  },
};
