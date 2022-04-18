module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ProductTypeLang', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      productTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ProductType',
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
      queryInterface.addConstraint('public.ProductTypeLang', ['productTypeId', 'lang'], {
        type: 'unique',
        name: 'ProductTypeIdLangUnique',
      });
    });
  },
};
