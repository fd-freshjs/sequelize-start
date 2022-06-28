'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products_to_orders', {
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
        },
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id',
        },
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

    await queryInterface.addConstraint('products_to_orders', {
      type: 'PRIMARY KEY',
      fields: ['product_id', 'order_id'],
    }); // PRIMARY KEY (product_id, order_id)

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products_to_orders');
  }
};