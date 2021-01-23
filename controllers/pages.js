exports.getOpensource = (req, res, next) => {
  res.render('opensource', {
    pageTitle: 'Adam Retter Open Source',
    path: '/opensource',
  });
};

exports.getContact = (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Adam Retter Contacts',
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

const Presentation = require('../models/presentation');

exports.getPresentations = (req, res, next) => {
  Presentation.fetchAll(presentations => {
    res.render('presentations', {
      prods: presentations,
      pageTitle: 'Adam Retter Presentations',
      path: '/presentations',
    });
  });
};

