const db = require('../database/models');
const bcrypt = require('bcryptjs');

const usersController = {
    profile: function (req, res) {
        const usuario= req.session.usuarioLogged;

        if (!usuario) {
            return res.redirect('/users/login');
        }
        db.producto.findAll({
            where: { usuario_id: usuario.id }, include: [{ association: "comentarios" }]
        })
        .then(function(productos) {
            return res.render("profile", {
                usuario: usuario,
                data: { productos: productos }
        });
        })
        .catch(function(error) {
            console.error(error);
            res.send("Error al cargar productos");
    });
    },
    login: function (req, res) {
        return res.render('login', {
        emailIngresado: '',
        emailError: null,
        contraseniaError: null
    });
    },
    processLogin:function (req, res) {
        
        let email= req.body.email;
        let contrasenia= req.body.contrasenia;
        let recordarme= req.body.recordarme === "on";

        db.usuario.findOne({
            where: {email: email}
        })
        .then(function (usuario) {
            if (!usuario){
                return res.render('login', {
                    emailError: "El email ingresado no está registrado",
                    contraseniaError: null,
                    emailIngresado: email
                });
            }

            let contraseniaOk;

            if (usuario.contrasenia.startsWith('$2a$')) {
                contraseniaOk = bcrypt.compareSync(contrasenia, usuario.contrasenia);
            } else {
                contraseniaOk = contrasenia === usuario.contrasenia;
            }

            if (!contraseniaOk) {
                return res.render('login', {
                    contraseniaError: "La contraseña es incorrecta",
                    emailError: null,
                    emailIngresado: email
                });
            }

            req.session.usuarioLogged={
                id: usuario.id,
                email: usuario.email,
                usuario: usuario.usuario,
                foto_perfil: usuario.foto_perfil
            }

                if (recordarme) {
                    res.cookie("usuarioEmail", usuario.email, { maxAge: 1000 * 60 * 60 * 24 * 30 })
                }

            return res.redirect('/users/profile');
        })
        .catch(function(error) {
            console.log("Error en login:", Error);
            return res.send(error);
        });
    },
    register: function (req, res) {
        if (req.session.usuarioLogged) {
            return res.redirect('/users/profile');
        }
        return res.render('register', { Error: null });
    },


    processRegister: async function (req, res) {
        if (req.body.contrasenia.length < 3) {
            return res.render('register', { Error: "La contraseña debe tener más de 3 caracteres" });
        }
        const usuarioExistente = await db.usuario.findOne({
            where: { email: req.body.email }
        });

        if (usuarioExistente) {
            return res.render('register', { Error: "El mail ya fue registrado" });
        }

        try {
            await db.usuario.create({
                usuario: req.body.usuario,
                email: req.body.email,
                contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                fecha_nacimiento: req.body.fecha_nacimiento,
                dni: req.body.dni,
                foto_perfil: req.body.foto_perfil
            });
            
            return res.redirect('/users/profile');
        } catch (error) {
            return res.send("Ocurrió un error al crear el usuario.");
        }
    },
    logout: function (req, res) {
        res.clearCookie("usuarioEmail"); // borra la cookie de recordarme
        req.session.destroy(() => {
        res.redirect("/"); // redirecciona al home o donde prefieras
    });
}
}
module.exports = usersController;