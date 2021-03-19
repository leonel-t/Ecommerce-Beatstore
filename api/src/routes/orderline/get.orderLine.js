const server = require('express').Router();

server.get('/', (req, res) => {
    res.status(200).json("Orders")
});

module.exports = server;