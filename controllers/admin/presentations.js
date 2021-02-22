const Presentation = require('../../models/presentations');

exports.getAddPresentation = (req, res, next) => {
  res.render('admin/edit-presentations', {
    pageTitle: 'Add Presentation',
    path: '/admin/add-presentations',
    editing: false,
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
  const presentation = new Presentation({
    title: title,
    description: description,
    firstIcon: firstIcon,
    firstLink: firstLink,
    firstLinkText: firstLinkText,
    secondIcon: secondIcon,
    secondLink: secondLink,
    secondLinkText: secondLinkText,
    thirdIcon: thirdIcon,
    thirdLink: thirdLink,
    thirdLinkText: thirdLinkText,
    userId: req.user
  });
  presentation
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Presentation');
      res.redirect('/admin/all-presentations');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditPresentation = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const presId = req.params.presentationId;
  Presentation.findById(presId)
    .then(presentation => {
      if(!presentation) {
        return res.redirect('/');
    }
    res.render('admin/edit-presentations', {
      pageTitle: 'Edit Presentation',
      path: '/admin/edit-presentations',
      editing: editMode,
      presentation: presentation,
      isAuthenticated: req.session.isLoggedIn
    });
  })
  .catch(err => console.log(err));
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
  const updatedThirdIcon = req.body.thirdIcon;
  const updatedThirdLink = req.body.thirdLink;
  const updatedThirdLinkText = req.body.thirdLinkText;

  Presentation.findById(presId)
  .then(presentation => {
    presentation.title = updatedTitle;
    presentation.description = updatedDescription;
    presentation.firstIcon = updatedFirstIcon;
    presentation.firstLink = updatedFirstLink;
    presentation.firstLinkText =updatedFirstLinkText;
    presentation.secondIcon = updatedSecondIcon;
    presentation.secondLink = updatedSecondLink;
    presentation.secondLinkText = updatedSecondLinkText;
    presentation.thirdIcon = updatedThirdIcon;
    presentation.thirdLink = updatedThirdLink;
    presentation.thirdLinkText = updatedThirdLinkText;
    return presentation.save();
  })
  .then(result => {
    console.log('UPDATED PRESENTATIONS!');
    res.redirect('/admin/all-presentations');
  })
  .catch(err => console.log(err));
};

exports.getAllPresentations = (req, res, next) => {
  Presentation.find()
    // .select('title price -_id')
    // .populate('userId', 'name')
  .then(presentations => {
    console.log(presentations);
    res.render('admin/all-presentations', {
      pres: presentations,
      pageTitle: 'Admin All presentations',
      path: '/admin/all-presentations',
      isAuthenticated: req.session.isLoggedIn
    });
  })
  .catch(err => console.log(err));
};

exports.postDeletePresentation = (req, res, next) => {
  const presId = req.body.presentationId;
  Presentation.findByIdAndRemove(presId)
    .then(() => {
      console.log('DESTROYED PRESENTATION');
      res.redirect('/admin/all-presentations');
    })
    .catch(err => console.log(err));
};
