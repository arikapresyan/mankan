
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('AgeMap', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Product',
          schema: 'public',
        },
        key: 'id',
      },
      onDelete: 'cascade',
    },
    ageId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Age',
        key: 'id',
      },
      onDelete: 'cascade',

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
