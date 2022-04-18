module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ProductPhotos', {
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
      captionText: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['image'],
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alt: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      order: {
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
    });
  },
};
