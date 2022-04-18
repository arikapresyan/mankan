module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ProductItem', {
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
      },
      captionText: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['image', 'video'],
      },
      url: {
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
    });
  },
};
