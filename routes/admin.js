const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/admin/add-content', adminController.getAddPresentation);

router.get('/admin/presentations', adminController.getAddPresentations);

// /admin/add-product => POST
router.post('/admin/add-content', adminController.postAddPresentation);

module.exports = router;
