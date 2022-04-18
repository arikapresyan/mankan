
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Age', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    minAge: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    maxAge: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 20,
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
  }),

};
