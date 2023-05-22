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
        return res.send(req.body)   //aca deberia usar un metodo de sequelize para guardar datos. Dentro del then deberia redireccionar a otra ruta
    }
}
module.exports = registroController