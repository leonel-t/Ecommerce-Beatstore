const server = require("express").Router();
const postControler = require("../../controllers/products/post.products");
const { Product, Categories } = require("../../db");
module.exports = server;

server.post("/", (req, res, next) => {
  const attributes = req.body;
  postControler
    .addProduct(attributes)
    .then((products) => {
      res.status(201).json(products);
    })
    .catch((error) => {
      res.status(400).json(error);
      console.log(error)
    });
});
// AGREGAR CATEGORIAS A PRODUCTOS 
server.post('/:idProducto/category/:idCategoria',async (req, res) =>  {
  try {
  const { idProducto, idCategoria } = req.params;
    const result = await postControler.addCategoryToProduct(idProducto, idCategoria)
    
    return res.status(201).send("Category added!");
     
    }
    catch (error) {
      return res.status(400).send({ data: error });
    }
  
});



