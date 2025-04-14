var express = require('express');
var router = express.Router();

const usersController= require("../controllers/usersController");
router.get('/', usersController.profile);
router.get('/profile/login', usersController.login);
router.get('/profile/register', usersController.register);


module.exports = router;