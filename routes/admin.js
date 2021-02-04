const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-content', adminController.getAddPresentation);

router.post('/add-content', adminController.postAddPresentation);

router.get('/all-content', adminController.getAllcontent);

router.get('/edit-content/:presentationId', adminController.getEditPresentation);

router.post('/edit-content', adminController.postEditPresentation);

router.post('/delete-content', adminController.postDeletePresentation);

module.exports = router;
