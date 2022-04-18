module.exports = {

  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    {
      tableName: 'Brand',
      schema: 'public',
    },
    [
      {
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',

        name: 'Mankan',
      },
    ],
  ),
};
