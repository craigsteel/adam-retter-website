const path = require('path');

const express = require('express');

const presentationController = require('../controllers/admin/presentations');
// const sourceController = require('../controllers/admin/sources');

const router = express.Router();

router.get('/add-presentations', presentationController.getAddPresentation);
// router.get('/add-opensource', sourceController.getAddSource);

// router.get('/all-presentations', presentationController.getAllPresentations);
// router.get('/all-opensource', sourceController.getAllSources);

router.post('/add-presentations', presentationController.postAddPresentation);
// router.post('/add-opensource', sourceController.postAddSource);

router.get('/edit-presentations/:presentationId', presentationController.getEditPresentation);
// router.get('/edit-opensource/:sourceId', sourceController.getEditSource);

// router.post('/edit-presentations', presentationController.postEditPresentation);
// router.post('/edit-opensource', sourceController.postEditSource);

// router.post('/delete-presentations', presentationController.postDeletePresentation);
// router.post('/delete-opensource', sourceController.postDeleteSource);

module.exports = router;
