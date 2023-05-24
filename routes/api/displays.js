const express = require('express');
const router = express.Router();
const displaysCtrl = require('../../controllers/api/displays');

// All paths start with '/api/displays'

// POST /api/displays/create (create a new displays)
router.post('/create', displaysCtrl.createTemplate);


module.exports = router;
