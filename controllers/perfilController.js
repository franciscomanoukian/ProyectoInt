let db = require("../data/datos"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 
let perfilController = {
    detail: function(req, res){
        return res.render('profile', {
            datosUsuario: db.usuario
        })
    },
    edit: function (req, res) {
        return res.render('profile-edit')
    }
}
module.exports = perfilController