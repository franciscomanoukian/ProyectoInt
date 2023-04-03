var express = require('express');
let db = require("../data/datos"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {
        lista: db.productos //esto busca y envia los datos y los manipulamos en el ejs con variable lista
    });
});

  
module.exports = router;
  