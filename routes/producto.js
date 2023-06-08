var express = require('express');
const productoController = require('../controllers/productoController');
var router = express.Router();

router.get('/detalle/id/:id?', productoController.detail);
router.get('/edit/id', productoController.edit)
router.get('/add', productoController.add)

router.post('/comment', productoController.comment)
  
module.exports = router;
  
// hacer producto/add 
