const { Op } = require('sequelize');
const data = require('../db/index')
const db = require('../database/models');

const productController = {
    product: function (req, res) {
        let idProducto= req.params.id;

        db.producto.findByPk(idProducto, {
        include: [{ association: "comentarios",
        include: [{ association: "usuario" }]
    }]
    })
    .then (function(producto){
        if (producto){
            res.render("product", {producto})
        } else{
            res.send("Producto no encontrado");
        }
    })
    .catch(function(error) {
        res.send(error);
    })        
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