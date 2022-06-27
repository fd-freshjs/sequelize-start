'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING(32),
      allowNull:false,
    },
    brand: {
      type:DataTypes.STRING(32),
      allowNull:false,
    },
    category: {
      type:DataTypes.STRING(32),
      allowNull:false,
    },
    price: {
      type:DataTypes.DECIMAL(10,2),
      allowNull:false,
    },
    amount: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
  });
  return Product;
};


