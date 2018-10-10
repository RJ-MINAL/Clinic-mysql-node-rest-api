//const Joi = require("joi");
const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let patientModel = {};

patientModel.getAll = callback => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('SELECT * FROM pacient ORDER BY id', (err, rows) => {
    if (err) callback(SetError(500, 'Internal Error', err), null);
    else callback(null, rows);
  });
};

patientModel.getById = (id, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query(
    `SELECT * FROM pacient WHERE id = ${connection.escape(id)}`,
    (err, rows) => {
      if (err) return callback(SetError(500, 'Internal Error', err), null);

      if (rows === undefined || rows.length == 0)
        return callback(
          SetError(404, 'The Patient with the given ID was not found', err)
        );

      callback(null, rows[0]);
    }
  );
};

patientModel.insert = (dataSchema, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('INSERT INTO pacient SET ?', dataSchema, (err, result) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    dataSchema.id = result.insertId;
    callback(null, { ...dataSchema });
  });
};

patientModel.update = (dataSchema, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sql = `
    UPDATE pacient SET
    name = ${connection.escape(dataSchema.name)},
    last_name = ${connection.escape(dataSchema.last_name)},
    phone = ${connection.escape(dataSchema.phone)},
    dpi = ${connection.escape(dataSchema.dpi)},
    address = ${connection.escape(dataSchema.address)},
    email = ${connection.escape(dataSchema.email)},
    age = ${connection.escape(dataSchema.age)},
    incription_date = ${connection.escape(dataSchema.incription_date)},
    id_clinic = ${connection.escape(dataSchema.id_clinic)},
    id_ocupation = ${connection.escape(dataSchema.id_ocupation)},
    id_avatar = ${connection.escape(dataSchema.id_avatar)},
    id_country = ${connection.escape(dataSchema.id_country)},
    active = ${connection.escape(dataSchema.active)}
    WHERE id = ${connection.escape(dataSchema.id)}`;

  connection.query(sql, function(err, result) {
    if (err) callback(SetError(500, 'Internal Error', err), null);
    else callback(null, { ...dataSchema });
  });
};

patientModel.delete = (id, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sqlExists = `SELECT * FROM pacient WHERE id = ${connection.escape(id)}`;

  connection.query(sqlExists, (err, row) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    if (row === undefined || row.length == 0)
      return callback(SetError(404, 'The Patient with the given ID was not found', err));

    const sql = `DELETE FROM pacient WHERE id = ${connection.escape(id)}`;
    connection.query(sql, (err, result) => {
      if (err) callback(SetError(500, 'Internal Error', err), null);
      else callback(null, { ...row[0] });
    });
  });
};

/* function validatePatient(body) {
  const schema = {
    id: Joi.number().integer(),
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    last_name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(20)
      .required(),
    dpi: Joi.string()
      .length(13)
      .required(),
    address: Joi.string()
      .min(5)
      .max(100)
      .required(),
    email: Joi.string()
      .email()
      .min(5)
      .max(50)
      .required(),
    age: Joi.number()
      .integer()
      .min(1)
      .max(120)
      .required(),
    incription_date: Joi.string()
      .length(10)
      .required(),
    id_clinic: Joi.number()
      .min(1)
      .required(),
    id_ocupation: Joi.number()
      .min(1)
      .required(),
    id_avatar: Joi.number()
      .min(1)
      .required(),
    id_country: Joi.number()
      .min(1)
      .required(),
    active: Joi.boolean().default(1)
  };

  return Joi.validate(body, schema);
} */

module.exports = patientModel;
//exports.validateRequest = validatePatient;
