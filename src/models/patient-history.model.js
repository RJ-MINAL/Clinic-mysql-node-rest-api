//const Joi = require("joi");
const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let patientHistoryModel = {};

patientHistoryModel.getAll = (patientId, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sql = `
    SELECT ht.id as ht_id, ht.date, ht.comment, ht.photo, ac.id as ac_id,
      ac.description, dr.id as dr_id, dr.name, dr.last_name
    FROM pacient_history ph
    LEFT JOIN history_action ht on ph.id_history = ht.id
    LEFT JOIN action ac on ht.id_action = ac.id
    LEFT JOIN doctor dr on ht.id_doctor = dr.id
    WHERE ph.id_pacient = ${connection.escape(patientId)};
  `;

  connection.query(sql, (err, rows) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    //let history = {};
    const arr = [];
    for (const row of rows) {
      arr.push({
        id: row.ht_id,
        date: row.date,
        comment: row.comment,
        photo_url: row.photo,
        action: {
          id: row.ac_id,
          description: row.description
        },
        doctor: {
          id: row.dr_id,
          name: row.name,
          lastname: row.last_name
        }
      });
    }

    callback(null, arr);
  });
};

/* patientHistoryModel.getById = (id, callback) => {
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

patientHistoryModel.insert = (dataSchema, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('INSERT INTO pacient SET ?', dataSchema, (err, result) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    dataSchema.id = result.insertId;
    callback(null, { ...dataSchema });
  });
};

patientHistoryModel.update = (dataSchema, callback) => {
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

patientHistoryModel.delete = (id, callback) => {
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
}; */

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

module.exports = patientHistoryModel;
//exports.validateRequest = validatePatient;
