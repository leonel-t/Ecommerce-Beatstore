const server = require("express").Router();
const deleteCatControler = require("../../controllers/categories/delete.categories");
module.exports = server;

server.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    deleteCatControler
        .deleteCat(id)
        .then((cat) => {
            res.status(200).json(cat);
          })
          .catch((error) => {
            res.status(400).json(error);
          })
})