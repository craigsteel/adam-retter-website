const Presentation = require('../models/presentation');

exports.getAddPresentation = (req, res, next) => {
  res.render('admin/edit-content', {
    pageTitle: 'Add Content',
    path: '/admin/add-content',
    editing: false
  });
};

exports.postAddPresentation = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const firstIcon = req.body.firstIcon;
  const firstLink = req.body.firstLink;
  const firstLinkText = req.body.firstLinkText;
  const secondIcon = req.body.secondIcon;
  const secondLink = req.body.secondLink;
  const secondLinkText = req.body.secondLinkText;
  const thirdIcon = req.body.thirdIcon;
  const thirdLink = req.body.thirdLink;
  const thirdLinkText = req.body.firstLinkText;
  const presentation = new Presentation(null, title, description, firstIcon, firstLink, firstLinkText, secondIcon, secondLink, secondLinkText, thirdIcon, thirdLink, thirdLinkText);
  presentation.save();
  res.redirect('/admin/all-content');
};

exports.getEditPresentation = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const presId = req.params.presentationId;
  Presentation.findById(presId, presentation => {
    if(!presentation) {
      return res.redirect('/');
    }
    res.render('admin/edit-content', {
      pageTitle: 'Edit Presentation',
      path: '/admin/edit-content',
      editing: editMode,
      presentation: presentation
    });
  });
};

exports.postEditPresentation = (req, res, next) => {
  const presId = req.body.presentationId;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedFirstIcon = req.body.firstIcon;
  const updatedFirstLink = req.body.firstLink;
  const updatedFirstLinkText = req.body.firstLinkText;
  const updatedSecondIcon = req.body.secondIcon;
  const updatedSecondLink = req.body.secondLink;
  const updatedSecondLinkText = req.body.secondLinkText;
  const updatedThirdIcon = req.body.secondIcon;
  const updatedThirdLink = req.body.thirdLink;
  const updatedThirdLinkText = req.body.firstLinkText;
  const updatedPresentation = new Presentation(
    presId,
    updatedTitle,
    updatedDescription,
    updatedFirstIcon,
    updatedFirstLink,
    updatedFirstLinkText,
    updatedSecondIcon,
    updatedSecondLink,
    updatedSecondLinkText,
    updatedThirdIcon,
    updatedThirdLink,
    updatedThirdLinkText
  );
  updatedPresentation.save();
  res.redirect('/admin/all-content');
};

exports.getAllPresentations = (req, res, next) => {
  Presentation.fetchAll(presentations => {
    res.render('admin/all-content', {
      prods: presentations,
      pageTitle: 'Admin All Content',
      path: '/admin/all-content',
    });
  });
};

exports.postDeletePresentation = (req, res, next) => {
  const presId = req.body.presentationId;
  Presentation.deleteById(presId);
  res.redirect('/admin/all-content');
};
