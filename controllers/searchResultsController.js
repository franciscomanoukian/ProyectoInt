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
        let filtro2 = {
            where: [{descripcion: {[op.like]: `%${busqueda}%`}}],
            order: [
                ['createdAt', 'ASC']
            ],
            include: [
                {association: "usuario"},{association: "comentarios"} // Incluye relacioness
                ]
        }

        db.Producto.findAll(filtro) 
        .then(function(result){
            if (result.length != 0){
                //res.send(result)
                res.render('search-results', {lista: result});
            }
            else{
                db.Producto.findAll(filtro2)
                .then(function(result2){
                    if (result2.length != 0){
                        res.render('search-results', {lista: result2}); 
                    }
                    else{
                        res.send("NO HEMOS ENCONTRADO RESULTADOS PARA SU BUSQUEDA, POR FAVOR INTENTELO DE NUEVO")
                    }
                })
                .catch( function(error){
                    console.log(error)
                })
            }
        })
        .catch( function(error){
            console.log(error);
        })


    }
}
module.exports = searchResultsController