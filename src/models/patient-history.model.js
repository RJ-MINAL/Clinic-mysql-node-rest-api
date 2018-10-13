const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let patientHistoryModel = {};

patientHistoryModel.getAll = (patientId, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sql = `
	  SELECT ht.idHistoryAction, ht.date, ht.comment, ht.photo, ac.idAction,
      ac.description, dr.idDoctor, dr.name, dr.last_name
    FROM patient_history ph
    LEFT JOIN history_action ht on ph.id_history = ht.idHistoryAction
    LEFT JOIN action ac on ht.id_action = ac.idAction
    LEFT JOIN doctor dr on ht.id_doctor = dr.idDoctor
    WHERE ph.id_patient = ${connection.escape(patientId)};
  `;

  connection.query(sql, (err, rows) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    const arr = [];
    for (const row of rows) {
      arr.push({
        id: row.idHistoryAction,
        date: row.date,
        comment: row.comment,
        photo_url: row.photo,
        action: {
          id: row.idAction,
          description: row.description
        },
        doctor: {
          id: row.idDoctor,
          name: row.name,
          lastname: row.last_name
        }
      });
    }

    callback(null, arr);
  });
};

module.exports = patientHistoryModel;
