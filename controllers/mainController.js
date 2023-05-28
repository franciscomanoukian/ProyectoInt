let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 
let datab = require("../data/datos")

let mainController = {
    index: function(req, res) {
        res.render('home', {
            lista: datab.productos, comentarios: datab.comentarios //esto busca y envia los datos y los manipulamos en el ejs con variable lista
        });
    },
    imprimirDb: function(req, res){
        db.Usuario.findAll({
            include: [
                {association: "productos"},{association: "comentarios"} // Incluye relaciones
                ]
          }).then( function(moviesAll){
                  return res.send(moviesAll);
                  
              })
              .catch( function(error){
                  console.log(error);
              })
    }
   
}
module.exports = mainController