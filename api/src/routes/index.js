const { Router } = require('express');
const productRouter = require('./products/get.products.js');
const productDeleteRouter = require('./products/delete.products.js');


const router = Router();

router.use('/products', productRouter);


module.exports = router;
