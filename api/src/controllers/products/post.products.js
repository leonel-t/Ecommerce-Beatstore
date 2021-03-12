const { Product, Categories } = require("../../db");
module.exports = {
  addProduct: async (params) => {
    const { name, description, price, stock, image } = params;

    const Producto = await Product.create({
      name,
      description,
      price,
      stock,
      image,
    });

    return Producto;
  },

};
