const db = require("../database/models")

const indexController ={
    index: function (req, res) {
    db.producto.findAll({
        include: [{ association: "comentarios" },
            {association: "usuario"}]
    })
    .then(function(productos) {
        res.render('index', { productos });
    })
    .catch(function(error) {
        res.send(error);
    });
}
}

module.exports= indexController;