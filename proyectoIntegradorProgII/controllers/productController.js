const data = require('../db/index')

const productController ={
    product: function (req, res) {
        return res.render('product');
    }
}

module.exports = productController;