const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// All paths start with '/api/items'

// GET /api/menus/get (get all user menus)
router.get('/get', itemsCtrl.getItems);

// GET /api/items/:id (item detail)
router.get('/:id', itemsCtrl.show)

// POST /api/items/create (create a new menu)
router.post('/create', itemsCtrl.create);

// PUT /api/items/update (update user with business)
router.put('/:id/update', itemsCtrl.update)



module.exports = router;
