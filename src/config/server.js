const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 4200);
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '../src/views'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
