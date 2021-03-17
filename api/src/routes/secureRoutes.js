const server = require("express").Router();
const getUserController = require("../controllers/users/get.users")

module.exports = server;


  server.get(
    '/',
    (req, res, next) => {
      let email = req.query.email
      console.log('este es el email', req.query)

      getUserController
       .findByEmail(email).then(user => {
         res.json({
         message: 'You made it to the secure route',
         user: user,
         token: req.query.secret_token
      })
       })

    }
  );