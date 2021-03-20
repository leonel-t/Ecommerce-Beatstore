const server = require("express").Router();
const commentControler = require("../../controllers/comments/comments.controller");

server.delete("/", (req, res, next) => {
  commentControler.deleteComment
    .then((products) => {
      res.status(201).json(products);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;
