const server = require("express").Router();
const putCatControler = require("../../controllers/categories/put.categories");
const {protectorAdmin} = require("../../middlewares/protector.middleware");

server.put('/:id',protectorAdmin, (req, res, next) => {
  const cat = req.body;
  const { id } = req.params;
  return putCatControler.editCat(cat, id).then((cat) => {
      return res.status(200).json(cat);
    }).catch((error) => {
      return res.status(400).json(error);
    });
});

module.exports = server;