var express = require('express');
var router = express.Router();

const productController = require("../controllers/productController");

router.get("/searchResults", productController.searchResults);

module.exports = router;