module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('VocationLang', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      vocationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Vocation',
          key: 'id',
        },
        onDelete: 'cascade',

      },
      lang: {
        type: Sequelize.ENUM,
        values: ['ENG', 'ARM', 'RU'],
        defaultValue: 'ENG',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shortDesc: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    }, {
      schema: 'public',
    });
  },

};
