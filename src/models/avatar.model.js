const Joi = require('joi');
const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let avatarModel = {};

avatarModel.getAll = callback => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('SELECT * FROM avatar ORDER BY idAvatar', (err, rows) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);
    else return callback(null, rows);
  });
};

avatarModel.getById = (id, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query(
    `SELECT * FROM avatar WHERE idAvatar = ${connection.escape(id)}`,
    (err, row) => {
      if (err) return callback(SetError(500, 'Internal Error', err), null);

      if (row === undefined || row.length == 0)
        return callback(SetError(404, 'The Avatar with the given ID was not found', err));

      const { idAvatar, ...otherProps } = row[0];
      const newObj = { id, ...otherProps };

      return callback(null, newObj);
    }
  );
};

avatarModel.insert = (dataSchema, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('INSERT INTO avatar SET ?', dataSchema, (err, result) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    const { idAvatar, ...otherProps } = dataSchema;
    const newObj = { id: result.insertId, ...otherProps };
    return callback(null, newObj);
  });
};

avatarModel.update = (dataSchema, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sqlExists = `SELECT * FROM avatar WHERE idAvatar = ${connection.escape(
    dataSchema.idAvatar
  )}`;

  const sqlUpdate = `
    UPDATE avatar SET
    code_image = ${connection.escape(dataSchema.code_image)},
    skin_color = ${connection.escape(dataSchema.skin_color)},
    cloth_color = ${connection.escape(dataSchema.cloth_color)},
    hair_color = ${connection.escape(dataSchema.hair_color)},
    active = ${connection.escape(dataSchema.active)}
    WHERE idAvatar = ${connection.escape(dataSchema.id)}
  `;

  connection.query(sqlExists, (err, row) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    if (row === undefined || row.length == 0)
      return callback(SetError(404, 'The Avatar with the given ID was not found', err));

    connection.query(sqlUpdate, function(err, result) {
      if (err) callback(SetError(500, 'Internal Error', err), null);
      else callback(null, { id: dataSchema.id });
    });
  });
};

avatarModel.delete = (id, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sqlExists = `SELECT * FROM avatar WHERE idAvatar = ${connection.escape(id)}`;

  connection.query(sqlExists, (err, row) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    if (row === undefined || row.length == 0)
      return callback(SetError(404, 'The Avatar with the given ID was not found', err));

    const sql = `DELETE FROM avatar WHERE idAvatar = ${connection.escape(id)}`;
    connection.query(sql, (err, result) => {
      if (err) return callback(SetError(500, 'Internal Error', err), null);
      else return callback(null, { id: row[0].idAvatar });
    });
  });
};

function validateAvatar(body) {
  const schema = {
    id: Joi.number()
      .integer()
      .min(1),
    code_image: Joi.number()
      .integer()
      .min(1)
      .required(),
    skin_color: Joi.string()
      .min(3)
      .max(7)
      .required(),
    cloth_color: Joi.string()
      .min(3)
      .max(7)
      .required(),
    hair_color: Joi.string()
      .min(3)
      .max(7)
      .required(),
    active: Joi.number()
      .equal([0, 1])
      .default(1)
  };

  return Joi.validate(body, schema);
}

exports.Avatar = avatarModel;
exports.validateRequest = validateAvatar;
