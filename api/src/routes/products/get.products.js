const server = require("express").Router();
const productController = require("../../controllers/products/get.products");

server.get("/", (req, res, next) => {
  productController
    .findAllProducts()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});
server.get("/:id", (req, res, next) => {
  const { id } = req.params;
  productController
    .findById(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});
server.get("/categoria/:nombreCat", (req, res, next) => {
  const { nombreCat } = req.params;
  productController
    .findByCategory(nombreCat)
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});
server.get("/search/:query", (req, res, next) => {
    const { query } = req.params;
  productController
    .findByProduct(query)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;
