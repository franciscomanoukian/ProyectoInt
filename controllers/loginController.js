let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 
const bcrypt = require('bcryptjs');

let loginController = {
    showLogin: function (req, res) {
        res.render('login');
    },
    login: function (req, res) {
        let form = req.body
        let email = form.email
        let contra = form.contra
        let filtrado = {
            where: [{ email: email }]
        }

        db.Usuario.findOne(filtrado)
            .then(function (result) {
                // VERIFICO condiciones del formulario, las guardamos mas abajo
                // HAY Q MODIFICAR MENSAJES DE ERROR q estan con res.send
                let errors = {};
                if (email == '') {
                    errors.message = "El mail está vacío."
                    res.locals.errors = errors;
                    return res.render('login')
                }
                if (result == null) {
                    errors.message = "Email no encontrado"
                    res.locals.errors = errors;
                    return res.render('login')
                }
                if (contra == '') {
                    errors.message = "Contraseña es un campo obligatorio"
                    res.locals.errors = errors;
                    return res.render('login')
                }
                let contraEncriptada = result.contraseña
                let checkContra = bcrypt.compareSync(contra, contraEncriptada)

                // Redireccionamos a Home y creamos la cookie 

                if (checkContra == true) {

                    req.session.user = result

                    if (req.body.recordarme != undefined) {
                        res.cookie('InfoUser', result.id, { maxAge: 1000 * 60 * 15000 });
                    }
                    
                    return res.redirect('/')

                } else {
                    errors.message = "Contraseña incorrecta."
                    res.locals.errors = errors;
                    return res.render('login')
                }
            })
            .catch(function (error) {
                console.log(error);
            })

    },
    logout: function (req, res) {
        // destruir session
        req.session.destroy();

        //Destruyo la cookie
        res.clearCookie('InfoUser')

        return res.redirect('/');
    }
}
module.exports = loginController