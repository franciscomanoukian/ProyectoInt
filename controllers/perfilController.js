let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos

let perfilController = {
    detail: function(req, res){
        let idUsuario = req.session.user.id
        
        db.Usuario.findByPk(idUsuario, {
            include: [
                {association: "productos"} // Incluye relacioness
                ]
          })
        .then(function(resultado){
            //return res.send(resultado.productos) 
            let productos = resultado.productos
            
            return res.render('profile', {lista: productos})
            
        })
        .catch( function(error){
            console.log(error);
        })

        
    },
    edit: function (req, res) {
        return res.render('profile-edit', {
            
        })
    }
}

module.exports = perfilController