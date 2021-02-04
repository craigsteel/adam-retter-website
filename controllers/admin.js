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
  const secondIcon = req.body.secondIcon;
  const secondLink = req.body.secondLink;
  const thirdIcon = req.body.thirdIcon;
  const thirdLink = req.body.thirdLink;
  const presentation = new Presentation(
    null,
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
  const updatedSecondIcon = req.body.secondIcon;
  const updatedSecondLink = req.body.secondLink;
  const updatedThirdIcon = req.body.thirdIcon;
  const updatedThirdLink = req.body.thirdLink;
  const updatedPresentation = new Presentation(
    presId,
    updatedTitle,
    updatedDescription,
    updatedFirstIcon,
    updatedFirstLink,
    updatedSecondIcon,
    updatedSecondLink,
    updatedThirdIcon,
    updatedThirdLink
  );
  updatedPresentation.save();
  res.redirect('/admin/all-content');
};

exports.getAllcontent = (req, res, next) => {
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
