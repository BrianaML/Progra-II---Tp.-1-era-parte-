const data = require('../db/index')

const indexController ={
    index: function (req, res) {
        return res.render('index', {data})
    }
}

module.exports= indexController;