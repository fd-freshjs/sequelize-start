'use strict';
module.exports = {
  name: '20220627111205-add-password.js',

  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'password');
  }
};
