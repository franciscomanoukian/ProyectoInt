let db = require('../database/models');

let productoController = {
    detail: function(req, res){
        let id = req.params.id
        
        db.Producto.findByPk(id, {
            include: [
                {association: "usuario"},{association: "comentarios"} // Incluye relacioness
                ],
                order: [
                    ['createdAt', 'DESC']
                ],
          })
        .then(function(resultado){
            // res.send(resultado)
            return res.render('product', {result: resultado});
            
        })
        .catch( function(error){
            console.log(error);
        })

        
    },
    edit: function (req, res) {
        return res.render('product-add', {
            datosUsuario: db.usuario
        })
    },
    add: function (req, res) {
        let form = req.body
        let nombre = form.nombre
        let imagen = form.imagen
        let descripcion = form.descripcion
        //return res.send(req.body)
        db.Producto.create({
            id_usuario : req.session.user.id,  //aca creo que tenemos que hacer un find by PK para encontrar el id del usuario que corresponda con el de session 
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,    
            

        })
        .then()
        .catch(function(errors){
            return errors
        })
    
        //return res.render('product-add', {
        //    datosUsuario: db.usuario
     //   })
    }, 
    comment: function(req, res){
        let form = req.body 
        let errors = {};

        if (req.session.user != undefined){
            db.Comentario.create({
                id_post: form.idPost,
                id_usuario: req.session.user.id,
                texto: form.textoComment,
            })
            return res.redirect(`/producto/detalle/id/${req.body.idPost}`)
        } else {
            errors.message = "Debes iniciar sesión para dejar tu comentario"
            res.locals.errors = errors;
            res.render('login')
        }
    } 
    
}
module.exports = productoController