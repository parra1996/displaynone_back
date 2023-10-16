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
      // this.hasMany(models.Order,{
    //   foreignKey: 'userID'
    //  })
    this.belongsTo(models.Company, {
      foreignKey: 'companyName'
    })
    }
  }
  Order.init({
    clientName: DataTypes.STRING,
    companyName: DataTypes.STRING,
    direction: DataTypes.STRING,
    addressee: DataTypes.STRING,
    zip: DataTypes.STRING,
    weight: DataTypes.STRING,
    price: DataTypes.STRING,
    order_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};