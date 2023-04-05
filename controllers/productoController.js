let db = require("../data/datos");

let productoController = {
    detail: function(req, res){
        return res.render('product')
    },
    edit: function (req, res) {
        return res.render('product-add', {
            datosUsuario: db.usuario
        })
    }
}
module.exports = productoController