const { Router } = require("express");
const getProductsRouter = require("./products/get.products.js");
const postProductsRouter = require("./products/post.products.js");
const deleteProductsRouter = require("./products/delete.products.js");
const postCategoriesRouter = require("./categories/post.categories");
const putProductsRouter = require("./products/put.products");
const getCategoriesRouter = require("./categories/get.categories");

const router = Router();

router.use("/products", getProductsRouter);
router.use("/products", postProductsRouter);
router.use("/products", deleteProductsRouter);
router.use("/categories", postCategoriesRouter);
router.use("/categories", getCategoriesRouter);

router.use("/products", putProductsRouter);

module.exports = router;
