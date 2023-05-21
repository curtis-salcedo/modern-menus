const express = require('express');
const router = express.Router();
const menusCtrl = require('../../controllers/api/menus');

// All paths start with '/api/menus'

// All menus route
router.get('/', menusCtrl.index);

// POST /api/menus/create (create a new menu)
router.post('/create', menusCtrl.create);

module.exports = router;