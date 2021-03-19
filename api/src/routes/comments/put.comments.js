const server = require("express").Router();
const commentControler = require("../../controllers/comments/comments.controller");

server.put("/:commentId", (req, res, next) => {
  const { commentId } = req.params;
  const comment = req.body;
  commentControler
    .editComment(commentId, comment)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;
