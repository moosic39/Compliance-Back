const createError = require('http-errors');
const cors = require('cors')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const listsRouter = require('./routes/lists')

const app = express();

const DB_NAME = "COMPLIANCE"
const host = "@cluster0.01kzowe.mongodb.net"
const uri = `mongodb+srv://root:${process.env.PSW_NOSQL}${host}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(uri,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => console.log('Connexion to MongoDB with success !'))
  .catch((err) => {console.log('Connexion to MongoDB failed !');
    console.log(err)});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: '*'
}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lists', listsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(req, res, next,err) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
