var express = require('express');
var router = express.Router();

/* GET info listing. */
router.get('/info', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
