const { OrderLine } = require("../../db");

module.exports = {
    createOrderLine: (order) => {
        return OrderLine.create(order).then((order)=>order)
     }
}