const server = require("express").Router();
const getCatControler = require("../../controllers/categories/get.categories");
const { Product, Categories } = require("../../db");
module.exports = server;

server.get("/", (req, res, next) => {
  getCatControler
    .getCat()
    .then((products) => {
      res.status(201).json(products);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});
