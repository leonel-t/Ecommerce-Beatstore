const server = require('express').Router();
const  productControler = require("../../controllers/products/delete.products")

module.exports = {

deleteProd: server.delete('/:id',(req, res) => {
    
    const {id}=req.params;

    productControler.deleteById(id)
    console.log("Esto es delete",id)
    .then((id) => {
        console.log("dentro",id)
        if (id === id) {
          res.status(200).send('Product deleted');
        } else {
          res.send('Product not found');
        }
    })
    .catch((err) => {
        res.send(err);
    })
  })

}