const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productControllers = require("../controllers/productControllers");

//* Params
router.param("productId", productControllers.getProductById);

// Set up the storage for the uploaded file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const t = Date.now();
        req.body.imageid = t;
        cb(null, `${t}.png`);
    }
});
  
// Initialize the multer middleware
const upload = multer({ storage: storage });



//* POSTPRODUCT POST Route
router
    .route("/postproduct")
    .post(upload.single('image'),productControllers.postProduct);

// //* GETPRODUCT POST Route
router
    .route("/getproduct/:productId")
    .get(productControllers.getProduct);

//* GETALLPRODUCTS GET Route
router
    .route("/getallproducts")
    .get(productControllers.getAllProducts);

//* DELETEPRODUCT DELETE Route
router
    .route("/deleteproduct/:productId")
    .delete(productControllers.deleteProduct);

module.exports = router;