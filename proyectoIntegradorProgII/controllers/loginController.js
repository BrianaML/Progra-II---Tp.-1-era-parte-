const data = require('../db/index')

const loginController ={
    login: function (req, res) {
        return res.render('login')
    }
}

module.exports = loginController;