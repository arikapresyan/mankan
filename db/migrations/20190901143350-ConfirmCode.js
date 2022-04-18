
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ConfirmCode', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'User',
            schema: 'public',
          },
          key: 'id',
        },
        unique: true,
        allowNull: false,
        onDelete: 'cascade',
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['email', 'password', 'changeEmail'],
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
