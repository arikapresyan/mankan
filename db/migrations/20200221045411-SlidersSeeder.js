module.exports = {

  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    {
      tableName: 'Sliders',
      schema: 'public',
    },
    [
      {
        names: '[{"name":"New Items","lang":"ENG"},{"name":"Նորույթներ","lang":"ARM"},{"name":"Новинки","lang":"RU"}]',
        order: 1,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',
        status: 'on',
        type: 'static',

      },
      {
        names: '[{"name":"Choose by age","lang":"ENG"},{"name":"Ընտրել ըստ տարիքի","lang":"ARM"},{"name":"Выбрать по возрасту","lang":"RU"}]',
        order: 2,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',
        status: 'on',
        type: 'static',
      }, {
        names: '[{"name":"Sales","lang":"ENG"},{"name":"Զեղչված տեսականի","lang":"ARM"},{"name":"Скидки","lang":"RU"}]',
        order: 3,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',
        status: 'on',
        type: 'static',
      }, {
        names: '[{"name":"Own Production","lang":"ENG"},{"name":"Սեփական արտադրանք","lang":"ARM"},{"name":"Наша продукция","lang":"RU"}]',
        order: 4,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',
        status: 'on',
        type: 'static',
      }, {
        names: '[{"name":"Choose present","lang":"ENG"},{"name":"Ընտրել նվեր","lang":"ARM"},{"name":"Выбирите подарок","lang":"RU"}]',
        order: 5,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',
        status: 'on',
        type: 'static',
      }, {
        names: '[{"name":"Best Sellers","lang":"ENG"},{"name":"Լավագույն վաճառք","lang":"ARM"},{"name":"Бестселлеры","lang":"RU"}]',
        order: 6,
        createdAt: '2020-01-31T08:12:59.469Z',
        updatedAt: '2020-01-31T08:12:59.471Z',
        status: 'on',
        type: 'static',
      },
    ],
  ),
};
