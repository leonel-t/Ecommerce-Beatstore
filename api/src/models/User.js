const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    password_virtual:{
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        len:{
          args: [6,12],
          msg: 'invalid password'
        }
      }
    },
    rol: {
      type: DataTypes.ENUM("admin", "client"),
      defaultValue:"client"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail:{
          msg: 'invalid email'
        }
      }
    },
  });
};
