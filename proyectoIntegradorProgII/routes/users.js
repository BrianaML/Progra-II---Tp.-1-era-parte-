var express = require('express');
var router = express.Router();

const usersController= require("../controllers/usersController");
router.get('/', usersController.profile);
router.get('/login', usersController.login);
router.get('/register', usersController.register);


module.exports = router;