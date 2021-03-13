const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
