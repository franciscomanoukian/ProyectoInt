var express = require('express');
var router = express.Router();
let registroController = require('../controllers/registroController')

router.get('/', registroController.registrar);
router.post('/guardar', registroController.store);


module.exports = router;