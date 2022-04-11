var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const session = require('express-session');

const mongoose = require('mongoose');
global.db = mongoose.createConnection(process.env.MONGO_URL);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(cors())
app.options('*',cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;