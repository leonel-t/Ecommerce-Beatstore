const { Order } = require("../../db");

module.exports = {
    createOrder: async (order) => {
       await Order.create(order).then((order)=>order)
    }
}