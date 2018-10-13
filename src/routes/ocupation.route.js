const express = require('express');
const router = express.Router();
const { Ocupation } = require('../models/ocupation.model');
const { JsonError, JsonSuccess } = require('../models/response.model');

router.get('/', (req, res) => {
  Ocupation.getAll((err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    return JsonSuccess(res, 'ocupations', data);
  });
});

module.exports = router;
