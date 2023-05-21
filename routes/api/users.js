const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// All paths start with '/api/users'

// POST /api/users (create a user & sign up)
router.post('/', usersCtrl.create);

// POST /api/users/login (login with email & password)
router.post('/login', usersCtrl.login);

// PUT /api/users/update (update user with business)
router.put('/update', usersCtrl.update)

module.exports = router;