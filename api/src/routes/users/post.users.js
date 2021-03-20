const server = require("express").Router();
const postControler = require("../../controllers/users/post.users");
const jwt = require('jsonwebtoken')

var passport = require('passport')
require("../../middlewares/passport.middleware").passport

module.exports = server;
const {ACCESS_TOKEN_SECRET} = process.env;

server.post("/",
  async (req, res, next) => {
    const { name, password, email } = req.body;
    var user;
    if(name && password && email){
        user = {
            id: Date.now() + Math.round(Math.random() * 1E9),
            name:name.toString(),
            password_virtual:password.toString(),
            email:email.toString()
        };
    }
    postControler
      .addUser(user)
      .then((user) => {
        if(user === 'user exist'){
          res.status(200).json({
            msg: 'user already exist'
          });
        }
      })
      .catch((error) => {
        if(error.message === 'Validation error: invalid password'){
          res.status(200).json({
            msg: 'invalid password'
          })
        }else if(error.message === 'Validation error: invalid email'){
            res.status(200).json({
              msg: 'email aready exist'
            })
        }else{
          console.log(error)
          res.status(400).json(error.message);
        }
      }); 

  });

server.post(
  "/login",
  function (req, res, next) {
    passport.authenticate(
        "local",
        { session: false },
        function (err, user, info) {
        if (err) return next(err);
        if (!user) return next(info);
          req.logIn(user, { session: false }, function (err) {
            if (err) return next(err);
            const token = jwt.sign({id: user.id,}, ACCESS_TOKEN_SECRET,{expiresIn: "10m"});
            const dataUser = {
              id: user.id,
              email: user.email,
              name: user.name,
              rol: user.rol,
            };
            const data = { msg: "Login successful", user: dataUser, token };
            return res.status(200).json(data);
          });
        }
      )(req, res, next);
    },
    function (err, req, res, next) {
      if (err) {
        res.status(200).json(err);
      }
    }
  );

  server.post(
    "/login/github",
    function (req, res, next) {
      passport.authenticate(
          "local",
          { session: false },
          function (err, user, info) {
          if (err) return next(err);
          if (!user) return next(info);
            req.logIn(user, { session: false }, function (err) {
              if (err) return next(err);
              const token = jwt.sign({id: user.id}, ACCESS_TOKEN_SECRET,{expiresIn: "10m"});
              const dataUser = {
                id: user.id,
                email: user.email,
                name: user.name,
                rol: user.rol,
              };
              const data = { msg: "Login successful", user: dataUser, token };
              return res.status(200).json(data);
            });
          }
        )(req, res, next);
      },
      function (err, req, res, next) {
        if (err) {
          res.status(200).json(err);
        }
      }
    );

server.post("/logout",(req, res) => {
  console.log(req.session)
        req.logout()   
        req.session.destroy((err) => {
            res.clearCookie('sid');  
        })
        res.status(200).json('Logged out');
});


