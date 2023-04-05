var express = require('express');
let loginController = require('../controllers/loginController')
var router = express.Router();

router.get('/', loginController.login);

  
module.exports = router;