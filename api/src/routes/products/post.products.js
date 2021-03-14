const server = require("express").Router();
const postControler = require("../../controllers/products/post.products");
module.exports = server;

server.post("/", (req, res, next) => {
  const {name, description, artist, price, bpm, scale, date} = req.body;

  const files = req.files
  //  const imgToDb = files[0].filename
  //  const audioToDb = files[1].filename
console.log(files)
  let product = {
    name:name,
    description: description,
    artist:artist,
    price:price,
    bpm:bpm,
    scale:scale,
    date:date,
    //  image:imgToDb,
    //  audio:audioToDb
  }
  
  postControler.addProduct(product).then(product => {
      res.status(200).json(product);
    }).catch((error) => {
      res.status(400).json(error);
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



