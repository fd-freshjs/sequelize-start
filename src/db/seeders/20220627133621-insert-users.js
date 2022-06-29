"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          firstname: "John",
          lastname: 'Doe',
          isMale: true,
          email: 'asdasd@gmail.com',
          dob: '2000-04-04',
          password: 'test',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: 2,
          firstname: "Johny",
          lastname: 'Douye',
          isMale: true,
          email: 'douye@gmail.com',
          dob: '2001-04-04',
          password: 'test1',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('users', { id: [1, 2] }, {});
   
  },
};
