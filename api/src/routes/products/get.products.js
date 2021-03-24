const server = require("express").Router();
const {
  getAllProducts,
  findProductById,
  findProductsByCategoryName,
  getProductsByLetterIncludeInTheName
 } = require("../../controllers/products/get.products");

server.get("/", (req, res, next) => {
  return getAllProducts().then((products) => {
      res.status(200).json(products);
    }).catch((error) => {
      res.status(400).json(error);
    });
});
server.get("/:id", (req, res, next) => {
  const { id } = req.params;
   return findProductById(id).then((product) => {
     console.log(product)
      res.status(200).json(product);
    }).catch((error) => {
      res.status(400).json(error);
    });
});
server.get("/categoria/:nombreCat", (req, res, next) => {
  let { category } = req.params;
  return findProductsByCategoryName(category).then((products) => {
      res.status(200).json(products);
    }).catch((error) => {
      res.status(400).json(error);
    });
});
server.get("/search/:query", (req, res, next) => {
    let { query } = req.params;
    return getProductsByLetterIncludeInTheName(query).then((product) => {
      res.status(200).json(product);
    }).catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;
