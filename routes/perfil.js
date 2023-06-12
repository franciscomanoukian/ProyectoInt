var express = require('express');
let perfilController = require('../controllers/perfilController')
var router = express.Router();

router.get('/:id', perfilController.detail);
router.get('/editar', perfilController.edit);

router.post('/seguir',perfilController.seguir);
  
module.exports = router;

// hacer perfil/editar