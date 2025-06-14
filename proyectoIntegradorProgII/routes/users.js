var express = require('express');
var router = express.Router();
const usersController= require("../controllers/usersController");

router.get('/', usersController.profile);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);

router.get('/profile/:id', usersController.profileId)
router.get('/profile', usersController.profile);

router.get('/logout', usersController.logout);

module.exports = router;