const path = require('path');

const express = require('express');

const pagesController = require('../controllers/pages');
// const opensourceController = require('../controllers/opensource');
// const publicationsController = require('../controllers/publications');
// const contactController = require('../controllers/contact');
// const softwareController = require('../controllers/software');

const router = express.Router();

router.get('/', (reg,res, next) => {
  res.render('index', {
    pageTitle: 'Adam Retter',
  });
});

router.get('/presentations', pagesController.getPresentations);
router.get('/opensource', pagesController.getOpensource);
router.get('/publications', pagesController.getPublications);
router.get('/contact', pagesController.getContact);
router.get('/software', pagesController.getSoftware);

module.exports = router;
