const server = require("express").Router();

var passport = require('passport')
require("../middlewares/github.middleware")


module.exports = server;

server.get('/auth/github',
  passport.authenticate('github'));

server.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
    res.status(200).json("REGISTRADO")
  });