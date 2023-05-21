const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// All paths start with '/api/items'

router.post('/create', itemsCtrl.create)

module.exports = router;
