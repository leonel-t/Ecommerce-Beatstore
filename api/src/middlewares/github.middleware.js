const server = require('express').Router();
const passport = require("passport");
var GitHubStrategy = require('passport-github').Strategy;

const {GITHUB_ID,GITHUB_SECRET} = process.env;

//------------------------GITHUB-------------------------------

passport.use(new GitHubStrategy({
    clientID: GITHUB_ID,
    clientSecret: GITHUB_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {}) 
    console.log(profile)
    return done(null, profile);
  }
));
  

server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
        done(null, user);
})

module.exports = { passport, server };