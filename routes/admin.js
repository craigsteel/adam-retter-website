const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-content', adminController.getAddPresentation);

router.get('/all-content', adminController.getAllcontent);

router.post('/add-content', adminController.postAddPresentation);

router.get('/edit-content/:presId', adminController.getEditPresentation);

module.exports = router;
