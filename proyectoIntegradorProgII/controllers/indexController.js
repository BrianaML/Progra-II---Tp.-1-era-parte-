const data= require("../db/index")

const controller ={
    index: function (req, res) {
        return res.render("index")
    }
}

module.exports=controller