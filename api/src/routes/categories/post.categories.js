const server = require("express").Router();
const postControler = require("../../controllers/categories/post.categories");
const {protectorAdmin, protectorUser } = require("../../middlewares/protector.middleware")



server.post("/", protectorUser, (req, res, next) => {
  console.log(req.headers.token)
  if(!req.headers.token ){
    res.status(400).json("NO AUTORIZATION TOKEN");
  }else{
      const attributes = req.body;
  
  postControler.addCat(attributes)
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
  }


});

module.exports = server;