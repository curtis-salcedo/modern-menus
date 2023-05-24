const express = require('express');
const router = express.Router();
const displaysCtrl = require('../../controllers/api/displays');

// All paths start with '/api/displays'

// GET /api/displays/get (get the user template)
router.get('/get', displaysCtrl.getTemplate);

// POST /api/displays/create (create a new displays)
router.post('/create', displaysCtrl.createTemplate);

// PUT /api/items/update (update user with business)
router.put('/:id/update', displaysCtrl.updateTemplate)


module.exports = router;