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
                return res.send('todo recibido ok '+ email+ contra + ' Contra coincide?: '+checkContra)
                
              })
              .catch( function(error){
                  console.log(error);
              })
    }
}
module.exports = loginController