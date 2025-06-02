const db = require('../database/models');
const bcrypt = require('bcryptjs');

const usersController = {
    
    profile: function (req, res) {
        const usuario = req.session.usuarioLogged;

        if (!usuario) {
            return res.redirect('/users/login');
        }

        db.producto.findAll({ 
            where: { usuario_id : usuario.id }, 
            include: [{
                association: "comentarios",
                required: false
            }] 
        })
        .then(function(productos) {
            return res.render("profile", {
                usuario: usuario,
                productos: productos
        });
        })
        .catch(function(error) {
            console.error(error);
            res.send("Error al cargar productos");
        });
    },

    profileId:function (req, res) {
        const id= req.params.id;

        db.usuario.findByPk(id, {
            include:[{ association: "productos",
                include: [{
                    association: "comentarios",
                    required: false
                }]
            }]
        })
        .then(function (usuario) {
            if (!usuario){
                return res.send("Usuario no encontrado")
            }
            
            res.render("profile", {
                usuario: usuario,
                productos: usuario.productos
            });
        })
        .catch(function (error) {
            console.error(error);
            res.send("Error al cargar perfil del usuario")
        })
    },

    login: function (req, res) {
        return res.render('login', {
            emailIngresado: '',
            emailError: null,
            contraseniaError: null
        });
    },
    processLogin: function (req, res) {

        let email = req.body.email;
        let contrasenia = req.body.contrasenia;
        let recordarme = req.body.recordarme === "on";

        db.usuario.findOne({
            where: { email: email }
        })
        .then(function (usuario) {
            if (!usuario) {
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

        req.session.usuarioLogged = {
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
        .catch(function (error) {
            console.log("Error en login:", Error);
            return res.send(error);
        });
    },
    
    register: function (req, res) {
        if (req.session.usuario) {
            return res.redirect('/users/profile');
        }
        return res.render('register', { Error: null });
    },

    processRegister: function (req, res) {
    let contrasenia = req.body.contrasenia;

    if (contrasenia.length < 3) {
        return res.render('register', { Error: "La contraseña debe tener más de 3 caracteres" });
    }

    db.usuario.findOne({
        where: { email: req.body.email }
    })
        .then(function (usuarioExistente) {
            if (usuarioExistente) {
                return res.render('register', { Error: "El mail ya está registrado" });
            }

            return db.usuario.create({
                usuario: req.body.usuario,
                email: req.body.email,
                contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                fecha_nacimiento: req.body.fecha_nacimiento,
                dni: req.body.dni,
                foto_perfil: req.body.foto_perfil || 'default-image.png'
            });
        })
        .then(function (nuevoUsuario) {
            if (nuevoUsuario) {
                req.session.usuarioLogged = nuevoUsuario;
                return res.redirect('/users/profile');
            } else {
                return res.render('register', { Error: "No se pudo registrar el usuario." });
            }
        })
        .catch(function (error) {
            console.error(error);
            return res.render('register', { Error: "Error inesperado al registrar. Revisá los datos." });
        });
    },

    logout: function (req, res) {
        res.clearCookie('usuarioEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;