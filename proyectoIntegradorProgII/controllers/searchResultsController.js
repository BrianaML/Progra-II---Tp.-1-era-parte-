const data = require('../db/index')

const searchResultsController ={
    searchResults: function (req, res) {
        return res.render("searchResults")
    }
}

module.exports = searchResultsController;