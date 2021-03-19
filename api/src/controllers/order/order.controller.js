const { Order } = require("../../db");

module.exports = {
    createOrder: async (order) => {
       return await Order.create(order).then((order)=>order)
    }
}