'use strict';
module.exports = {
  name: '20220624130130-create-user.js',

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      firstname: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      dob: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      height: {
        type: Sequelize.NUMERIC(3, 2),
        allowNull: false,
        defaultValue: 1.5,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};