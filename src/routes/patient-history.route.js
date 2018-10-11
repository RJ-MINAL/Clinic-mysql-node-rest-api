const History = require('../models/patient-history.model');
const { JsonError, JsonSuccess } = require('../models/response.model');

module.exports = router => {
  router.get('/:id/history', (req, res) => {
    const patientId = req.params.id;
    History.getAll(patientId, (err, data) => {
      if (err) return JsonError(res, err.status, err.message, err);

      return JsonSuccess(res, 'history', data, 'Query successful');
    });
  });
};
