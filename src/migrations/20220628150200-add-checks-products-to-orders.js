"use strict";
module.exports = {
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
