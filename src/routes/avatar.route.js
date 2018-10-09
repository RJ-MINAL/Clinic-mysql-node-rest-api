const express = require('express');
const router = express.Router();
const Avatar = require('../models/avatar.model');
const { JsonError, JsonSuccess } = require('../models/response.model');

router.get('/', (req, res) => {
  Avatar.getAvatar((err, data) => {
    res.status(200).json(data);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Avatar.getAvatarById(id, (err, data) => {
    res.status(200).json(data);
  });
});

router.post('/', (req, res) => {
  if (!req.body.requestContent || !req.body.requestContent.avatar)
    return JsonError(res, 400, 'requestContent.avatar is missing in the request body');

  const avatarData = {
    id: null,
    code_image: req.body.requestContent.avatar.code_image,
    skin_color: req.body.requestContent.avatar.skin_color,
    cloth_color: req.body.requestContent.avatar.cloth_color,
    hair_color: req.body.requestContent.avatar.hair_color,
    active: 1
  };

  Avatar.insertAvatar(avatarData, (err, data) => {
    if (data && data.id)
      return JsonSuccess(res, 'avatar', data, 'Avatar creado exitosamente');

    // res.redirect('/users/' + data.insertId);
    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

router.put('/:id', (req, res) => {
  const avatarData = {
    id: req.params.id,
    code_image: req.body.code_image,
    skin_color: req.body.skin_color,
    cloth_color: req.body.cloth_color,
    hair_color: req.body.hair_color,
    active: req.body.active
  };

  Avatar.updateAvatar(avatarData, function(err, data) {
    if (data && data.id)
      return JsonSuccess(res, 'avatar', data, `Avatar with ID ${data.id} was updated`);

    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

// router.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   Avatar.deleteUser(id, (err, data) => {
//     if ((data && data.msg === 'deleted') || data.msg == 'not Exists') {
//       res.json({
//         success: 'true',
//         data
//       });
//     } else {
//       res.status(500).json({
//         msg: 'Error'
//       });
//     }
//   });
// });

module.exports = router;
