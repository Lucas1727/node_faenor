var express = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET info page. */
router.get('/info', function(req, res) {
  res.render('info');
});

/* GET gallery page. */
router.get('/gallery', function(req, res) {
  res.render('gallery');
});

/* GET map page. */
router.get('/map', function(req, res) {
  res.render('map');
});

/* GET test page. */
router.get('/test', function(req, res) {
  var db = req.db;
  var collection = db.get('usercomments');
  collection.find({},{},function(e,docs){
    res.render('test', {
      "comments" : docs
    });
  });
});

module.exports = router;
