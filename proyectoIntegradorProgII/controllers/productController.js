const { Op } = require('sequelize');
const data = require('../db/index')
const db = require('../database/models');
const Op = db.sequelize.Op;

//requerimos la base de datos
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

    productCreate: function(req, res){
        const productoNuevo = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            img_producto: req.body.img_producto,
            usuario_id: req.session.usuarioLogged.id ,
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
            created_at: new Date()
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

        db.Producto.findAll({
            where: {
                nombre: { [Op.like]: `%${searchQuery}%` }
            }
        })
            .then(function (resultados) {
                res.render("searchResults", {resultados,searchQuery});
            })
            .catch(function (error) {
                res.send(error);
            });

        return res.render("searchResults", { data })
    },
}

module.exports = productController;