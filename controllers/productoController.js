let db = require('../database/models');

let productoController = {
    detail: function(req, res){
        let id = req.params.id
        
        db.Producto.findByPk(id, {
            include: [
                {association: "usuario"},{association: "comentarios", include: [{association: "usuario"}], limit: 7, order: [
                    ['createdAt', 'DESC']
                ] 
            } // Incluye relacioness
                ]
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
        let errors = {};
        if (req.session.user == undefined){
            
            errors.message = "Debes loguearte para editar un producto"
            res.locals.errors = errors;
            return res.render('login')
        } else{
            let id = req.params.id

            db.Producto.findByPk(id)
            .then(function(resultado){
                if (req.session.user.id != resultado.id_usuario) {
                    return res.redirect(`/perfil/id/${req.session.user.id}`)
                } else {
                res.render('product-edit', {
                    datosProducto: resultado
                })
                }
            })
            .catch( function(error){
                console.log(error);
            })
        }
        
        
    },
    modify: function(req, res){
        
        let form = req.body
        
        db.Producto.update({
            nombre: form.nombre,
            imagen: form.imagen,
            descripcion: form.descripcion
        }, {where: {
            id: form.id_producto
        }}).then( 
            res.redirect(`/perfil/id/${req.session.user.id}`)
            ).catch(function(error){
                console.log(error)
            })
       

    },
    add: 
     function (req, res) {
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
        .then(
            res.redirect(`/perfil/id/${req.session.user.id}`)
        )
        .catch(function(errors){
            return errors
        })
    

    },  
    destroy: function(req, res){
        let errors = {};
        
        if (req.session.user == undefined){
                errors.message = "Debes loguearte para eliminar un producto"
                res.locals.errors = errors;
                return res.render('login')  
        } else{
            let id = req.params.id;
            db.Producto.findByPk(id,  {
                include: [
                    {association: "usuario"},{association: "comentarios", include: [{association: "usuario"}]
                } ]
              }).then(function(resultado){
                if (req.session.user.id == resultado.id_usuario){
                    return res.render ('product-destroy', {
                       idProducto: req.params.id
                })
               } else{
                   errors.message = "No puedes borrar un producto que no es tuyo"
                   res.locals.errors = errors
                     res.render ('product-destroy', {
                    idProducto: req.params.id
             })
                
               }
              }). catch(function(error){
                console.log(error)
              })
            
        } 
    },
    procesoDestroy:function (req, res){
       // if (req.session.user.id == )
        db.Producto.destroy({
            where:{id: req.body.productoId}
        })  
    .then(
        res.redirect('/')
    )
    .catch(function(error){
    return error
    })}, 
    comment: function(req, res){
        let form = req.body 
        let errors = {};

        let id = req.params.id

        if (req.session.user != undefined){
            if (form.textoComment == ""){
                errors.message = "El comentario no puede estar vacío"
                res.locals.errors = errors;

                db.Producto.findByPk(id, {
                    include: [
                        {association: "usuario"},{association: "comentarios", include: [{association: "usuario"}]
                    } // Incluye relacioness
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
                

            } else {
            db.Comentario.create({
                id_post: form.idPost,
                id_usuario: req.session.user.id,
                texto: form.textoComment,
            })
            }
            

            return res.redirect(`/producto/detalle/id/${req.body.idPost}`)
        } else {
            errors.message = "Debes iniciar sesión para dejar tu comentario"
            res.locals.errors = errors;
            res.render('login')
        }

    }, 
    showAdd: function(req, res) {

        if (req.session.user == undefined){
            return res.redirect('/login')
        } else{
        return res.render('product-add')
        }
        
    }
    
}
module.exports = productoController