const data = require('../db/index')

const usersController = {
    profile: function (req, res) {
            return res.render("profile", {data})
    },
    login: function (req, res) {
            return res.render('login')
    },
    register: function (req, res) {
        return res.render("register")
    }
}

module.exports = usersController;