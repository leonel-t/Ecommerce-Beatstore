const { User, Comment, Product } = require("../../db");

module.exports = {
  createComment: async (idProduct,comment) => {
    return await Comment.create(comment).then((c) => {
      console.log("COMMENT", c.id)
      console.log("Product", idProduct)
      return Product.findByPk(idProduct).then((oneProduct) => {
        Comment.findByPk(c.id)
          .then((newComment) => {
            console.log("ESTOY ACAA")
            oneProduct.addComment(newComment);
            return newComment;
          })
          .catch((error) => {
            return res.json({ data: error });
          });
       })
    });
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
  addCommentToProduct (idProducto, idComment) {
    console.log("ESTOY ACAA")
    return Product.findByPk(idProducto).then((oneProduct) => {
      Comment.findByPk(idComment)
        .then((newComment) => {
          console.log("ESTOY ACAA")
          oneProduct.addComment(newComment);
          return newComment;
        })
        .catch((error) => {
          return res.json({ data: error });
        });
     })
 }
};
