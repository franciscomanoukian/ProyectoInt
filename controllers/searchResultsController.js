let db = require("../data/datos"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 
let searchResultsController = {
    showResults: function(req, res) {
        res.render('search-results');
    }
}
module.exports = searchResultsController