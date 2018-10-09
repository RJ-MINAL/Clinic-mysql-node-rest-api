const connection = require('../config/dbConnection')();

let avatarModel = {};

avatarModel.getAvatar = callback => {
  if (!connection) return;

  connection.query('SELECT * FROM avatar ORDER BY id', (err, rows) => {
    if (err) throw err;
    else callback(null, rows);
  });
};

avatarModel.getAvatarById = (id, callback) => {
  if (!connection) return;

  connection.query(
    `SELECT * FROM avatar WHERE id = ${connection.escape(id)}`,
    (err, rows) => {
      if (err) throw err;
      else callback(null, rows);
    }
  );
};

avatarModel.insertAvatar = (dataValue, callback) => {
  if (!connection) return;

  connection.query('INSERT INTO avatar SET ?', dataValue, (err, result) => {
    if (err) throw err;

    dataValue.id = result.insertId;
    callback(null, { ...dataValue });
  });
};

avatarModel.updateAvatar = (dataValue, callback) => {
  if (connection) {
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
  }
};

// avatarModel.deleteUser = (id, callback) => {
//   if (connection) {
//     var sqlExists = `
//       SELECT * FROM impati.avatar WHERE id = ${connection.escape(id)}
//     `;
//     connection.query(sqlExists, (err, row) => {
//       if (row) {
//         var sql = `DELETE FROM users WHERE id = ${connection.escape(id)}`;
//         connection.query(sql, (err, result) => {
//           if (err) {
//             throw err;
//           } else {
//             callback(null, {
//               msg: 'deleted'
//             });
//           }
//         });
//       } else {
//         callback(null, {
//           msg: 'not Exists'
//         });
//       }
//     });
//   }
// };

module.exports = avatarModel;
