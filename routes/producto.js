var express = require('express');
const productoController = require('../controllers/productoController');
var router = express.Router();

router.get('/detalle/id/:id?', productoController.detail);
  
module.exports = router;
  
// hacer producto/add 
