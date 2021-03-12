const server = require('express').Router();
const  productControler = require("../../controllers/products/get.products")

    
    server.get('/', (req, res, next) => {
      productControler.findAllProducts()
        .then(products=>{
            res.status(200).json(products)
        })
        .catch(error=>{
            res.status(400).json(error)
        });
    }),
    server.get('/:id', (req, res, next) => {
        const {id}=req.params;
        productControler.findById(id)
          .then(product=>{
              res.status(200).json(product)
          })
          .catch(error=>{
              res.status(400).json(error)
          })
      }),
    server.get('/:nombreCat', (req, res, next) => {
        const {nombreCat}=req.params;
        productControler.findByCategory(nombreCat)
          .then(products=>{
              res.status(200).json(products)
          })
          .catch(error=>{
              res.status(400).json(error)
          })
      }),
      

      module.exports = server;