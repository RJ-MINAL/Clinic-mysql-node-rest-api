const app = require('./config/server');
const user = require('./routes/user');

app.use('/api/news', user);

app.get('/', (req, res) => {
  res.redirect('/api/news/');
});

app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});
