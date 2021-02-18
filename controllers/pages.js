const Presentations = require('../models/presentations');
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


