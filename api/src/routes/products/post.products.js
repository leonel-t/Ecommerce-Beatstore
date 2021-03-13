const server = require("express").Router();
const postControler = require("../../controllers/products/post.products");
module.exports = server;

server.post("/", (req, res, next) => {
  const {name, description, price, stock} = req.body;

  const imagen = req.files
  const imgToDb = imagen[0].filename
  const audioToDb = imagen[1].filename
  console.log(req.files)

  let product = {
    name:name,
    description: description,
    price:price,
    stock:stock,
    image:imgToDb,
    audio:audioToDb
  }
  
  postControler
    .addProduct(product )
    .then((product) => {
      res.status(201).json(product);
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



