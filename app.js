var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var PORT = 8080

// New Code
var monk = require('monk');
var db = monk('192.168.1.135:27017/faenor');

var indexRouter = require('./routes/index');
var infoRouter = require('./routes/info');
var galleryRouter = require('./routes/gallery');
var mapRouter = require('./routes/map');
var testRouter = require('./routes/test');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Make our db accessible to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/', indexRouter);
app.use('/info', infoRouter);
app.use('/gallery', galleryRouter);
app.use('/map', mapRouter);
app.use('/test', testRouter);

app.listen(PORT, () => console.log(`🚀 Webhook Server running on port ${PORT}`));

app.post('/add', (req,res) => {
  console.log(req.body);

  var db = req.db;

  var name = req.body.user;
  var title = req.body.title;
  var comment = req.body.comment;
  var addedDate = new Date();
  var rating = parseInt(req.body.rating);

  var collection = db.get('usercomments');

  collection.insert({
    "name" : name,
    "title" : title,
    "comment" : comment,
    "addedDate" : addedDate,
    "rating" : rating
  }, function	(err,doc) {
    if (err) {
      console.log("Failed to add data to DB");
    } else {
      console.log("Successfully added data to DB")
    }
  });

  console.log("Name: " + name + ", Comment: " + comment + "Title: " + title + ", Added Date: " + addedDate + "Rating: " + rating);

  res.redirect('/test')
  res.json({success: true});
  res.status(200).end();
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
