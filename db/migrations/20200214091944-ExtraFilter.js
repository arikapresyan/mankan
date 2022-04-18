module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ExtraFilter', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sliderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Sliders',
            schema: 'public',
          },
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
    }).then((err) => {
      queryInterface.addConstraint('public.ExtraFilter', ['sliderId'], {
        type: 'unique',
        name: 'SliderIdUnique',
      });
    });
  },
};
