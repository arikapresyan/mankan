module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ProductLang', {
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      metaTitle: {
        type: Sequelize.STRING,
      },
      metaDescription: {
        type: Sequelize.TEXT,
      },
      lang: {
        type: Sequelize.ENUM,
        values: ['ARM', 'ENG', 'RU'],
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
      queryInterface.addConstraint('public.ProductLang', ['productId', 'lang'], {
        type: 'unique',
        name: 'ProductIdLangUnique',
      });
    });
  },
};
