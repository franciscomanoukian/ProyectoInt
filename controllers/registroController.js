let db = require('../database/models');
let bcrypt = require('bcryptjs');

let registroController = {
    registrar: function(req, res) {
        res.render('register', {
            email: req.params.email
        })
        console.log(email);

    },
    store: function(req, res){
        let form = req.body;

        let email = form.email;
        let userName = form.usuario;
        let contraseña = form.contra;
        let fechaNac = form.fechaNac;
        let dni = form.documento;
        let fotoPerfil = form.fotoPerfil;
        let nombre = form.usuario; 

        // let user ={
        //     email: email, 
        //     userName: userName, 
        //     contraseña: contraseña,
        //     fechaNac: fechaNac,
        //     dni: dni,
        //     fotoPerfil: fotoPerfil,
        // }

        let filtrado = {
            where: [{email: email}]
        }
        db.Usuario.findOne(filtrado) 
            .then(function(result){
                // VERIFICO condiciones del formulario, las guardamos mas abajo
                // HAY Q MODIFICAR MENSAJES DE ERROR q estan con res.send
                let errors = {};
                if (email == '') {
                    errors.message = "El mail está vacío. "
                    res.locals.errors = errors;
                    return res.render('register')
                }
                if (result != null) {
                    errors.message = "Email ya utilizado."
                    res.locals.errors = errors;
                    return res.render('register')
                }
                if (userName == '') {
                    errors.message = "Username es un campo obligatorio."
                    res.locals.errors = errors;
                    return res.render('register')
                }
                if (contraseña.length < 3) {
                    errors.message = "La contraseña debe tener más de 3 caracteres."
                    res.locals.errors = errors;
                    return res.render('register')
                }
                
                

                // Si completó bien el form, se ejecuta lo siguiente para guardar en la DB:
                db.Usuario.create({
                    email: email,
                    contraseña: bcrypt.hashSync(contraseña, 10),
                    foto_perfil: fotoPerfil,
                    fecha: fechaNac,
                    dni: dni,
                    nombre: nombre
                })

                // Redireccionamos a Login
                return res.redirect('/login')
                
              })
              .catch( function(error){
                  console.log(error);
              })

    }, 
}
module.exports = registroController;