module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Subscribers', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'Invalid email.',
          },
        },
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
