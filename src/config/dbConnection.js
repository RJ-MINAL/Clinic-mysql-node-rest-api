const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'nodeUser',
    password: '2012',
    database: 'impati'
  });
};
