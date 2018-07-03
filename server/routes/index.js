var express = require('express');
var router = express.Router();

router.get('/message', function(req, res, next) {
    res.json('Welcome to Fiberonics');
  });

// Including testpath router to the default page load route
router.use(require('./testpath'));

module.exports = router;
