const { Router } = require('express');
const productRouter = require('./products/get.products.js');


const router = Router();


router.use('/products', productRouter.all);
router.use('/products/categoria', productRouter.cat);

module.exports = router;
