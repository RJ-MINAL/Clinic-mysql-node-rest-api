const express = require('express');
const router = express.Router();
const { Profile, validateRequest } = require('../models/profile.model');
const { JsonError, JsonSuccess } = require('../models/response.model');

router.post('/', (req, res) => {
  const { error } = validateRequest(req.body);
  if (error) return JsonError(res, 400, error.details[0].message);

  const { user_name, password } = req.body.requestContent;
  Profile.getProfile(user_name, password, (err, data) => {
    if (err) return JsonError(res, err.status, err.message, err);

    return JsonSuccess(res, 'profile', data);
  });
});

module.exports = router;
