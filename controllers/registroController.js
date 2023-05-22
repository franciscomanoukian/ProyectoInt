let registroController = {
    registrar: function(req, res) {
<<<<<<< HEAD
        res.render('register', {
            email: req.params.email
            
        })
        console.log(email);

    },
    store: function(req, res){
        let form = req.body;
        let email = form.email;
        return res.send(req.body)   //aca deberia usar un metodo de sequelize para guardar datos. Dentro del then deberia redireccionar a otra ruta
=======
        res.render('register');
>>>>>>> b8f3d6f7c60a016a831e14778cbe4c8eee038e79
    }
}
module.exports = registroController