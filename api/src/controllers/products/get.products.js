const { Product, Categories, Comment } = require("../../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  getAllProducts: async () => {
    return await Product.findAll({
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
  findProductsByCategoryName: async (category) => {
    return await Product.findAll({
      include: [
        {
          model: Categories,
          where: {
            name: category,
          },
        },
      ],
    });
  },
  findProductById: async (id) => {
    return await Product.findOne({
      where: {
        id: id
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
  getProductsByLetterIncludeInTheName: async (inputValue) => {
    return await Product.findAll({
      where: {
        name: {
          [Op.iLike]: '%' + inputValue + '%'
        }
      },
      include: [{ model: Categories, as: "categories" }],
    });
  },
  searchProductsByCategoryName: (categories) => {
    var products = [];
    var categorias = [];

    for (let i = 0; i < categories.length; i++) {
      console.log("BUCLE", categories[i])
      Categories.findAll({
        where: {
          name: {
            [Op.iLike]: categories[i]
          }
        },
        include: [{ model: Product, as: 'products' }]
      }).then(cat => {
        console.log(cat)

        /*
                for (let e = 0; e < cat[0].categories.length; e++) {
                  if (cat[0].categories[e]) {
        
                    console.log(cat[0].categories[e])
                  }
                }
        * */

      })

    }


    /*
        for (let e = 0; e < categorias[0].categories.length; e++) {
          if (categorias[0].categories[e]) {
            products.push(categorias[0].categories[e])
          }
           }
    */


    console.log("BUCLE", products)
    return products
  },
};
