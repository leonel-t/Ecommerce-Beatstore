const server = require("express").Router();
const getUserController = require("../controllers/users/get.users")

const {ACCESS_TOKEN_SECRET} = process.env;

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


  
  function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token === null) return res.status(401).json('invalid Token')

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err,user) => {
      if(err) return res.status(403).json('access error')
      req.user = user
      next()
    })
  }

