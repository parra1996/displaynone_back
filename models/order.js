'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Client, {
        foreignKey: 'clientID'
      })
      this.belongsTo(models.Company, {
        foreignKey: 'companyID'
      })
    }
  }
  Order.init({
    clientID: DataTypes.INTEGER,
    companyID:DataTypes.INTEGER,
    email: DataTypes.STRING,
    userID: DataTypes.STRING,
    addressee: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};