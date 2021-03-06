const Presentations = require('../models/presentations');
const Sources = require('../models/source');
const Software = require('../models/software');

exports.getHome = (req, res, next) => {
  res.render('index', {
    pageTitle: 'Adam Retter Home',
    path: '/',
  });
};

exports.getContact = (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Adam Retter Contact',
    path: '/contact',
  });
};

exports.getPublications = (req, res, next) => {
  res.render('publications', {
    pageTitle: 'Adam Retter Publications',
    path: '/publications',
  });
};

exports.getSoftware = (req, res, next) => {
  Software.find()
    .then(softwares => {
      console.log(softwares);
      res.render('software', {
        soft: softwares,
        pageTitle: 'Adam Retter Software',
        path: '/software',
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getPresentations = (req, res, next) => {
  Presentations.find()
    .then(presentations => {
      console.log(presentations);
      res.render('presentations', {
        pres: presentations,
        pageTitle: 'Adam Retter Presentations',
        path: '/presentations',
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getOpensource = (req, res, next) => {
  Sources.find()
    .then(sources => {
      console.log(sources);
      res.render('opensource', {
      sourc: sources,
      pageTitle: 'Adam Retter Open Source',
      path: '/opensource',
      });
    })
    .catch(err => {
      console.log(err);
    });
};


