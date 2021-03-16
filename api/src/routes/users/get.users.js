const server = require("express").Router();
const usersController = require("../../controllers/users/get.users");
module.exports = server;

server.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });


