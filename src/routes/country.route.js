const express = require('express');
const router = express.Router();
const { Country } = require('../models/country.model');
const { JsonError, JsonSuccess, Success } = require('../models/response.model');

router.get('/', (req, res) => {
  Country.getAll((err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    return JsonSuccess(res, 'countries', data);
  });
});

module.exports = router;
