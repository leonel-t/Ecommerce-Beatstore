const server = require("express").Router();
const {
  deleteOrderLine,
} = require("../../controllers/orderline/orderLine.controller");

server.delete("/:orderLineId", (req, res) => {
  const { orderLineId } = req.params;
  return deleteOrderLine(orderLineId)
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = server;
