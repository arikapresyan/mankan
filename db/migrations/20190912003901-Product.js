module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Product', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      xmlId: {
        type: Sequelize.INTEGER,
      },
      xmlBarCode: {
        type: Sequelize.STRING,
      },
      xmlName: {
        type: Sequelize.TEXT,
      },
      xmlPrice: {
        type: Sequelize.INTEGER,
      },
      xmlCount: {
        type: Sequelize.INTEGER,
      },

      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },

      price: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.JSONB,
      },
      boxSize: {
        type: Sequelize.JSONB,
      },

      percent: {
        type: Sequelize.INTEGER,
      },

      visible: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      minAge: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      maxAge: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 12,
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
      queryInterface.addConstraint('public.Product', ['xmlId'], {
        type: 'unique',
        name: 'ProductIdUnique',
      });
    });
  },
};
