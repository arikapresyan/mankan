module.exports = {

  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    {
      tableName: 'WeekTime',
      schema: 'public',
    },
    [
      {
        week: '[1,2,3,4,5]',
        time: '["12:00", "16:00", "19:00"]',
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',
      },

    ],
  ),
};
