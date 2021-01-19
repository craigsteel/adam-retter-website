const path = require('path');

const express = require('express');

const presentationsController = require('../controllers/presentations');
const opensourceController = require('../controllers/opensource');
const publicationsController = require('../controllers/publications');
const contactController = require('../controllers/contact');
const softwareController = require('../controllers/software');

const router = express.Router();

router.get('/', (reg,res, next) => {
  res.render('index', {
    pageTitle: 'Adam Retter',
  });
});

router.get('/presentations', presentationsController.getPresentations);
router.get('/opensource', opensourceController.getOpensource);
router.get('/publications', publicationsController.getPublications);
router.get('/contact', contactController.getContact);
router.get('/software', softwareController.getSoftware);

module.exports = router;
