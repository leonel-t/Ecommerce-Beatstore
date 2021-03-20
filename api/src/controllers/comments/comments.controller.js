const { User, Comment, Product } = require("../../db");

module.exports = {
  createComment: async (comment) => {
    return await Comment.create(comment).then((comment) => comment);
  },
  getComment: async () => {
    return await Comment.findAll().then((comment) => comment);
  },
  getCommentById: async (idComment) => {
    return await Comment.findByPk(idComment).then((comment) => comment);
  },
  editComment: async (commentId, comment) => {
    return await Comment.update(comment, {
      where: {
        id: commentId,
      },
    }).then((comment) => comment);
  },
  deleteComment: async (commentId) => {
    return await Comment.destroy({
      where: {
        id: commentId,
      },
    }).then((comment) => comment);
  },
};
