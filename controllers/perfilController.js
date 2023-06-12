let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos

let perfilController = {
    detail: function(req, res){
        let id = req.params.id
        
        
        db.Usuario.findByPk(id, {
            include: [
                {association: "productos"} // Incluye relacioness
                ],
                order: [
                    ['createdAt', 'ASC']
                ],
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
    }, 
    seguir: function(req, res){
        let form = req.body 
        let errors = {};

        // res.send(form)

        // if (req.session.user != undefined){
        //     db.Comentario.create({
        //         id_post: form.idPost,
        //         id_usuario: req.session.user.id,
        //         texto: form.textoComment,
        //     })
        //     return res.redirect(`/producto/detalle/id/${req.body.idPost}`)
        // } else {
        //     errors.message = "Debes iniciar sesión para dejar tu comentario"
        //     res.locals.errors = errors;
        //     res.render('login')
        // }

    }
}

module.exports = perfilController