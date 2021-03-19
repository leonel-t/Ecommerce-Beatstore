const server = require("express").Router();
const usersController = require("../../controllers/users/get.users");



module.exports = server;

  server.get("/", (req, res, next) => {
    usersController
      .findAllUsers()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });

  server.get("/:id", (req, res, next) => {
    const { id } = req.params;
    
    usersController
      .findById(id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });

  









