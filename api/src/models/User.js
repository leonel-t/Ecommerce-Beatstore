const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id:{
      type: DataTypes.STRING(1000),
      primaryKey: true,
      allowNull: true
    },
    googleId:{
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    githubId:{
      type: DataTypes.STRING,
      allowNull: true
    },
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
          args: [6,30],
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
