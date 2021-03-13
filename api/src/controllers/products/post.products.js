const { Product, Categories } = require("../../db");
module.exports = {
  addProduct: async (product ) => {

    const Producto = await Product.create(product);
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
