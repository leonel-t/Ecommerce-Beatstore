const { Categories } = require("../../db");
module.exports = {
  getCategories: (findAllProducts = () => {
    return Categories.findAll();
  }),
};
