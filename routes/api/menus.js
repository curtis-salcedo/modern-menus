const express = require('express');
const router = express.Router();
const menusCtrl = require('../../controllers/api/menus');

// All paths start with '/api/menus'

// All menus route
router.get('/index', menusCtrl.index);

// GET /api/menus/get (get all user menus)
router.get('/get', menusCtrl.getMenus);

// POST /api/menus/create (create a new menu)
router.post('/create', menusCtrl.create);

// PUT /api/menus/update (update user with business)
router.put('/update', menusCtrl.update)

module.exports = router;