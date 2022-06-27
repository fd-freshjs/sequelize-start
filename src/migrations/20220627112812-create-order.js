'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('prepared', 'paid', 'shipping', 'shipped', 'received'),
        allowNull: false,
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

    await queryInterface.addConstraint('orders', {
      type: 'CHECK',
      fields: ['phone'],
      where: {
        phone: {
          [Sequelize.Op.regexp]: '^[0-9]{11,11}$',
        }
      }
    });

    // ENUM ~~ column varchar CHECK (column IN ( 'value', 'another value' ))
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};