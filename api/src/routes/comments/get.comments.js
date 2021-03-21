const server = require("express").Router();
const commentControler = require("../../controllers/comments/comments.controller");

server.get("/", (req, res, next) => {
  commentControler
    .getComment()
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
});
server.get("/:commentId", (req, res, next) => {
  const { commentId } = req.params;
  commentControler
    .getCommentById(commentId)
    .then((comments) => {
      res.status(201).json(comments);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;
