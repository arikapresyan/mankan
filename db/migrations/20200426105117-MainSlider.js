
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('MainSlider', {

    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
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
