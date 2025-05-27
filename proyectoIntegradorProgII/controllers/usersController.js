const data = require('../db/index')
let bcrypt = require('bcryptjs');

const usersController = {
    profile: function (req, res) {
        return res.render("profile", { data })
    },
    login: function (req, res) {
        if (req.session.usuarioLogged) {
            return res.redirect('/profile');
        }
        return res.render('login');
    },
    processLogin: function (req, res) {

        let email = req.body.email;
        let contrasenia = req.body.contrasenia;
        let recordarme = req.body.recordarme === "on";

        db.Usuario.findOne({
            where: { email: email }
        })
            .then(function (usuario) {
                if (!usuario) {
                    return res.render('login', { message: "El mail no esta registrado" });
                }

                let contraseniaOk = bcrypt.compareSync(contrasenia, usuario.contrasenia);
                if (!contraseniaOk) {
                    return res.render("login", { message: "La contraseñia es incorrecta" })
                }

                req.session.usuarioLogged = {
                    id: usuario.id,
                    email: usuario.email,
                    usuario: usuario.usuario
                }

                if (recordarme) {
                    res.cookie("usuarioEmail", usuario.email, { maxAge: 1000 * 60 * 60 * 24 * 30 })
                }

                return res.redirect('/profile');
            })
            .catch(function (error) {
                return res.send(error);
            });
    },
    register: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/');
        }
        return res.render('register', { errorMessage: null });
    },


    processRegister: async function (req, res) {
        if (contrasenia.lenght < 3) {
            return res.render('register', { errorMessage: null });
        }
        db.user.findOne({
            where: [{ email: req.body.email }]

        }).then(function (user) {
            return res.render('register', { errorMessage: null });
        })

        db.User.create({
            usuario: req.body.usuario,
            email: req.body.email,
            contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
            fecha_nacimiento: req.body.fecha_naciomiento,
            dni: req.body.dni,
            foto_perfil: req.body.foto_perfil
        })
            .then(function (user) {
                return res.redirect('/user/profile');
            })
            .catch(function (error) {
                return res.send("Ocurrió un error al crear el usuario.");
            });
        return res.cookie('usuarioEmail', usuarioLogged, { maxAge: 1000 * 60 * 60 * 24 });

    },
logout: function (req, res) {
    res.clearCookie('usuarioEmail');
    req.session.destroy();
    return res.redirect('/');
},
}

module.exports = usersController;