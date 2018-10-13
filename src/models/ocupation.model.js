const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let ocupationModel = {};

ocupationModel.getAll = callback => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('SELECT * FROM ocupation;', (err, rows) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);
    else return callback(null, rows);
  });
};

exports.Ocupation = ocupationModel;
