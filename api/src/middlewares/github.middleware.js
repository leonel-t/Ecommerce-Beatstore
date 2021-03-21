const server = require('express').Router();
const passport = require("passport");
var GitHubStrategy = require('passport-github').Strategy;
const { User } = require("../db");

require('../middlewares/cors.middleware')

const {GITHUB_ID,GITHUB_SECRET} = process.env;

//------------------------GITHUB-------------------------------

passport.use(new GitHubStrategy({
    clientID: GITHUB_ID,
    clientSecret: GITHUB_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    var newUser = {
      id : profile.id,
      githubId: profile.id,
      name: profile.displayName,
      email: profile.username +"@gmail.com",
      password_virtual: "12345678"
    }
    User.findOrCreate({where: {githubId: newUser.githubId}, defaults: newUser})
    .spread(function(user, created) {
    console.log(user.get({
      plain: true
    }))
    return cb(null,profile)
  })
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