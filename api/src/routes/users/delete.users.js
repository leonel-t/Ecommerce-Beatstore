const server = require("express").Router();
const usersControler = require("../../controllers/users/delete.users");
module.exports = server;

server.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    usersControler
        .deleteUser(id)
        .then((user) => {
            res.status(200).json(user);
          })
          .catch((error) => {
            res.status(400).json(error);
          })
})