let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 
const bcrypt = require('bcryptjs');

let loginController = {
    showLogin: function(req, res) {
        res.render('login');
    },
    login: function(req, res) {
        let form = req.body
        let email = form.email
        let contra = form.contra
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
                if (result == null) {
                    return res.send('Email no encontrado')
                }
                if (contra == '') {
                    return res.send('Contraseña es un campo obligatorio')
                }
                let contraEncriptada = result.contraseña
                let checkContra = bcrypt.compareSync(contra, contraEncriptada)

                // Redireccionamos a Home
                if (checkContra == true){
                    res.redirect('/')
                } else {
                    res.send('Tu contraseña es incorrecta, volve a intentarlo')
                }
              })
              .catch( function(error){
                  console.log(error);
              })
            
    }, 
    processLogin: function(req, res){
        //Tengo que buscar los datos de la db.

        //Ponerlos en session.
        let form = req.body; 

        req.session.user = {
             userName: form.usuario,
             contraseña: form.contra,
        }

        //Preguntar si el usuario tildó el checkbox para recordarlo
        // return res.send (req.body);
        if(req.body.recordarme != undefined){
            res.cookie('cookieUser', 'el dato que quiero guardar', {maxAge: 1000*60*123123123})
        }

        return res.send(req.session)
        //Y si el usuario quiere, agregar la cookie para que lo recuerde.
        
    }, 
    logout: function(req, res){
         // destruir session
         req.session.destroy();

         //Destruyo la cookie
 
         return res.redirect('/');
    }
}
module.exports = loginController