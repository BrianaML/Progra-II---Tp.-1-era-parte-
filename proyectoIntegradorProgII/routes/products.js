var express = require('express');
var router = express.Router();

const productController = require("../controllers/productController");

router.get("/productAdd", productController.productAdd);
router.post("/productAdd", productController.productCreate);

router.get("/searchResults", productController.searchResults);
router.get('/:id', productController.product);

router.post('/agregarComentario', productController.agregarComentario);


module.exports = router;