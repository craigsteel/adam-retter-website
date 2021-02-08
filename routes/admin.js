const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-content', adminController.getAddContent);

router.get('/all-content', adminController.getAllContents);

router.post('/add-content', adminController.postAddContent);

router.get('/edit-content/:contentId', adminController.getEditContent);

router.post('/edit-content', adminController.postEditContent);

router.post('/delete-content', adminController.postDeleteContent);

module.exports = router;
