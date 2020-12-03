var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/501');
require('./schemas/waterman');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var watermanRouter = require('./routes/waterman')

const conf = require('./conf')

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/waterman', watermanRouter)

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
  res.json({ error: 'error' });
});

app.listen(port = conf.port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
