const { Product, Categories } = require("../../db");
module.exports = {
  getCat: (findAllProducts = () => {
    return Categories.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
  }),
};
