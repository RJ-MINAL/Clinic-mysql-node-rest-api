const connection = require('../config/dbConnection')();
const { CustomError } = require('../models/response.model');

let avatarModel = {};

avatarModel.getAvatar = callback => {
  if (!connection) throw CustomError(500, 'Internal Error, Server down');

  connection.query('SELECT * FROM avatar ORDER BY id', (err, rows) => {
    if (err) throw err;
    else callback(null, rows);
  });
};

avatarModel.getAvatarById = (id, callback) => {
  if (!connection) throw CustomError(500, 'Internal Error, Server down');

  connection.query(
    `SELECT * FROM avatar WHERE id = ${connection.escape(id)}`,
    (err, rows) => {
      if (err) throw err;
      else callback(null, rows);
    }
  );
};

avatarModel.insertAvatar = (dataValue, callback) => {
  if (!connection) throw CustomError(500, 'Internal Error, Server down');

  connection.query('INSERT INTO avatar SET ?', dataValue, (err, result) => {
    if (err) throw err;

    dataValue.id = result.insertId;
    callback(null, { ...dataValue });
  });
};

avatarModel.updateAvatar = (dataValue, callback) => {
  if (!connection) throw CustomError(500, 'Internal Error, Server down');

  const sql = `
    UPDATE avatar SET
    code_image = ${connection.escape(dataValue.code_image)},
    skin_color = ${connection.escape(dataValue.skin_color)},
    cloth_color = ${connection.escape(dataValue.cloth_color)},
    hair_color = ${connection.escape(dataValue.hair_color)},
    active = ${connection.escape(dataValue.active)}
    WHERE id = ${connection.escape(dataValue.id)}`;

  connection.query(sql, function(err, result) {
    if (err) throw err;
    else callback(null, { ...dataValue });
  });
};

avatarModel.deleteAvatar = (id, callback) => {
  if (!connection) throw CustomError(500, 'Internal Error, Server down');

  const sqlExists = `SELECT * FROM avatar WHERE id = ${connection.escape(id)}`;

  connection.query(sqlExists, (err, row) => {
    if (row) {
      console.log('Delete', row);
      const sql = `DELETE FROM avatar WHERE id = ${connection.escape(id)}`;
      connection.query(sql, (err, result) => {
        if (err) throw err;
        else return callback(null, { ...row[0] });
      });
    } else throw CustomError(404, `The Avatar with the ID ${id} was not found`);
  });
};

module.exports = avatarModel;
