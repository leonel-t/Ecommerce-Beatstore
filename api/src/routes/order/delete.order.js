const server = require('express').Router();

server.delete('/:id', (req, res) => {
    res.status(200).json("Order Delete")
});

module.exports = server;