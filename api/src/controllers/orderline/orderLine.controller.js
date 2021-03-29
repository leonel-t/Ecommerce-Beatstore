const { OrderLine } = require("../../db");

module.exports = {
  createOrderLine: async (order) => {
    console.log(order)
    return await OrderLine.create(order).then((order) => order);
  },
  getOrderLines: async () => {
    return await OrderLine.findAll().then((orders) => orders);
  },
  getOrderLineById: async (idOrder) => {
    return await OrderLine.findByPk(idOrder).then((order) => order);
  },
  editOrderLine: async (orderLineId, order) => {
    return await OrderLine.update(order, {
      where: {
        id: orderLineId,
      },
    }).then((order) => order);
  },
  deleteOrderLine: async (orderLineId) => {
    return await OrderLine.destroy({
      where: {
        id: orderLineId,
      },
    }).then((order) => order);
  },
  deleteAllOrderLineByOrderId: async (orderId) => {
    return await OrderLine.destroy({
      where: {
        orderId: orderId,
      },
    }).then((order) => order);
  },
};
