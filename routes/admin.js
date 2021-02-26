const path = require('path');

const express = require('express');

const presentationController = require('../controllers/admin/presentations');
const sourceController = require('../controllers/admin/sources');
const softwareController = require('../controllers/admin/software');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// All Presentations
router.get('/edit-presentations', isAuth, presentationController.getAddPresentation);
router.post('/add-presentations', isAuth, presentationController.postAddPresentation);
router.get('/all-presentations', isAuth, presentationController.getAllPresentations);
router.get('/edit-presentation/:presentationId', isAuth, presentationController.getEditPresentation);
router.post('/edit-presentations', isAuth, presentationController.postEditPresentation);
router.post('/delete-presentation', isAuth, presentationController.postDeletePresentation);

// All Opensource
router.get('/edit-opensource', isAuth, sourceController.getAddSource);
router.post('/add-opensource', isAuth, sourceController.postAddSource);
router.get('/all-opensource', isAuth, sourceController.getAllSources);
router.get('/edit-opensource/:sourceId', isAuth, sourceController.getEditSource);
router.post('/edit-opensource', isAuth, sourceController.postEditSource);
router.post('/delete-opensource', isAuth, sourceController.postDeleteSource);

// All Software
router.get('/edit-software', isAuth, softwareController.getAddSoftware);
router.post('/add-software', isAuth, softwareController.postAddSoftware);
router.get('/all-software', isAuth, softwareController.getAllSoftwares);
router.get('/edit-software/:softwareId', isAuth, softwareController.getEditSoftware);
router.post('/edit-software', isAuth, softwareController.postEditSoftware);
router.post('/delete-software', isAuth, softwareController.postDeleteSoftware);


module.exports = router;
