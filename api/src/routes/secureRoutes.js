const server = require("express").Router();

module.exports = server;


  server.get(
    '/',
    (req, res, next) => {
      res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
      })
    }
  );