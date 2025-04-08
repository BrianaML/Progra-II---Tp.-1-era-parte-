var express = require('express');
var router = express.Router();

const searchResultsController= require("../controllers/searchResultsController");
router.get('/', searchResultsController.searchResults);

module.exports = router;

