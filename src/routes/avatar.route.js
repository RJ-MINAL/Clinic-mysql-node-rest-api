const express = require('express');
const router = express.Router();
const { Avatar, validateRequest } = require('../models/avatar.model');
const { JsonError, JsonSuccess, Success } = require('../models/response.model');

router.get('/', (req, res) => {
  Avatar.getAll((err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    return JsonSuccess(res, 'avatars', data);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Avatar.getById(id, (err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    return JsonSuccess(res, 'avatar', data);
  });
});

router.post('/', (req, res) => {
  if (!req.body.requestContent || !req.body.requestContent.avatar)
    return JsonError(res, 400, 'requestContent.avatar is missing in the request body');

  const content = req.body.requestContent.avatar;
  const { error } = validateRequest(content);
  if (error) return JsonError(res, 400, error.details[0].message);

  const dataSchema = {
    id: null,
    code_image: content.code_image,
    skin_color: content.skin_color,
    cloth_color: content.cloth_color,
    hair_color: content.hair_color,
    active: 1
  };

  Avatar.insert(dataSchema, (err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    if (data && data.id)
      return JsonSuccess(res, 'avatar', data, 'Avatar creado exitosamente');

    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

router.put('/:id', (req, res) => {
  const content = req.body;
  const { error } = validateRequest(content);
  if (error) return JsonError(res, 400, error.details[0].message);

  const dataSchema = {
    id: req.params.id,
    code_image: content.code_image,
    skin_color: content.skin_color,
    cloth_color: content.cloth_color,
    hair_color: content.hair_color,
    active: content.active
  };

  Avatar.update(dataSchema, function(err, data) {
    if (err) return JsonError(res, err.status, err.message, err);

    if (data && data.id) return Success(res, `The avatar with ID ${data.id} was updated`);

    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Avatar.delete(id, (err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    if (data && data.id) return Success(res, `The avatar with ID ${data.id} was deleted`);

    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

module.exports = router;
