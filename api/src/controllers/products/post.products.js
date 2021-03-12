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

  addCategoryToProduct (idProducto, idCategoria) {
    Product.findByPk(idProducto).then((oneProduct) => {
      Categories.findByPk(idCategoria)
        .then((newcategory) => {
          oneProduct.addCategory(newcategory);
          return newcategory;
        })
        .catch((error) => {
          return res.json({ data: error });
        });
     })
 }

}
