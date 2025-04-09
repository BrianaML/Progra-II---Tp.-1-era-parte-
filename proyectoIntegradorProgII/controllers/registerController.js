const data = require('../db/index')

const registerController ={
    register: function (req, res) {
        return res.render("register")
    }
}

module.exports = registerController;