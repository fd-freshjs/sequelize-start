"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ User, Category, Order, ProductsToOrders, ProductsToUsers }) {
      // define association here

      Product.belongsTo(Category, {
        targetKey: "name",
        foreignKey: "category",
      });

      Product.belongsToMany(Order, {
        through: ProductsToOrders,
        foreignKey: "product_id",
      });

      Product.belongsToMany(User, {
        through: ProductsToUsers,
        foreignKey: 'product_id',
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
