const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("coment", {
    coment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
