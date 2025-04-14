var express = require('express');
var router = express.Router();

const productController = require("../controllers/productController");

router.get('/', productController.product);
router.get("/product/productAdd", productController.productAdd);
router.get("/product/searchResults", productController.searchResults);


module.exports = router;