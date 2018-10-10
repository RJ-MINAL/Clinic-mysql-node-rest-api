const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let avatarModel = {};

avatarModel.getAvatar = callback => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('SELECT * FROM avatar ORDER BY id', (err, rows) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);
    else return callback(null, rows);
  });
};

avatarModel.getAvatarById = (id, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query(
    `SELECT * FROM avatar WHERE id = ${connection.escape(id)}`,
    (err, row) => {
      if (err) return callback(SetError(500, 'Internal Error', err), null);

      if (row === undefined || row.length == 0)
        return callback(SetError(404, 'The Avatar with the given ID was not found', err));

      return callback(null, row);
    }
  );
};

avatarModel.insertAvatar = (dataValue, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('INSERT INTO avatar SET ?', dataValue, (err, result) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    dataValue.id = result.insertId;
    return callback(null, { ...dataValue });
  });
};

avatarModel.updateAvatar = (dataValue, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sql = `
    UPDATE avatar SET
    code_image = ${connection.escape(dataValue.code_image)},
    skin_color = ${connection.escape(dataValue.skin_color)},
    cloth_color = ${connection.escape(dataValue.cloth_color)},
    hair_color = ${connection.escape(dataValue.hair_color)},
    active = ${connection.escape(dataValue.active)}
    WHERE id = ${connection.escape(dataValue.id)}`;

  connection.query(sql, function(err, result) {
    if (err) return callback(SetError(500, 'Internal Error', err), null);
    else return callback(null, { ...dataValue });
  });
};

avatarModel.deleteAvatar = (id, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sqlExists = `SELECT * FROM avatar WHERE id = ${connection.escape(id)}`;

  connection.query(sqlExists, (err, row) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    if (row === undefined || row.length == 0)
      return callback(SetError(404, 'The Avatar with the given ID was not found', err));

    const sql = `DELETE FROM avatar WHERE id = ${connection.escape(id)}`;
    connection.query(sql, (err, result) => {
      if (err) return callback(SetError(500, 'Internal Error', err), null);
      else return callback(null, { ...row[0] });
    });
  });
};

module.exports = avatarModel;
