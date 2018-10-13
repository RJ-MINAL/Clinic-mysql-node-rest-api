const Joi = require('joi');
const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let patientModel = {};

patientModel.getAll = callback => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('SELECT * FROM patient ORDER BY idPatient', (err, rows) => {
    if (err) callback(SetError(500, 'Internal Error', err), null);
    else callback(null, rows);
  });
};

patientModel.getById = (id, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sql = `
    SELECT pt.*, av.idAvatar, cl.idClinic , 
      cl.name as cl_name, oc.idOcupation , oc.description,
      ct.idCountry , ct.name as ct_name, ct.code
    FROM patient pt 
    LEFT JOIN avatar av on pt.id_avatar = av.idAvatar
    LEFT JOIN clinic cl on pt.id_clinic = cl.idClinic
    LEFT JOIN ocupation oc on pt.id_ocupation = oc.idOcupation
    LEFT JOIN country ct on pt.id_country = ct.idCountry
    WHERE pt.idPatient = ${connection.escape(id)}
  `;

  connection.query(sql, (err, rows) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    if (rows === undefined || rows.length == 0)
      return callback(SetError(404, 'The Patient with the given ID was not found', err));

    const row = rows[0];
    const patient = {
      id: id,
      name: row.name,
      last_name: row.last_name,
      phone: row.phone,
      dpi: row.dpi,
      email: row.email,
      inscription_date: row.inscription_date,
      age: row.age,
      active: row.active,
      clinic: {
        id: row.idClinic,
        name: row.cl_name
      },
      ocupation: {
        id: row.idOcupation,
        description: row.description
      },
      avatar: {
        id: row.idAvatar,
        code_image: row.code_image,
        skin_color: row.skin_color,
        cloth_color: row.cloth_color,
        hair_color: row.hair_color
      },
      country: {
        id: row.idCountry,
        name: row.ct_name,
        code: row.code
      }
    };

    callback(null, patient);
  });
};

patientModel.insert = (dataSchema, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  connection.query('INSERT INTO patient SET ?', dataSchema, (err, result) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    dataSchema.id = result.insertId;
    callback(null, { ...dataSchema });
  });
};

patientModel.update = (dataSchema, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sqlExists = `SELECT * FROM patient WHERE idPatient = ${connection.escape(id)}`;

  const sqlUpdate = `
    UPDATE patient SET
    name = ${connection.escape(dataSchema.name)},
    last_name = ${connection.escape(dataSchema.last_name)},
    phone = ${connection.escape(dataSchema.phone)},
    dpi = ${connection.escape(dataSchema.dpi)},
    address = ${connection.escape(dataSchema.address)},
    email = ${connection.escape(dataSchema.email)},
    age = ${connection.escape(dataSchema.age)},
    inscription_date = ${connection.escape(dataSchema.inscription_date)},
    id_clinic = ${connection.escape(dataSchema.id_clinic)},
    id_ocupation = ${connection.escape(dataSchema.id_ocupation)},
    id_avatar = ${connection.escape(dataSchema.id_avatar)},
    id_country = ${connection.escape(dataSchema.id_country)},
    active = ${connection.escape(dataSchema.active)}
    WHERE idPatient = ${connection.escape(dataSchema.id)}
  `;

  connection.query(sqlExists, (err, row) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    if (row === undefined || row.length == 0)
      return callback(SetError(404, 'The Patient with the given ID was not found', err));

    connection.query(sqlUpdate, function(err, result) {
      if (err) callback(SetError(500, 'Internal Error', err), null);
      else callback(null, { ...dataSchema });
    });
  });
};

patientModel.delete = (id, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sqlExists = `SELECT * FROM patient WHERE idPatient = ${connection.escape(id)}`;

  connection.query(sqlExists, (err, row) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    if (row === undefined || row.length == 0)
      return callback(SetError(404, 'The Patient with the given ID was not found', err));

    const sqlDelete = `DELETE FROM patient WHERE idPatient = ${connection.escape(id)}`;
    connection.query(sqlDelete, (err, result) => {
      if (err) callback(SetError(500, 'Internal Error', err), null);
      else callback(null, { ...row[0] });
    });
  });
};

function validatePatient(body) {
  const schema = {
    id: Joi.number()
      .integer()
      .min(1),
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
      .integer()
      .min(1)
      .required(),
    id_ocupation: Joi.number()
      .integer()
      .min(1)
      .required(),
    id_avatar: Joi.number()
      .integer()
      .min(1)
      .required(),
    id_country: Joi.number()
      .integer()
      .min(1)
      .required(),
    active: Joi.number()
      .equal([0, 1])
      .default(1)
  };

  return Joi.validate(body, schema);
}

exports.Patient = patientModel;
exports.validateRequest = validatePatient;
