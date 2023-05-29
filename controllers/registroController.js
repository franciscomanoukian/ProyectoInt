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

        let filtrado = {
            where: [{email: email}]
        }
        db.Usuario.findOne(filtrado) 
            .then(function(result){
                // VERIFICO condiciones del formulario, las guardamos mas abajo
                // HAY Q MODIFICAR MENSAJES DE ERROR q estan con res.send
                if (email == '') {
                    return res.send('Email es un campo obligatorio')
                }
                if (result != null) {
                    return res.send('Email ya utilizado')
                }
                if (userName == '') {
                    return res.send('Username es un campo obligatorio')
                }
                if (contraseña.length < 3) {
                    return res.send('Contra menor a 3 car')
                }
                
                

                // Si completó bien el form, se ejecuta lo siguiente para guardar en la DB:
                db.Usuario.create({
                    email: email,
                    contraseña: bcrypt.hashSync(contraseña, 10),
                    foto_perfil: fotoPerfil,
                    fecha: fechaNac,
                    dni: dni
                });

                // Redireccionamos a Login
                return res.redirect('/login')
                
              })
              .catch( function(error){
                  console.log(error);
              })

    }}
module.exports = registroController;