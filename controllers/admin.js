const Presentation = require('../models/presentation');

exports.getAddPresentation = (req, res, next) => {
  res.render('admin/edit-content', {
    pageTitle: 'Add Content',
    path: '/admin/add-content',
    editing: false
  });
};

exports.postAddPresentation = (req, res, next) => {
  const presId = reg.body.presID;
  const title = req.body.title;
  const description = req.body.description;
  const firstIcon = req.body.firstIcon;
  const firstLink = req.body.firstLink;
  const secondIcon = req.body.secondIcon;
  const secondLink = req.body.secondLink;
  const thirdIcon = req.body.thirdIcon;
  const thirdLink = req.body.thirdLink;
  const presentation = new Presentation(
    presId,
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

exports.getAllcontent = (req, res, next) => {
  Presentation.fetchAll(presentations => {
    res.render('admin/all-content', {
      prods: presentations,
      pageTitle: 'Admin All Content',
      path: '/admin/all-content',
    });
  });
};

exports.getEditPresentation = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const presId = req.param.presentId;
  Presentation.findById,(presId, presentation => {
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
