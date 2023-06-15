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
    edit: function (req, res) {
        if (req.session.user == undefined){
            let errors = {}
            errors.message = "Debes loguearte para editar tu perfil"
            res.locals.errors = errors;
            return res.render('login')
        } else{
            res.send(req.params.id)
            let id = req.session.user.id
            db.Usuario.findByPk(id)
            .then(function(resultado){
                if (id != req.params.id) {
                    return res.redirect(`/perfil/id/${req.session.user.id}`)
                } else {
                return res.render('profile-edit', {datosUsuario: resultado})
            }})
            .catch( function(error){
                console.log(error);
            })}
        }, 
        
    modify: function(req, res) {
        let form = req.body
        

        db.Usuario.update({
            nombre: form.nombre,
            email: form.email,
            fecha: form.fecha,
            dni: form.dni,
            foto_perfil: form.foto
            
        }, {where: {
            id: form.id
        }}).then(
        ).catch(function(error){
            console.log(error)
        })

        let errors = {};
        errors.message = "Debes volver a loguearte luego de modificar tu información."
        return res.redirect('/login/logout')
        
    }
}

module.exports = perfilController