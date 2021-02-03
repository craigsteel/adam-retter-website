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
  res.redirect('/presentations');
};

exports.getEditPresentation = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const contentId = req.param.presentId;
  Presentation.findById,(contentId, presentation => {
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
  const contentId = req.body.contentId;
  const updateTitle = req.body.title;
  const updateDescription = req.body.description;
  const updateFirstIcon = req.body.firstIcon;
  const updateFirstLink = req.body.firstLink;
  const updateSecondIcon = req.body.secondIcon;
  const updateSecondLink = req.body.secondLink;
  const updateThirdIcon = req.body.thirdIcon;
  const updateThirdLink = req.body.thirdLink;
  const updatePresentation = new Presentation(
    contentId,
    updateTitle,
    updateDescription,
    updateFirstIcon,
    updateFirstLink,
    updateSecondIcon,
    updateSecondLink,
    updateThirdIcon,
    updateThirdLink
  );
  updatePresentation.save();
  res.redirect('/presentations');
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
