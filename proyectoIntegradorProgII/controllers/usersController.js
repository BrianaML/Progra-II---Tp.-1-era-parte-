const { where } = require('sequelize');
const data = require('../db/index')
const db = require('../database/models');
//requerimos la base de datos
const bcrypt = require('bcryptjs');

const usersController = {
    profile: function (req, res) {
        return res.render("profile", {data})
    },
    login: function (req, res) {
        if (req.session.usuarioLogged) {
            return res.redirect('/profile');
        }
        return res.render('login', { message: null }); 
    },
    processLogin:function (req, res) {
        
        let email= req.body.email;
        let contrasenia= req.body.contrasenia;
        let recordarme= req.body.recordarme === "on";
        //a la base de datos utilzmaos su modelo con su alias definida y el find all hace un select*
        db.usuario.findOne({
            where: {email: email}
        })
        .then(function (usuario) {
            if (!usuario){
                return res.render('login', { message: "El mail no esta registrado" });
            }

            //let contraseniaOk = bcrypt.compareSync(contrasenia, usuario.contrasenia);
            if (usuario.contrasenia.startsWith('$2a$')) {
                contraseniaOk = bcrypt.compareSync(contrasenia, usuario.contrasenia);
            } else {
  // Si está en texto plano, comparamos directamente
            contraseniaOk = contrasenia === usuario.contrasenia;
            }
            if (!contraseniaOk) {
                console.log("Contraseña ingresada:", contrasenia);
                console.log("Contraseña en base:", usuario.contrasenia);
                return res.render("login", { message: "La contraseña es incorrecta" });
            }

            req.session.usuarioLogged={
                id: usuario.id,
                email: usuario.email,
                usuario: usuario.usuario
            }

            if (recordarme){
                res.cookie("usuarioEmail", usuario.email, { maxAge: 1000 * 60 * 60 * 24 * 30 })
            }

            return res.redirect('/profile');
        })
        .catch(function(error) {
            console.log("Error en login:", error);
            return res.send(error);
        });
    },
    register: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('register')
        };
    },
    processRegister: async function (req, res) {
        if (req.body.contrasenia.length < 3) {
            return res.render('register', { Error: "La contraseña debe tener más de 3 caracteres" });
        }
        db.user.findOne({
            where: [{ email: req.body.email }]

        }).then(function (user) {
            return res.render('register', { Error: "El mail ya esta registrado" })
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
            
    },
}
module.exports = usersController;