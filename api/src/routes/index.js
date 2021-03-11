const { Router } = require("express");
const getProducts = require("../controllers/products/get.products.js");
const getProductsRouter = require("./products/get.products.js");

const router = Router();

router.use("/products", getProductsRouter);

module.exports = router;
