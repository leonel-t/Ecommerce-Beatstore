const server = require("express").Router();
const commentControler = require("../../controllers/comments/comments.controller");

server.post("/", (req, res, next) => {
  const comment = req.body;
  commentControler
    .createComment(comment)
    .then((comment) => {
      res.status(201).json(comment);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;
