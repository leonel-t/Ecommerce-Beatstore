const server = require("express").Router();
const getCatControler = require("../../controllers/categories/get.categories");

server.get("/", (req, res, next) => {
  getCatControler
    .getCat()
    .then((categories) => {
      res.status(201).json(categories);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;