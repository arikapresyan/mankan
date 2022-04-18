module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ProductUsageLang', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      productUsageId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ProductUsage',
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
        defaultValue: 'ARM',
      },
      description: {
        type: Sequelize.TEXT,
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
      queryInterface.addConstraint('public.ProductUsageLang', ['productUsageId', 'lang'], {
        type: 'unique',
        name: 'ProductUsageIdLangUnique',
      });
    });
  },
};
