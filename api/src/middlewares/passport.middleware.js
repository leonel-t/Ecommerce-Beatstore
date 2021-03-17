const server = require('express').Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

server.use(passport.initialize());
server.use(passport.session());

//ME AUTENTICO
passport.use(new LocalStrategy ({
  email : 'email',
  password : 'password'
},function(email, password, done) {
      User.findOne({
        where:{
          email:email
        }
      })
        .then(async (user) => {
          let result = await bcrypt.compare(password, user.password);
    
          if(!user)   { return done(null, false, { msg : 'User invalid'}); }
          if(!result) { return done(null, false, { msg : 'Password invalid'}); }
          

          return done(null, user, { msg : 'Login Sussecce'});
          
        })
      .catch(err => {
        return done(err);
      })

    }));
   
 //GUARDO LA SESSION PARA PERMANECERLA ACTIVA
 //CUAL ES EL DATO QUE QUIERO GUARDAR

 passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  //SI YO QUIERO OBTENER EL USUARIO APARTIR DE ESE ID

  passport.deserializeUser(function(id, done) {
    User.findByPk(id)
      .then((user) => {
         done(null, user);
      })
      .catch(err => {
        return done(err);
      })
  });

  module.exports = { passport, server };
  