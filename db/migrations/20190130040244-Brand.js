module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Brand', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
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
  // down(queryInterface, Sequelize) {
  //   return queryInterface.sequelize.query('DROP TABLE public. cascade;');
  // },
};
