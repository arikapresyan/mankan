
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Sliders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    names: {
      type: Sequelize.JSONB,
      allowNull: false,
    },
    order: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.ENUM,
      values: ['on', 'off'],
      defaultValue: 'off',
    },
    type: {
      type: Sequelize.ENUM,
      values: ['static','extraFilter'],
      defaultValue: 'static',
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
