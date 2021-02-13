const Presentation = require('../../models/presentations');

exports.getAddPresentation = (req, res, next) => {
  res.render('admin/edit-presentations', {
    pageTitle: 'Add Presentation',
    path: '/admin/add-presentations',
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
  const presentation = new Presentation(
    null,
    title,
    description,
    firstIcon,
    firstLink,
    firstLinkText,
    secondIcon,
    secondLink,
    secondLinkText,
    thirdIcon,
    thirdLink,
    thirdLinkText
    );
  presentation.save();
  res.redirect('/admin/all-presentations');
};

exports.getEditPresentation = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const presentationId = req.params.presentationId;
  Presentation.findById(presentationId, presentation => {
    if(!presentation) {
      return res.redirect('/');
    }
    res.render('admin/edit-presentations', {
      pageTitle: 'Edit Presentation',
      path: '/admin/edit-presentations',
      editing: editMode,
      presentation: presentation
    });
  });
};

exports.postEditPresentation = (req, res, next) => {
  const presentationId = req.body.presentationId;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedFirstIcon = req.body.firstIcon;
  const updatedFirstLink = req.body.firstLink;
  const updatedFirstLinkText = req.body.firstLinkText;
  const updatedSecondIcon = req.body.secondIcon;
  const updatedSecondLink = req.body.secondLink;
  const updatedSecondLinkText = req.body.secondLinkText;
  const updatedThirdIcon = req.body.thirdIcon;
  const updatedThirdLink = req.body.thirdLink;
  const updatedThirdLinkText = req.body.thirdLinkText;
  const updatedPresentation = new Presentation(
    presentationId,
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
  res.redirect('/admin/all-presentations');
};

exports.getAllPresentations = (req, res, next) => {
  Presentation.fetchAll(presentations => {
    res.render('admin/all-presentations', {
      presentations: presentations,
      pageTitle: 'Admin All presentations',
      path: '/admin/all-presentations',
    });
  });
};

exports.postDeletePresentation = (req, res, next) => {
  const presentationId = req.body.presentationId;
  Presentation.deleteById(presentationId);
  res.redirect('/admin/all-presentations');
};
