const { Router } = require("express");
const getProductsRouter = require("./products/get.products.js");
const postProductsRouter = require("./products/post.products.js");
const deleteProductsRouter = require("./products/delete.products.js");
const putProductsRouter = require("./products/put.products");

const getCategoriesRouter = require("./categories/get.categories");
const postCategoriesRouter = require("./categories/post.categories");
const putCategoriesRouter = require("./categories/put.categories");
const deleteCategoriesRouter = require("./categories/delete.categories");

const getUserRouter = require("./users/get.users");
const postUserRouter = require("./users/post.users");
const putUserRouter = require("./users/put.users");
const deleteUserRouter = require("./users/delete.users");

const githubRouter = require("./githubRoute");

const getOrder = require("./order/get.order");
const postOrder = require("./order/post.order");
const putOrder = require("./order/put.order");
const deleteOrder = require("./order/delete.order");

const getOrderLine = require("./orderline/get.orderLine");
const postOrderLine = require("./orderline/post.orderLine");
const putOrderLine = require("./orderline/put.orderLine");
const deleteOrderLine = require("./orderline/delete.orderLine");

const router = Router();

router.use("/products", getProductsRouter);
router.use("/products", postProductsRouter);
router.use("/products", deleteProductsRouter);
router.use("/products", putProductsRouter);

router.use("/categories", postCategoriesRouter);
router.use("/categories", getCategoriesRouter);
router.use("/categories", putCategoriesRouter);
router.use("/categories", deleteCategoriesRouter);

router.use("/order", getOrder);
router.use("/order", postOrder);
router.use("/order", putOrder);
router.use("/order", deleteOrder);

router.use("/orderline", getOrderLine);
router.use("/orderline", postOrderLine);
router.use("/orderline", putOrderLine);
router.use("/orderline", deleteOrderLine);

router.use("/users", getUserRouter);
router.use("/users", postUserRouter);
router.use("/users", putUserRouter);
router.use("/users", deleteUserRouter);

router.use("/", githubRouter);



module.exports = router;
