const server = require("express").Router();
const {createOfert} = require("../../controllers/oferts/oferts.controller");
//const {protectorUser} = require("../../middlewares/protector.middleware");

server.post("/", (req, res, next) => {
  console.log(req.body)
  const {idProduct, ofert} = req.body;
  return createOfert(idProduct, ofert).then((ofertAdded) => {
      return res.status(201).json(ofertAdded);
    }).catch((error) => {
      return res.status(400).json(error.message);
    });
});

module.exports = server;
