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
    });
});


