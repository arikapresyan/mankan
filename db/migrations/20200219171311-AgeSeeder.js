module.exports = {

  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    {
      tableName: 'Age',
      schema: 'public',
    },
    [
      {
        minAge: 0,
        maxAge: 1,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',

      },
      {
        minAge: 1,
        maxAge: 2,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',


      }, {
        minAge: 2,
        maxAge: 4,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',


      }, {
        minAge: 4,
        maxAge: 6,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',


      }, {
        minAge: 6,
        maxAge: 8,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',


      },
      {
        minAge: 8,
        maxAge: 20,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',


      },
    ],
  ),
};
