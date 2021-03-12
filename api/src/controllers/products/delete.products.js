const server = require('express').Router();
const { Product, Categories } = require('../../db');
module.exports = {
    deleteById(id){
      return Product.destroy({
            where: { id: id },
            include: [
                {
                    model: Categories
                }
            ]
        })
    }
}
