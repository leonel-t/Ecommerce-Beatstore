const server = require("express").Router();
const postControler = require("../../controllers/users/post.users");
const jwt = require('jsonwebtoken')

var passport = require('passport')
require("../../middlewares/passport.middleware")

module.exports = server;


  server.post("/",
      async (req, res, next) => {
        const { name, password, email } = req.body;
    
        var user;
        if(name && password && email){
            user = {
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

  // server.post('/login',
  //     async (req,res,next)=> {
  //       console.log(req.body)
  //       passport.authenticate('login',
  //         async(err,user,info) =>{
  //           try {
  //             if (err || !user) {
  //               const error = new Error('An error occurred.');
    
  //               return next(error);
  //             }
  //             req.logIn(
  //               user,
  //               { session: false },
  //               async (error) => {
  //                 if (error) return next(error);
    
  //                 const body = { id: user.id, email: user.email };
  //                 console.log(body)
  //                 const token = jwt.sign( body, 'secret');
  //                 console.log(token)
    
  //                 return res.json({ token });
  //               }
  //             );

  //     }catch (error) {
  //       return next(error);
  //     }
  //   }
  //   )(req,res,next);
  // }
  // )
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
            const token = jwt.sign(
              {
                id: user.id,
              },
              "secret",
              { expiresIn: "1m" }
            );
            const dataUser = {
              id: user.id,
              email: user.email,
              name: user.name,
              rol: user.rol,
            };
            
            const data = { msg: "Login successful", user: dataUser, token };
            console.log(data)
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

  server.post("/logout", (req, res) => {
    console.log(req)
    if (req.isAuthenticated()) {
      req.logout();
      res.status(200).json({ msg: "logout successful" });
    }
    res.status(200).json({ msg: "no authenticated user" });
  });


