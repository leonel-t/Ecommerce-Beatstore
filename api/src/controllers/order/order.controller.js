const { Order, OrderLine } = require("../../db");

module.exports = {
  createOrder: async (order) => {
    return await Order.create(order).then((order) => order);
  },
  getOrders: async () => {
    return await Order.findAll().then((orders) => orders);
  },
  getOrderById: async (idOrder) => {
    return await Order.findByPk(idOrder, {
      include: [{ model: OrderLine }],
    }).then((order) => order);
  },
  editOrder: async (orderId, order) => {
    return await Order.update(order, {
      where: {
        id: orderId,
      },
    }).then((order) => order);
  },
  deleteOrder: async (orderId) => {
    return await Order.update(
      {
        orderStatus: "cancel",
      },
      {
        where: {
          id: orderId,
        },
      }
    ).then((order) => order);
  },
};
