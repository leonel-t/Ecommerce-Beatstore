const server = require("express").Router();
const postControler = require("../../controllers/users/post.users");
var passport = require('passport');
const jwt = require('jsonwebtoken')
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

  // server.post('/signin99',function(req, res) {
  
  //   const { password, email } = req.body;

  // postControler
  //   .signIn(email,password)
  //   .then((user) => {
  //     res.status(200).json(user)
  //   })
  //   .catch((err)=>{
  //     res.status(400).json(err.message)
  //   })

  // });

  server.post('/login',
      async (req,res,next)=> {
        passport.authenticate('local',
          async(err,user,info) =>{
            // try {
            //   if (err || !user) {
            //     const error = new Error('An error occurred.');
    
            //     return next(error);
            //   }
              req.login(
                user,
                { session: false },
                async (error) => {
                  if (error) return next(error);
    
                  const body = { _id: user._id, email: user.email };
                  console.log(body)
                  const token = jwt.sign({ user: body }, 'TOP_SECRET');
                  console.log(token)
    
                  return res.json({ token });
                }
              );
            // } catch (error) {
            //   return next(error);
            // }
      }
    )(req,res,next);
  })



