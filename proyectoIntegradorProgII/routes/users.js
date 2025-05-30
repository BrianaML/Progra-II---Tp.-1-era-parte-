var express = require('express');
var router = express.Router();
const usersController= require("../controllers/usersController");

router.get('/', usersController.profile);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);

router.get('/profile/:id', usersController.profileId)
router.get('/profile', usersController.profile);

router.get('/logout', usersController.logout);
module.exports = router;

const db = require('../database/models');

router.get('/test', async (req, res) => {
    try {
        const productos = await db.producto.findAll({
            where: { usuario_id: 1 }, // ← poné un ID real aquí
            include: [{ association: "comentarios" }]
        });

        console.log(JSON.stringify(productos, null, 2));

        res.send("Consulta completada. Revisá la consola.");
    } catch (error) {
        console.error("Error en /test:", error);
        res.status(500).send("Error en /test");
    }
});