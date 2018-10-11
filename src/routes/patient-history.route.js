const History = require('../models/patient-history.model');
const { JsonError, JsonSuccess } = require('../models/response.model');

module.exports = router => {
  // router.get('/', (req, res) => {
  //   const id = req.params.id;
  //   console.log(req);

  //   return res.status(200).json({ req: req });
  // });

  router.get('/:id/history', (req, res) => {
    const patientId = req.params.id;
    History.getAll(patientId, (err, data) => {
      if (err) return JsonError(res, err.status, err.message, err);

      return JsonSuccess(res, 'history', data, 'Query successful');
    });
  });

  // router.post('/news', (req, res) => {
  //   return res.status(500).send(req.body);

  //   const { title, news } = req.body;
  //   connection.query(
  //     'INSERT INTO news SET ? ',
  //     {
  //       title,
  //       news
  //     },
  //     (err, result) => {
  //       res.redirect('/news');
  //     }
  //   );
  // });
};
// const express = require('express');
// const router = express.Router();
// //const Patient = require('../models/patient.model');
// //const { JsonError, JsonSuccess } = require('../models/response.model');

// router.get('/', (req, res) => {
//   const id = req.params.id;
//   console.log(req);

//   return res.status(200).json({ req: req });
// });

// // router.get('/:id', (req, res) => {
// //   const { id } = req.params;
// //   Patient.getById(id, (err, data) => {
// //     if (err) return JsonError(res, err.status, err.message, err);

// //     return res.status(200).json(data);
// //   });
// // });

// router.get('/:id/history', (req, res) => {
//   // const { id } = req.params;
//   // Patient.getById(id, (err, data) => {
//   //   if (err) return JsonError(res, err.status, err.message, err);

//   return res.status(200).json({ response: 'You want the history?' });
//   //});
// });

// module.exports = router;
