const { OrderLine } = require("../../db");

module.exports = {
    createOrderLine: async (order) => {
       await OrderLine.create(order).then((order)=>order)
    }
}