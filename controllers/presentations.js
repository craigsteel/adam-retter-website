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

