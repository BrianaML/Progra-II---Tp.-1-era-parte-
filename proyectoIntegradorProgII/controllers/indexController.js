const data = require('../db/index')
const db = require("../database/models")

const indexController ={
    index: function (req, res) {
    db.producto.findAll({
      include: [{ association: "comentarios" }] // si querés incluir comentarios
    })
    .then(function(productos) {
        res.render('index', { data: { productos } });
    })
    .catch(function(error) {
        res.send(error);
    });
}
}

module.exports= indexController;