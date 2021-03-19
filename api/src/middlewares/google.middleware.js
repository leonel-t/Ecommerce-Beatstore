const server = require('express').Router();
const passport = require("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const { User } = require("../db");

const {GOOGLE_ID,GOOGLE_SECRET} = process.env;

//------------------------GITHUB-------------------------------

passport.use(new GoogleStrategy({
    clientID: GOOGLE_ID,
    clientSecret: GOOGLE_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) { 
    cb(null,profile)
  }
));
  

server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


module.exports = { passport, server };