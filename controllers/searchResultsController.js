let db = require("../database/models");
let op = db.Sequelize.Op;
let searchResultsController = {
    showResults: function(req, res) {
        let busqueda = req.query.search
        let filtro = {
            where: [{nombre: {[op.like]: `%${busqueda}%`}}],
            order: [
                ['createdAt', 'ASC']
            ],
            include: [
                {association: "usuario"},{association: "comentarios"} // Incluye relacioness
                ]
        }

        db.Producto.findAll(filtro) 
        .then(function(result){
            if (result != null){
                //res.send(result)
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