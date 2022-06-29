"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductsToUsers extends Model {
    static associate(models) {
      // define association here
    }
  }
  ProductsToUsers.init(
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ProductsToUsers",
      tableName: 'products_to_users',
    }
  );
  return ProductsToUsers;
};