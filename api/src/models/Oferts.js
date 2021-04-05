const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("oferts", {
    ofertStatus: {
        type: DataTypes.ENUM("none", "day", "week", "month", "season", "holiday"),
        defaultValue: "none"
      },
  });
}; 