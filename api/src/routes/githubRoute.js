const server = require("express").Router();

var passport = require('passport')
require("../middlewares/github.middleware")
require("../middlewares/google.middleware")


module.exports = server;


//--------------------------------ROUTE-GITHUB--------------------------------------
server.get('/auth/github',
  passport.authenticate('github',{ session: false, scope: ['profile'] }));

server.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: 'http://localhost:3000/' }),
  function (req, res) {   
          console.log("REQUSERID",req.user)
          res.redirect(`http://localhost:3000/login/github/${req.user.username}@gmail.com/12345678`);
  });


//--------------------------------ROUTE-GOOGLE---------------------------------------
server.get('/auth/google',
  passport.authenticate('google',{ session: false, scope: ['profile'] }));

server.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.redirect('http://localhost:3000/login');
  });



//---------------------------------ROUTE-GLOBAL--------------------------------------
server.get('/', (req, res) => {
    res.send("HOME BACKEND");
});  

server.get('/getuser', (req, res) => {
    res.send(req.user);
    res.status(200).json("CONSOLOGUEADO")
});  

server.get('/logout', (req, res) => {
    req.logOut();
    res.status(200).clearCookie('connect.sid', {
      path: '/'
    });
    req.session.destroy(function (err) {
      res.redirect('/');
    });
});