const server = require("express").Router();
const putCatControler = require("../../controllers/categories/put.categories");
module.exports = server;

server.put('/:id', (req, res, next) => {
    const cat = req.body;
    const { id } = req.params;
    putCatControler
        .editCat(cat, id)
        .then((cat) => {
            res.status(200).json(cat);
          })
          .catch((error) => {
            res.status(400).json(error);
          })
})