let db = require("../data/datos");
let searchResultsController = {
    showResults: function(req, res) {
        res.render('search-results', {lista:db.productos});
    }
}
module.exports = searchResultsController