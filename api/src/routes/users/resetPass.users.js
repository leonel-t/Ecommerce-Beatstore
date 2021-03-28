const server = require("express").Router();
const usersControler = require("../../controllers/users/resetPass.users");
module.exports = server;

server.put('/resetcode',(req, res, next) => {
    const { code, email } = req.body.code;
    usersControler
        .addCode(code, email)
        .then((success) => {
            res.status(200).json(success);
          })
          .catch((error) => {
            res.status(400).json(error);
          })
})

server.put('/resetpass',(req, res, next) => {
    const {code, pass} = req.body;
    usersControler
        .resetPass(code, pass)
        .then((success) => {
            res.status(200).json(success);
          })
          .catch((error) => {
            res.status(400).json(error);
          })
})

