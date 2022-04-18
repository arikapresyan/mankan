module.exports = {

  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    {
      tableName: 'User',
      schema: 'public',
    },
    [

      {
        firstName: 'Admin',
        lastName: 'Admin',
        email: 'admin@mailinator.com',
        phone: '+37477765674',
        password: 'newmb44e061am1mcc373de48f283468b01b8f8c07d613fca6f883462571a6e6b7d25c4ad458fa5c705a1afd7ceddee8219e3774c79b36028d638ceeebe7984a8e00a2c95004a688',
        lang: 'ENG',
        isEmailConfirmed: true,
        isAcceptedRules: true,
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ],
  ),
};
