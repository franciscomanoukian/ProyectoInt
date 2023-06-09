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
        if(busqueda.length >0){
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
                        let errors = {};
                        errors.message = "NO HEMOS ENCONTRADO RESULTADOS PARA SU BUSQUEDA, POR FAVOR INTENTELO DE NUEVO"
                        res.locals.errors = errors;
                        res.render('search-results')
                    }
                })
                .catch( function(error){
                    console.log(error)
                })
            }
        })
        .catch( function(error){
            console.log(error);
        })}
        else{
            let errors = {};
                        errors.message = "NO PUEDE REALIZAR UNA BUSQUEDA DE UN CAMPO VACÍO"
                        res.locals.errors = errors;
                        res.render('search-results')
        }


    },
    showUsers: function(req, res) {
        let busqueda = req.query.search
        let filtro = {
            where: [{nombre: {[op.like]: `%${busqueda}%`}}],
            order: [
                ['createdAt', 'ASC']
            ],
            include: [
                {association: "productos"},{association: "comentarios"} // Incluye relacioness
                ]
        }
        let filtro2 = {
            where: [{email: {[op.like]: `%${busqueda}%`}}],
            order: [
                ['createdAt', 'ASC']
            ],
            include: [
                {association: "productos"},{association: "comentarios"} // Incluye relacioness
                ]
        }
        if (busqueda.length > 0){
        db.Usuario.findAll(filtro) 
        .then(function(resultado){
            if (resultado.length != 0){
                //res.send(result)
                res.render('search-user', {lista: resultado});
            }
            else{
                db.Usuario.findAll(filtro2)
                .then(function(resultado2){
                    if (resultado2.length != 0){
                        res.render('search-user', {lista: resultado2}); 
                    }
                    else {
                        let errors = {};
                        errors.message = "NO HEMOS ENCONTRADO RESULTADOS PARA SU BUSQUEDA, POR FAVOR INTENTELO DE NUEVO"
                        res.locals.errors = errors;
                        res.render('search-user')
                    }
                })
                .catch( function(error){
                    console.log(error)
                })
            }
        })
        .catch( function(error){
            console.log(error);
        })}
        else{
            let errors = {};
                        errors.message = "NO PUEDE BUSCAR USUARIOS CON EL CAMPO VACÍO"
                        res.locals.errors = errors;
                        res.render('search-user')
        }
        

    }
}
module.exports = searchResultsController