const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-content', adminController.getAddPresentation);

router.post('/add-content', adminController.postAddPresentation);

router.get('/edit-content/:presentationId', adminController.getEditPresentation);

router.post('/edit-content', adminController.postEditPresentation);

router.get('/all-content', adminController.getAllPresentations);

router.post('/delete-content', adminController.postDeletePresentation);

module.exports = router;
