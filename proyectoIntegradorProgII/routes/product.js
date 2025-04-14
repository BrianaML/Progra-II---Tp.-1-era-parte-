var express = require('express');
var router = express.Router();

const productController = require("../controllers/productController");

router.get('/', productController.product);
router.get("/productAdd", productController.productAdd);
router.get("/searchResults", productController.searchResults);

module.exports = router;