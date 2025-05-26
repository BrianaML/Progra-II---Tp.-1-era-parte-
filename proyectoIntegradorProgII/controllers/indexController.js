const data = require('../db/index')
const db = require("../database/models")

const indexController ={
    index: function (req, res) {
        return res.render('index', {data})
    }
}

module.exports= indexController;