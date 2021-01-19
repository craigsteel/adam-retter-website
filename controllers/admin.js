const Presentation = require('../models/presentation');

exports.getAddPresentation = (req, res, next) => {
  res.render('admin/add-content', {
    pageTitle: 'Add content',
    path: '/admin/add-content',
    formsCSS: true,
    contentCSS: true,
    activeAddPresentation: true
  });
};

exports.postAddPresentation = (req, res, next) => {
  const presentation = new Presentation(req.body.title);
  presentation.save();
  res.redirect('/presentations');
};

