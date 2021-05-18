var express = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET info page. */
router.get('/info', function(req, res) {
  res.render('info', { title: 'Express' });
});

/* GET gallery page. */
router.get('/gallery', function(req, res) {
  res.render('gallery', { title: 'Express' });
});

/* GET map page. */
router.get('/map', function(req, res) {
  res.render('map', { title: 'Express' });
});

/* GET testimonial page. */
router.get('/test', function(req, res) {
  res.render('test', { title: 'Express' });
});

module.exports = router;
