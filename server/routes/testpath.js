//Test router for the purposes of testing connection
var express = require('express');
var router = express.Router();
//const data = require('../../developers.json');
var developerService = require('../developer-service');

router.get('/getDevelopers', function (req, res, next) {
  developerService.get(req, res);
});

module.exports = router;