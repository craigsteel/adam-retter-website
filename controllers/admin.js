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

// exports.getAddPresentation = (req, res, next) => {
//   res.render('admin/presentations', {
//     pageTitle: 'Presentations',
//     path: '/admin/presentations',
//     formsCSS: true,
//     contentCSS: true,
//     activeAddPresentation: true
//   });
// };

exports.postAddPresentation = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const pdfIcon = req.body.pdfIcon;
  const pdfLink = req.body.pdfLink;
  const slidesIcon = req.body.slidesIcon;
  const slidesLink = req.body.slidesLink;
  const presentation = new Presentation(
    title,
    description,
    pdfIcon,
    pdfLink,
    slidesIcon,
    slidesLink
  );
  presentation.save();
  res.redirect('/presentations');
};
