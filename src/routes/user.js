const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', (req, res) => {
  User.getUsers((err, data) => {
    res.status(200).json(data);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.getUserById(id, (err, data) => {
    res.status(200).json(data);
  });
});

router.post('/', (req, res) => {
  const userData = {
    id: null,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    created_at: null,
    updated_at: null
  };
  User.insertUser(userData, (err, data) => {
    if (data && data.insertId) {
      res.status(200).json({
        success: true,
        msg: 'Inserted a new user',
        data: data
      });
      // res.redirect('/users/' + data.insertId);
    } else {
      res.status(500).json({
        success: false,
        msg: 'Error'
      });
    }
  });
});

router.put('/:id', (req, res) => {
  const userData = {
    id: req.params.id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    created_at: null,
    updated_at: null
  };
  User.updateUser(userData, function(err, data) {
    if (data && data.msg) {
      res.status(200).json({ data });
    } else {
      res.status(500).json({
        success: false,
        msg: 'Error'
      });
    }
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  User.deleteUser(id, (err, data) => {
    if ((data && data.msg === 'deleted') || data.msg == 'not Exists') {
      res.json({
        success: 'true',
        data
      });
    } else {
      res.status(500).json({
        msg: 'Error'
      });
    }
  });
});

module.exports = router;
