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

  // connection.query('INSERT INTO avatar SET ?', dataValue, (err, result) => {
  //   if (err) throw err;
  //   else callback(null, { insertId: result.insertId });
  // });
};

// avatarModel.updateUser = (userData, callback) => {
//   if (connection) {
//     const sql = `
//       UPDATE impati.avatar SET
//       username = ${connection.escape(userData.username)},
//       password = ${connection.escape(userData.password)},
//       email = ${connection.escape(userData.email)}
//       WHERE id = ${connection.escape(userData.id)}`;

//     connection.query(sql, function(err, result) {
//       if (err) {
//         throw err;
//       } else {
//         callback(null, {
//           msg: 'success'
//         });
//       }
//     });
//   }
// };

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
