const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const user = require('./routes/user');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get('/', (req, res) => {
  res.redirect('/api/users');
});

require('./routes/user')(app);

http.createServer(app).listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
