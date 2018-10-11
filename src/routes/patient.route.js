const express = require('express');
const router = express.Router();
const Patient = require('../models/patient.model');
const { JsonError, JsonSuccess } = require('../models/response.model');
require('./patient-history.route')(router);

router.get('/', (req, res) => {
  Patient.getAll((err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    return res.status(200).json(data);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Patient.getById(id, (err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    return JsonSuccess(res, 'patient', data, 'Query successful');
  });
});

router.post('/', (req, res) => {
  if (!req.body.requestContent || !req.body.requestContent.patient)
    return JsonError(res, 400, 'requestContent.patient is missing in the request body');

  const content = req.body.requestContent.patient;
  const dataSchema = {
    id: null,
    name: content.name,
    last_name: content.last_name,
    phone: content.phone,
    dpi: content.dpi,
    address: content.address,
    email: content.email,
    age: content.age,
    incription_date: content.incription_date,
    id_clinic: content.id_clinic,
    id_ocupation: content.id_ocupation,
    id_avatar: content.id_avatar,
    id_country: content.id_country,
    active: 1
  };

  Patient.insert(dataSchema, (err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    if (data && data.id)
      return JsonSuccess(res, 'patient', data, 'Patient creado exitosamente');

    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

router.put('/:id', (req, res) => {
  const content = req.body;
  const dataSchema = {
    id: req.params.id,
    name: content.name,
    last_name: content.last_name,
    phone: content.phone,
    dpi: content.dpi,
    address: content.address,
    email: content.email,
    age: content.age,
    incription_date: content.incription_date,
    id_clinic: content.id_clinic,
    id_ocupation: content.id_ocupation,
    id_avatar: content.id_avatar,
    id_country: content.id_country,
    active: req.body.active
  };

  Patient.update(dataSchema, function(err, data) {
    if (err) return JsonError(res, err.status, err.message, err);

    if (data && data.id)
      return JsonSuccess(res, 'patient', data, `Patient with ID ${data.id} was updated`);

    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Patient.delete(id, (err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    if (data && data.id)
      return JsonSuccess(res, 'patient', data, `Patient with ID ${data.id} was deleted`);

    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

module.exports = router;
