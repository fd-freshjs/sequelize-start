"use strict";
const { Model } = require("sequelize");
const { ProductsToOrders } = require('.');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here

      Product.belongsTo(models.Category, {
        targetKey: "name",
        foreignKey: "category",
      });

      Product.belongsToMany(models.Order, {
        through: ProductsToOrders,
        foreignKey: "product_id",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );
  return Product;
};

/* 
  создайте модель и миграцию категория
  в миграции свяжите products.category с categories.name

*/
