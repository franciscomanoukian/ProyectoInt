let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos

let perfilController = {
    detail: function(req, res){
        let id = req.params.id
        
        
        db.Usuario.findByPk(id, {
            include: [
                {association: "comentarios"},{association: "productos", order: [
                    ['createdAt', 'ASC']
                ]} // Incluye relacioness
                ],
                
          })
        .then(function(resultado){
            return res.render('profile', {datosUsuario: resultado})
            
        })
        .catch( function(error){
            console.log(error);
        })

        
    },
    edit: 
    function (req, res) {
        if (req.session.user == undefined){
            return res.redirect('/login')
        } else{
            let id = req.session.user.id
            db.Usuario.findByPk(id)
            .then(function(resultado){
                return res.render('profile-edit', {datosUsuario: resultado})
            })
            .catch( function(error){
                console.log(error);
            })
        }
    }, 
    modify: function(req, res) {
        let form = req.body
        return res.send(form)
        db.Producto.update({
            nombre: form.nombre,
            email: form.email,
            
        }, {where: {
            id: form.id_producto
        }})
        res.redirect(`/perfil/${req.session.user.id}`)
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