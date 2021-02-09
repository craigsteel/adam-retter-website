const Presentation = require('../models/presentations.min');
const Sources = require('../models/presentations.min');

exports.getHome = (req, res, next) => {
  res.render('home', {
    pageTitle: 'Adam Retter Home',
    path: '/'
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


