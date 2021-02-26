const Software = require('../../models/software');

exports.getAddSoftware = (req, res, next) => {
  res.render('admin/edit-software', {
    pageTitle: 'All Software',
    path: '/admin/add-software',
    editing: false,
  });
};

exports.postAddSoftware = (req, res, next) => {
  //Software Purchased
  const softwareLogo = req.body.softwareLogo;
  const title = req.body.title;
  const description = req.body.description;
  const softwareLink = req.body.softwareLink;
  const softwareLinkText = req.body.softwareLinkText;
  const software = new Software({
    //Software Purchased
    softwareLogo: softwareLogo,
    title: title,
    description: description,
    softwareLink: softwareLink,
    softwareLinkText: softwareLinkText,
    userId: req.user
  });
  software
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Used Software');
      res.redirect('/admin/all-software');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditSoftware = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const softwareId = req.params.softwareId;
  Software.findById(softwareId)
    .then (software => {
    if(!software) {
      return res.redirect('/');
    }
    res.render('admin/edit-software', {
      pageTitle: 'Edit Software',
      path: '/admin/edit-software',
      editing: editMode,
      software: software,
    });
  })
  .catch(err => console.log(err));
};

exports.postEditSoftware = (req, res, next) => {
  //Software Purchased
  const softwareId = req.body.softwareId;
  const updatedSoftwareLogo = req.body.softwareLogo;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedSoftwareLink = req.body.softwareLink;
  const updatedSoftwareLinkText = req.body.softwareLinkText;
  Software.findById(softwareId)
    .then(software => {
      software.softwareLogo = updatedSoftwareLogo;
      software.title = updatedTitle;
      software.description = updatedDescription;
      software.softwareLink = updatedSoftwareLink;
      software.softwareLinkText = updatedSoftwareLinkText;
      return software.save();
    })
    .then(result => {
      console.log('UPDATED SOFTWARE!');
      res.redirect('/admin/all-software');
    })
    .catch(err => console.log(err));
};

exports.getAllSoftwares = (req, res, next) => {
  Software.find()

  .then(softwares => {
    console.log(softwares);
    res.render('admin/all-software', {
      soft: softwares,
      pageTitle: 'Admin All Software Used',
      path: '/admin/all-software',
    });
  })
  .catch(err => console.log(err));
};

exports.postDeleteSoftware = (req, res, next) => {
  const softwareId = req.body.softwareId;
  Software.findByIdAndRemove(softwareId)
  .then(() => {
      console.log('DESTROYED SOFTWARE');
      res.redirect('/admin/all-software');
    })
    .catch(err => console.log(err));
};
