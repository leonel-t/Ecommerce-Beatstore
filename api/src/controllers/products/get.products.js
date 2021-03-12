const { Product, Categories } = require("../../db");
module.exports = {
  findAllProducts() {
    return Product.findAll({
      include: [
        {
          model: Categories,
        },
      ],
    });
  },
  findByCategory(cat) {
    return Product.findAll({
      include: [
        {
          model: Categories,
          where: {
            name: cat,
          },
        },
      ],
    });
  },
  findById(id) {
    return Product.findOne({
      where: { id: id },
      include: [
        {
          model: Categories,
        },
      ],
    });
  },
  findByProduct(value) {
    return Product.findAll({
      where: {
        name: value,
        or: {
          description: value,
        },
      },
    });
  },
};
