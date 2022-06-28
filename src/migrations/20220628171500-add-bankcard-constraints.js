"use strict";

module.exports = {
  name: '20220628171500-add-bankcard-constraints.js',

  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.addConstraint(
        "bank_cards",
        {
          name: 'cardNumber_value_check',
          type: 'CHECK',
          fields: ['cardNumber'],
          where: {
            cardNumber: {
              [Sequelize.Op.regexp]: '^[0-9]{16,16}$'
            }
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('bank_cards', 'cardNumber_value_check');
  },
};
