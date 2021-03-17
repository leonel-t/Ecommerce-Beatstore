//CONFIG MIDDLEWARE
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
const { User } = require("../../src/db");
const bcrypt = require('bcrypt')

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
      try {
            return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

const customFields = {
    emailField: 'email',
    passwordField: 'password' 
}


const verifyCallback = async (email, password, done) => {
        try {
          const user = await User.findOne({ email : email });
  
          if (!user) {
            return done(null, false, { message: 'User not found' });
          }
  
          const validate = await bcrypt.compare(password,user.password)
  
          if (!validate) {
            return done(null, false, { message: 'Wrong Password' });
          }
  
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
}

  
const strategy = new Strategy(customFields,verifyCallback);


passport.use(strategy);

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findOne({id:id}, function(err, user) {
      done(err, user);
    });
  });

  

