const Presentation = require('../models/presentations');
const Sources = require('../models/source');

exports.getHome = (req, res, next) => {
  res.render('home', {
    pageTitle: 'Adam Retter Home',
    path: '/'
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
  res.render('software', {
    pageTitle: 'Adam Retter Software',
    path: '/software',
  });
};

exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found'
  });
};

exports.getPresentations = (req, res, next) => {
  Presentation.fetchAll(presentations => {
    res.render('presentations', {
      presentations: presentations,
      pageTitle: 'Adam Retter Presentations',
      path: '/presentations',
    });
  });
};

exports.getOpensource = (req, res, next) => {
  Sources.fetchAll(sources => {
    res.render('opensource', {
      sources: sources,
      pageTitle: 'Adam Retter Open Source',
      path: '/opensource',
    });
  });
};


