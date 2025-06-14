const { Op } = require('sequelize');
const db = require('../database/models');

const productController = {
    product: function (req, res) {
        let idProducto = req.params.id;

        db.producto.findByPk(idProducto, {
            include: [{
                association: "comentarios",
                include: [{ association: "usuario" }]
            }]
        })
            .then(function (producto) {
                if (producto) {
                    res.render("product", { producto })
                } else {
                    res.send("Producto no encontrado");
                }
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    productAdd: function (req, res) {
        return res.render("productAdd")
    },

    productCreate: function (req, res) {
        const productoNuevo = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            img_producto: req.body.img_producto,
            usuario_id: req.session.usuarioLogged.id,
        };
        db.producto.create(productoNuevo)
            .then(function () {
                res.redirect("/users/profile");
            })
            .catch(function () {
                res.send("Error al crear el producto");
            });
    },

    agregarComentario: function (req, res) {
        if (!req.session.usuarioLogged) {
            return res.redirect("/users/login");
        }
        const comentarioNuevo = {
            texto: req.body.texto,
            usuario_id: req.session.usuarioLogged.id,
            producto_id: req.body.producto_id,
        };
        db.comentario.create(comentarioNuevo)
            .then(function () {
                res.redirect("/product/" + req.body.producto_id);
            })
            .catch(function (error) {
                res.send("Error al agregar comentario.");
            });
    },

    searchResults: function (req, res) {
        let searchQuery = req.query.search;
        db.producto.findAll({
            where: {
                nombre: { [Op.like]: `%${searchQuery}%` }
            },
            include: [
                {association: 'usuario'},
                {association: 'comentarios'}
            ]
        })
            .then(function (resultados) {
                console.log("resultado");

                res.render("searchResults", { resultados, searchQuery });
            })
            .catch(function (error) {
                res.send(error);
            });
        
    },
}

module.exports = productController;