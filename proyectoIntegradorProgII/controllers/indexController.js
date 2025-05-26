const data = require('../db/index')
const db = require("../database/models")
let bcrypt = require('bcryptjs');

const indexController ={
    index: function (req, res) {
        return res.render('index', {data})
    }
}

module.exports= indexController;