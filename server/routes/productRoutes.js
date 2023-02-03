const express = require('express');
const router = express.Router();
const productControllers = require("../controllers/productControllers");

//* Params
router.param("productId", productControllers.getProductById);

//* POSTPRODUCT POST Route
router
    .route("/postproduct")
    .post(productControllers.postProduct);

// //* GETPRODUCT POST Route
router
    .route("/getproduct/:productId")
    .get(productControllers.getProduct);

//* GETALLPRODUCTS GET Route
router
    .route("/getallproducts")
    .get(productControllers.getAllProducts);

module.exports = router;