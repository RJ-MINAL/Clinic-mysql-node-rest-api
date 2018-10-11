const http = require('http');
const app = require('./config/server');
const avatar = require('./routes/avatar.route');
const patient = require('./routes/patient.route');

// routes
app.use('/api/v1/avatar', avatar);
app.use('/api/v1/patient', patient);

// server up
http.createServer(app).listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});

// app.listen(app.get('port'), () => {
//   console.log('server on port ', app.get('port'));
// });
