const data = require('../db/index')

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
        return res.render('error', { message: "La contraseñia es incorrecta" });
    },
    register: function (req, res) {
        return res.render("register")
    },
    processRegister: function (params) {
        
    }
}

module.exports = usersController;