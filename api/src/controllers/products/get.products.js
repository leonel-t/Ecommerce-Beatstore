const { Product, Categories } = require("../../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  findAllProducts() {
    return Product.findAll({
      include: [
        {
          model: Categories,
          as: "categories",
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
  findByProduct(inputValue) {
    return Product.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: "%" + inputValue + "%",
            },
          },
          {
            description: {
              [Op.like]: "%" + inputValue + "%",
            },
          },
        ],
      },
      include: [{ model: Categories, as: "categories" }],
    });
  },
};
