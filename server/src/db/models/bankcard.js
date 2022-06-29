'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BankCard.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  BankCard.init({
    cardNumber: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,

      validate: {
        isNumeric: true,
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'BankCard',
    tableName: 'bank_cards',
  });
  return BankCard;
};