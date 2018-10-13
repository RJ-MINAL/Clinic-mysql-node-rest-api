const http = require('http');
const app = require('./config/server');
const avatar = require('./routes/avatar.route');
const patient = require('./routes/patient.route');
const country = require('./routes/country.route');

// routes
app.use('/api/v1/avatars', avatar);
app.use('/api/v1/patients', patient);
app.use('/api/v1/countries', country);

// server up
http.createServer(app).listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});

// app.listen(app.get('port'), () => {
//   console.log('server on port ', app.get('port'));
// });
