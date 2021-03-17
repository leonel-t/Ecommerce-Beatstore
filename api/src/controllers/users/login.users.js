//passport.js
const passport = require('passport');
const bcrypt = require('bcrypt');


const LocalStrategy = require('passport-local').Strategy;

const { User } = require("../../db");

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
    function (email, password, cb) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return User.findOne({email, password})
            .then(async (user)=>{
                let result = await bcrypt.compare(password,user.password)
                if(result){
                    return { success: result,user }
                }
            })
            .then(user => {
               if (!user) {
                   return cb(null, false, {message: 'Incorrect email or password.'});
               }
               return cb(null, user, {message: 'Logged In Successfully'});
          })
          .catch(err => cb(err));
    }
));