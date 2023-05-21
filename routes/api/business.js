const express = require('express');
const router = express.Router();
const businessCtrl = require('../../controllers/api/business');

// All paths start with '/api/business'

// POST /api/business/create (create a new item)
router.post('/create', businessCtrl.createBusiness);

// GET /api/business/getBusiness (get business for specific user)
router.get('/', businessCtrl.getBusiness)

// GET /api/business/getBusiness (get business for specific user)
router.get('/index', businessCtrl.index)

module.exports = router;