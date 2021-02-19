const path = require('path');

const express = require('express');

const presentationController = require('../controllers/admin/presentations');
const sourceController = require('../controllers/admin/sources');

const router = express.Router();

router.get('/edit-presentations', presentationController.getAddPresentation);
router.post('/add-presentations', presentationController.postAddPresentation);

router.get('/all-presentations', presentationController.getAllPresentations);

router.get('/edit-presentations/:presentationId', presentationController.getEditPresentation);
router.post('/edit-presentations', presentationController.postEditPresentation);

router.post('/all-presentations', presentationController.postDeletePresentation);


router.get('/edit-opensource', sourceController.getAddSource);
router.post('/add-opensource', sourceController.postAddSource);

router.get('/all-opensource', sourceController.getAllSources);

router.get('/edit-opensource/:sourceId', sourceController.getEditSource);
router.post('/edit-opensource', sourceController.postEditSource);

router.post('/all-opensource', sourceController.postDeleteSource);

module.exports = router;
