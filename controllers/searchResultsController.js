
let db = require("../database/models");
let searchResultsController = {
    showResults: function(req, res) {
        let busqueda = req.query.search
        let filtro = {
            where: [{nombre: busqueda}]
        }
        db.Producto.findOne(filtro) 
        .then(function(result){
            if (result != null){
                res.render('search-results', {lista: result});
            }
            else{
                res.send("NO HEMOS ENCONTRADO RESULTADOS PARA SU BUSQUEDA, POR FAVOR INTENTELO DE NUEVO")
            }
        })
        .catch( function(error){
            console.log(error);
        })
    }
}
module.exports = searchResultsController