const app = require('./config/server');
const avatar = require('./routes/avatar.route');

app.use('/api/avatar', avatar);

app.get('/', (req, res) => {
  res.redirect('/api/avatar/');
});

app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});
