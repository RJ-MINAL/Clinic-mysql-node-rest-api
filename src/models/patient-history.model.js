const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let patientHistoryModel = {};

patientHistoryModel.getAll = (patientId, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sql = `
    SELECT ht.id as ht_id, ht.date, ht.comment, ht.photo, ac.id as ac_id, 
    ac.description, dr.id as dr_id, dr.name, dr.last_name 
    FROM patient_history ph 
    LEFT JOIN history_action ht on ph.id_history = ht.id 
    LEFT JOIN action ac on ht.id_action = ac.id 
    LEFT JOIN doctor dr on ht.id_doctor = dr.id 
    WHERE ph.id_patient = ${connection.escape(patientId)};
  `;

  connection.query(sql, (err, rows) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

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

module.exports = patientHistoryModel;
