var express = require('express');
const productoController = require('../controllers/productoController');
var router = express.Router();

router.get('/detalle/id/:id?', productoController.detail);
router.get('/edit/:id', productoController.edit)
router.post('/add', productoController.add)
router.post('/guardarCambios', productoController.modify)
router.get('/borrar/:id', productoController.destroy)
router.post('/borrar', productoController.procesoDestroy)
router.post('/comment', productoController.comment)

router.get('/add', productoController.showAdd)
  
module.exports = router;
  
// hacer producto/add 
