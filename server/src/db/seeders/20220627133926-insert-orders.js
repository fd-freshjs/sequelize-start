"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          id: 1,
          address: "New York",
          phone: "41152314212",
          status: "prepared",
          user_id: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: 2,
          address: "California",
          phone: "41152314212",
          status: "prepared",
          user_id: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', { id: [1, 2] }, {});
  },
};
