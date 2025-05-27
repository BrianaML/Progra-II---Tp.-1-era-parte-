var express = require('express');
var router = express.Router();

const usersController= require("../controllers/usersController");
router.get('/', usersController.profile);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.get('/register', usersController.register);
router.post('./newuser', usersController.processRegister);

router.get('/profile', usersController.profile);
module.exports = router;