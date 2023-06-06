var express = require('express');
let loginController = require('../controllers/loginController')
var router = express.Router();

router.get('/', loginController.showLogin);
router.post('/loginUser', loginController.login);
router.get('/logout', loginController.logout)

// router.post('/login', loginController.processLogin);
  
module.exports = router;