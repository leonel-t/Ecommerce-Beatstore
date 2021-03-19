const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orderline", {
    productId:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    price:{
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    subtotal:{
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    orderId:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  });
};