const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//PASSPORT
var passport = require('passport');

const session = require('express-session')
const secureRoute = require('./routes/secureRoutes');

const multer = require("./middlewares/multer.middleware");
const statics = require("./middlewares/statics.middleware");
const routes = require('./routes/index.js');


require('./db.js');

const server = express();
server.use(multer);
server.name = 'API';

server.use(express.urlencoded( {extended: true, limit: '50mb'} ));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(session(
  {
    name: 'sid',
    secret:'secret', // Debería estar en un archivo de environment
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge: 1000 * 60 * 60 * 2 // Está en milisegundos --> 2hs
    }
  }
));


server.use('/', routes);
server.use("/images", statics);
server.use('/profile', passport.authenticate('jwt', { session: false }), secureRoute);

//---------PASSSPORT AUTHENTICATION-------------
require(".././src/middlewares/passport.middleware")
server.use(passport.initialize());
server.use(passport.session());

server.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = server;
