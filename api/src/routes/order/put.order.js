const server = require('express').Router();

server.put('/:id', (req, res) => {
    res.status(200).json("Edit Delete")
});

module.exports = server;