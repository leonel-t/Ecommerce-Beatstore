const server = require('express').Router();

server.put('/:id', (req, res) => {
    res.status(200).json("Edit Order Line")
});

module.exports = server;