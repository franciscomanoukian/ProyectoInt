let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos
let bcrypt = require('bcryptjs');

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
        let idSession = req.session.user.id
        let form = req.body;
        let errors = {};
        let contraNueva = form.contra
        db.Usuario.findByPk(idSession)
            .then(function(resultado){
                if (form.email == '') {
                    errors.message = "El mail está vacío."
                    res.locals.errors = errors;
                    return res.render('profile-edit', {datosUsuario: resultado})
                }
                if (form.nombre == '') {
                    errors.message = "Username es un campo obligatorio."
                    res.locals.errors = errors;
                    return res.render('profile-edit', {datosUsuario: resultado})
                }
                if (form.contra == '') {
                    contraNueva = resultado.contraseña
                }
                if (form.contra.length > 1 && form.contra.length < 3) {
                    contraNueva = resultado.contraseña
                    errors.message = "La contraseña debe tener más de 3 caracteres."
                    res.locals.errors = errors;
                    return res.render('profile-edit', {datosUsuario: resultado})
                }
                if (form.contra.length > 3) {
                    contraNueva = bcrypt.hashSync(contraNueva, 10)
                }
        
                db.Usuario.update({
                    nombre: form.nombre,
                    email: form.email,
                    fecha: form.fecha,
                    dni: form.dni,
                    foto_perfil: form.foto,
                    contraseña: contraNueva
                }, {where: {
                    id: form.id
                }}).then(function(){
                    return res.redirect('/login/logout')
                }).catch(function(error){
                    console.log(error)
                })
            })
            .catch( function(error){
                console.log(error);
            })}
}

module.exports = perfilController