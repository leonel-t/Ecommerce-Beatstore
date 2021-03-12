const server = require('express').Router();
const  productControler = require("../../controllers/products/delete.products")


 server.delete('/:id',async (req, res) => {
  try {
    const {id}=req.params;
    const result = await productControler.deleteById(id)
    console.log("Esto es delete",result)
    if (result===1){
      return  res.status(200).send('Product deleted');
    } else {
      return  res.status(200).send('Product doesnt exist')
    }
    
  }
  catch (error) {
    return res.status(400).send({ data: error });
  }
  })

  module.exports = server;
