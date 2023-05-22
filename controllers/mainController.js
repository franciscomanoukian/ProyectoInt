let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let mainController = {
    index: function(req, res){
        db.Producto.findAll({
          
          }).then( function(moviesAll){
                  return res.send(moviesAll);
                  
              })
              .catch( function(error){
                  console.log(error);
              })
          
          
  
    }
    // index: function(req, res) {
    //     res.render('home', {
    //         lista: db.productos, comentarios: db.comentarios //esto busca y envia los datos y los manipulamos en el ejs con variable lista
    //     });
    // }
}
module.exports = mainController