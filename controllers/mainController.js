let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 
let datab = require("../data/datos")

let mainController = {
    index: function(req, res) {
        db.Producto.findAll({
            include: [
                {association: "usuario"},{association: "comentarios"} // Incluye relacioness
                ],
          order: [
            ['createdAt', 'DESC']]}).then( function(result){
                return res.render('home', {
                    lista: result //esto busca y envia los datos y los manipulamos en el ejs con variable lista
                });
              })
              .catch( function(error){
                  console.log(error);
              })
        
    }
   
}
module.exports = mainController