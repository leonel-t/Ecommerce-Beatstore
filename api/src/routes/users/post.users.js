const server = require("express").Router();
const postControler = require("../../controllers/users/post.users");
module.exports = server;


  server.post("/", (req, res, next) => {
    const { name, password, email } = req.body;
    var user;
    if(name && password && email){
         user = {
            name:name.toString(),
            password_virtual:password.toString(),
            email:email.toString()
        };
    }

    console.log(req.body);

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
// passport.authenticate('local', { failureRedirect: '/login' }),
//     function(req, res) {
//     res.redirect('/');
//     }
//   server.post('/register',
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });