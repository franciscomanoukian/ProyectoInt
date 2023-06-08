var express = require('express');
var router = express.Router();
let searchResultsController = require('../controllers/searchResultsController')

router.get('/', searchResultsController.showResults);
router.get('/users', searchResultsController.showUsers)


module.exports = router;
  