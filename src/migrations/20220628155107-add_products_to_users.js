'use strict';

module.exports = {
  name: '20220628155107-add_products_to_users.js',

  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("products_to_users",{
      product_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'products',
          key: 'id',
        }
      },
      user_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'users',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    /* await queryInterface.addConstraint('products_to_users',{
      type: 'PRIMARY KEY',
      fields: ['product_id','user_id']
    }); */

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("products_to_users");
  }
};