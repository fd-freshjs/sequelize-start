"use strict";
module.exports = {
  name: '20220628150200-add-checks-products-to-orders.js',

  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("products_to_orders", {
      type: "CHECK",
      fields: ["amount"],
      where: {
        amount: {
          [Sequelize.Op.gte]: 0,
          [Sequelize.Op.lte]: 1000,
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {

  },
};
