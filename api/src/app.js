const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer = require("./middlewares/multer.middleware");
const statics = require("./middlewares/statics.middleware");
const routes = require('./routes/index.js');

var passport = require("./middlewares/passport.middleware").server;


require('./db.js');

const server = express();
server.use(multer);
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

server.use('/', routes);

server.use("/images", statics);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// Inicializa Passport y recupera el estado de autenticación de la sesión.

server.use(passport);


// Middleware para mostrar la sesión actual en cada request
server.use((req, res, next) => {
  console.log("Session aca" + req.session);
  console.log("User aca" + req.user);
  next();
});

module.exports = server;
