var express = require('express');
const productoController = require('../controllers/productoController');
var router = express.Router();

router.get('/detalle/id/:id?', productoController.detail);
router.get('/edit/id', productoController.edit)
  
module.exports = router;
  
// hacer producto/add 
