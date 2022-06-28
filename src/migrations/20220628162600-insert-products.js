"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          name: 'Кофе',
          brand: 'Черная карта',
          price: 20.3,
          amount: 20,
          category: 'Еда и напитки',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: 2,
          name: 'Мистер Проппер',
          brand: 'PAndG',
          price: 40.6,
          amount: 40,
          category: 'Бытовая химия',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', { id: [1, 2] }, {});
  },
};
