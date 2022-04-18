
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PromoCodes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    code: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: true,
    },
    dateOfUse: {
      type: Sequelize.DATE,
    },
    isUsed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    percent: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    validTill: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
};
