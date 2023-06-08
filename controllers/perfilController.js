let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos

let perfilController = {
    detail: function(req, res){
        let id = req.params.id
        
        
        db.Usuario.findByPk(id, {
            include: [
                {association: "productos"} // Incluye relacioness
                ]
          })
        .then(function(resultado){
            
            let productos = resultado.productos
            //return res.send(productos)
            
            return res.render('profile', {datosUsuario: resultado, lista: productos})
            
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