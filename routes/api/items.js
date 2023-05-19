const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// All paths start with '/api/items'

// GET /api/items/:id (display item)
// router.get('/:id', itemsCtrl.show);

// POST /api/items/create (create a new item)
// router.post('/create', itemsCtrl.create);

module.exports = router;