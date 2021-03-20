const { Product, Categories, Comment } = require("../../db");
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
        {
          model: Comment,
          as: "comments",
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
      where:{
        id:id
      },
      include: [
        {
          model: Categories,
          as: "categories",
        },
        {
          model: Comment,
          as: "comments",
        },
      ],
    });
  },
  findByProduct(inputValue) {
<<<<<<< HEAD


      return Product.findAll({
          where: {
              [Op.or]: [
                  {
                      name: {
                          [Op.like]: '%' + inputValue + '%'
                      }
                  }
              ]
=======
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
>>>>>>> ca2778cd3193a01f8c7593546962ee5112de3726
          },
        ],
      },
      include: [{ model: Categories, as: "categories" }],
    });
  },
};
