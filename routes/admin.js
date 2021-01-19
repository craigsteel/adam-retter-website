const path = require('path');

const express = require('express');

const presentationsController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/admin/add-content', presentationsController.getAddPresentation);

router.get('/admin/add-content');

// /admin/add-product => POST
router.post('/admin/add-content', presentationsController.postAddPresentation);

module.exports = router;
