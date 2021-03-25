const server = require("express").Router();
const postControler = require("../../controllers/categories/post.categories");
const {protectorAdmin} = require("../../middlewares/protector.middleware");

server.post("/", protectorAdmin, (req, res, next) => {
  const attributes = req.body;
  if(!req.headers.token ){
    res.status(400).json("NO AUTORIZATION TOKEN");
  }else{
    postControler.addCat(attributes).then((category) => {
      return res.status(201).json(category);
    }).catch((error) => {
      return res.status(400).json(error.message);
    });
  };
});
module.exports = server;