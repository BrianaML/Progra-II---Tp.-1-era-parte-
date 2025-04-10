const data = require('../db/index')

const productAddController ={
    productAdd: function (req, res) {
        return res.render("productAdd", {data})
    }
}

module.exports = productAddController;