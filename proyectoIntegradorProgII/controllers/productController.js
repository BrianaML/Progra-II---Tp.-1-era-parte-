const data = require('../db/index')

const productController ={
    product: function (req, res) {
        return res.render("product", {data})
    },
    productAdd: function (req, res) {
            return res.render("productAdd", {data})
    },
    searchResults: function (req, res) {
            return res.render("searchResults", {data})
    },
}

module.exports = productController;