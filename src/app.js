const http = require('http');
const app = require('./config/server');
const avatar = require('./routes/avatar.route');

// routes
app.use('/api/avatar', avatar);

app.get('/', (req, res) => {
  res.redirect('/api/avatar/');
});

// server up
http.createServer(app).listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});

// app.listen(app.get('port'), () => {
//   console.log('server on port ', app.get('port'));
// });
