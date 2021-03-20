const { Categories } = require("../../db");
module.exports = {
  getCat: (findAllProducts = () => {
    return Categories.findAll();
  }),
};
