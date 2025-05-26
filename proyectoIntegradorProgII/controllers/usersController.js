const { where } = require('sequelize');
const data = require('../db/index')
let bcrypt = require('bcryptjs');

const usersController = {
    profile: function (req, res) {
        return res.render("profile", {data})
    },
    login: function (req, res) {
        if (req.session.userLogged) {
            return res.redirect('/profile');
        }
        return res.render('error', { message: "No login guardado" });
    },
    processLogin:function (req, res) {
        
        let email= req.body.email;
        let contrasenia= req.body.contrasenia;
        let recordarme= req.body.recordarme === "on";

        db.Usuario.findOne({
            where: {email: email}
        })
        .then(function (usuario) {
            if (!email){
                return res.render('login', { message: "El mail no esta registrado" });
            }

            let contraseniaOk=
        })
        

        if (contraseniaOk){

        }
        return res.render('error', { message: "La contraseñia es incorrecta" });
    },
    register: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('register')
        };

    },
    processRegister: async function (req, res) {
        if (contrasenia.lenght < 3) {
            return res.render('register', { Error: "la constrasenia debe tener mas de 3 caracteres" })
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