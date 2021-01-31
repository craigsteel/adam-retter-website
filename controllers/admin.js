const Presentation = require('../models/presentation');

exports.getAddPresentation = (req, res, next) => {
  res.render('admin/add-content', {
    pageTitle: 'Add presentation',
    path: '/admin/add-content',
    formsCSS: true,
    contentCSS: true,
    activeAddPresentation: true
  });
};

exports.getAddPresentations = (req, res, next) => {
  res.render('admin/presentations', {
    pageTitle: 'Presentations',
    path: '/admin/presentations',
    formsCSS: true,
    contentCSS: true,
    activeAddPresentation: true
  });
};

exports.postAddPresentation = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const firstIcon = req.body.firstIcon;
  const firstLink = req.body.firstLink;
  const secondIcon = req.body.secondIcon;
  const secondLink = req.body.secondLink;
  const thirdIcon = req.body.thirdIcon;
  const thirdLink = req.body.thirdLink;
  const presentation = new Presentation(
    title,
    description,
    firstIcon,
    firstLink,
    secondIcon,
    secondLink,
    thirdIcon,
    thirdLink
  );
  presentation.save();
  res.redirect('admin/presentations');
};
