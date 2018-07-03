//Test router for the purposes of testing connection
var express = require('express');
var router = express.Router();
const data = require('../../developers.json');

router.get('/developers', function(req, res, next) {
  res.json(data);
});

module.exports = router;  