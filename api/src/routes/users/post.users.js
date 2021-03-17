const server = require("express").Router();
const passport = require("../../middlewares/passport.middleware.js").passport;
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

    console.log("Creando usuario",JSON.stringify(req.body));

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
// server.post("/signin88",  (req, res, next) => {
    

//   });
  server.post('/signin', 
  passport.authenticate('local'),
  function(req, res) {
    const { password, email } = req.body;

  postControler
    .signIn(email,password)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err)=>{
      res.status(400).json(err.message)
    })
    res.redirect('/');
  });

//   server.post("/signin", function (req, res, next) {
//     const { password, email } = req.body;

//     passport.authenticate("local",  { session: false }, function (err, user, info) {

//         if (err) return next(err);
//         if (!user) return next(info);

//         const responseUser = {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//           role: user.role,
//         };
//         const data = { msg: "Login successful", user: responseUser };

//         return res.status(200).json(data);
//       })
// });


