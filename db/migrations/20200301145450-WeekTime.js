
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('WeekTime', {

    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    week: {
      type: Sequelize.JSONB,
    },
    time: {
      type: Sequelize.JSONB,
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
