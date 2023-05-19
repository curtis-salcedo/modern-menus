const express = require('express');
const router = express.Router();
const menusCtrl = require('../../controllers/api/menus');

// All paths start with '/api/menus'

// GET /api/menus/displayMenu (view current menu)
// router.get('/display', menusCtrl.displayMenu);

// GET /api/menus/user (all menus for given user)
// router.get('/user', menusCtrl.forUser);

// POST /api/menus/create (create a new menu)
// router.post('/create', menusCtrl.create);

// POST /api/menus/item/:id (add item to display)
// router.post('/cart/items/:id', menusCtrl.addToDsiplay);

// POST /api/menus/publish (publish/refresh main display)
// router.post('/cart/publish', menusCtrl.publish);

module.exports = router;