const server = require('express').Router();
const  productControler = require("../../controllers/products/get.products")

module.exports = {
    
    all:server.get('/', (req, res, next) => {
      productControler.findAllProducts()
        .then(products=>{
            res.status(200).json(products)
        })
        .catch(error=>{
            res.status(400).json(error)
        })
    }),
    cat:server.get('/:nombreCat', (req, res, next) => {
        const {nombreCat}=req.params;
        productControler.findByCategory(nombreCat)
          .then(products=>{
              res.status(200).json(products)
          })
          .catch(error=>{
              res.status(400).json(error)
          })
      })
}
