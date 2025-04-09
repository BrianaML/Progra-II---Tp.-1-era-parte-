const data = require('../db/index')

const profileController ={
    profile: function (req, res) {
        return res.render("profile")
    }
}

module.exports = profileController;