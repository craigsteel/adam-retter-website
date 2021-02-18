const Source = require('../../models/source');

exports.getAddSource = (req, res, next) => {
  res.render('admin/edit-opensource', {
    pageTitle: 'Add Open Source Repository',
    path: '/admin/add-opensource',
    editing: false
  });
};

exports.postAddSource = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const gitHubLink = req.body.gitHubLink;
  const gitHubIcon = req.body.gitHubIcon;
  const gitHubLinkText = req.body.gitHubLinkText;
  const source = new Source({
    title: title,
    description: description,
    gitHubLink: gitHubLink,
    gitHubIcon: gitHubIcon,
    gitHubLinkText: gitHubLinkText,
    userId: req.user
  });
  source
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Repository');
      res.redirect('/admin/all-opensource');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditSource = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const sourceId = req.params.sourceId;
  Source.findById(sourceId)
    .then (source => {
    if(!source) {
      return res.redirect('/');
    }
    res.render('admin/edit-opensource', {
      pageTitle: 'Edit Open Source Repository',
      path: '/admin/edit-opensource',
      editing: editMode,
      source: source
    });
  })
  .catch(err => console.log(err));
};

exports.postEditSource = (req, res, next) => {
  const sourceId = req.body.sourceId;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedGitHubIcon = req.body.gitHubIcon;
  const updatedGitHubLink = req.body.gitHubLink;
  const updatedGitHubLinkText = req.body.gitHubLinkText;

  Source.findById(sourceId)
    .then(source => {
      source.title = updatedTitle;
      source.description = updatedDescription;
      source.gitHubIcon = updatedGitHubIcon;
      source.gitHubLink = updatedGitHubLink;
      source.gitHubLinkText = updatedGitHubLinkText;
      return source.save();
    })
    .then(result => {
      console.log('UPDATED Repository!');
      res.redirect('/admin/all-opensource');
    })
    .catch(err => console.log(err));
};

exports.getAllSources = (req, res, next) => {
  Source.find()
    // .select('title price -_id')
    // .populate('userId', 'name')
  .then(sources => {
    console.log(sources);
    res.render('admin/all-opensource', {
      sours: sources,
      pageTitle: 'Admin All Open Source Repositories',
      path: '/admin/all-opensource',
    });
  })
  .catch(err => console.log(err));
};

exports.postDeleteSource = (req, res, next) => {
  const sourceId = req.body.sourceId;
  Source.findByIdAndRemove(sourceId)
  .then(() => {
      console.log('DESTROYED REPOSITORY');
      res.redirect('/admin/all-opensource');
    })
    .catch(err => console.log(err));
};
