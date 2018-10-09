const express = require('express');
const router = express.Router();
const Avatar = require('../models/avatar.model');
const { JsonError, InsertSuccess } = require('../models/response.model');

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
    if (data && data.id) return InsertSuccess(res, 'avatar', data);

    // res.redirect('/users/' + data.insertId);
    return JsonError(res, 500, 'Internal Error, no data returned');
  });
});

// router.put('/:id', (req, res) => {
//   const userData = {
//     id: req.params.id,
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//     created_at: null,
//     updated_at: null
//   };
//   Avatar.updateUser(userData, function(err, data) {
//     if (data && data.msg) {
//       res.status(200).json({ data });
//     } else {
//       res.status(500).json({
//         success: false,
//         msg: 'Error'
//       });
//     }
//   });
// });

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
