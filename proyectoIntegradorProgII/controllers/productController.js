const { Op } = require('sequelize');
const data = require('../db/index')

const productController = {
    product: function (req, res) {
        return res.render("product", { data })
    },
    productAdd: function (req, res) {
        return res.render("productAdd", { data })
    },
    searchResults: function (req, res) {
        let searchQuery = req.query.search;

        db.Producto.findAll({
            where: {
                nombre: { [Op.like]: `%${searchQuery}%` }
            }
        })
            .then(function (resultados) {
                res.render("searchResults", { searchResult });
            })
            .catch(function (error) {
                res.send(error);
            });

        return res.render("searchResults", { data })
    },
}

module.exports = productController;