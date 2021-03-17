var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//ME AUTENTICO
passport.use(new LocalStrategy(
    function(id, password, done) {
      User.findByPk(id)
        .then((user) => {
          if(!user) {
            return done(null, false);
          }
          if(user.password != password) {
            return done(null, false);
          }
          return done(null, user);
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
    User.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch(err => {
        return done(err);
      })
  });

  