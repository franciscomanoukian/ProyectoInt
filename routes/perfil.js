var express = require('express');
let perfilController = require('../controllers/perfilController')
var router = express.Router();

router.get('/id/:id', perfilController.detail);
router.get('/editar/:id', perfilController.edit);
router.post('/modificar', perfilController.modify);

  
module.exports = router;

// hacer perfil/editar