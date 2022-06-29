"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product, ProductsToOrders }) {
      // define association here
      Order.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });

      Order.belongsToMany(Product, {
        through: ProductsToOrders,
        foreignKey: "order_id",
      });
    }
  }
  Order.init(
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      status: {
        type: DataTypes.ENUM(
          "prepared",
          "paid",
          "shipping",
          "shipped",
          "received"
        ),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders", // *
    }
  );
  return Order;
};

/* 
  Создать модель и миграцию
  товары
  (
    название,
    бренд,
    категория,
    цена,
    колво на складе
  )
  проверьте название таблицы в миграции и tableName в модели

  * создать миграцию с ограничениями
  цена больше 1
  название не пустая строка
  колво на складе болльше равно 0
*/
