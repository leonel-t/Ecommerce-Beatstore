const server = require("express").Router();
const {createOfert} = require("../../controllers/oferts/oferts.controller");
//const {protectorUser} = require("../../middlewares/protector.middleware");

server.post("/addofert", (req, res, next) => {
  console.log(req.body)
  const {idProduct, ofert} = req.body;
  return createOfert(idProduct, ofert).then((ofertAdded) => {
      return res.status(201).json(ofertAdded);
    }).catch((error) => {
      return res.status(400).json(error.message);
    });
});

server.post("/", (req, res, next) => {
  const {ofertStatus, discount} = req.body;
  let ofert = {
    ofertStatus,
    discount
  }
  return createOfert(ofert).then((ofert) => {
      return res.status(201).json(ofert);
    }).catch((error) => {
      return res.status(400).json(error.message);
    });
});

module.exports = server;
