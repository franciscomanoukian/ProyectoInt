let db = require('../database/models');

let productoController = {
    detail: function(req, res){
        let id = req.params.id
        
        db.Producto.findByPk(id, {
            include: [
                {association: "usuario"},{association: "comentarios"} // Incluye relacioness
                ]
          })
        .then(function(resultado){
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
        db.Producto.create({
            imagen: imagen,
            descripcion: descripcion,
            nombre: nombre
        })

        //return res.render('product-add', {
        //    datosUsuario: db.usuario
     //   })
    }
    
}
module.exports = productoController