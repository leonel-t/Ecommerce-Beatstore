const server = require("express").Router();
const usersControler = require("../../controllers/users/resetPass.users");
module.exports = server;

server.post('/resetcode',(req, res, next) => {
    const code = req.body.code;
    const email = req.body.email;
    usersControler
        .addCode(code, email)
        .then((cat) => {
          return res.status(200).json(cat);
        }).catch((error) => {
          return res.status(400).json(error);
        });
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

