const server = require("express").Router();
const postControler = require("../../controllers/categories/post.categories");
const { Product, Categories } = require("../../db");
module.exports = server;

server.post("/", (req, res, next) => {
  const attributes = req.body;
  postControler.addCat(attributes)
    .then((products) => {
      res.status(201).json(products);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});
