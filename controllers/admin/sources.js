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
  const source = new Source(
    null,
    title,
    description,
    gitHubLink,
    gitHubIcon,
    gitHubLinkText
    );
  source.save();
  res.redirect('/admin/all-opensource');
};

exports.getEditSource = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const sourceId = req.params.sourceId;
  Source.findById(sourceId, source => {
    if(!source) {
      return res.redirect('/');
    }
    res.render('admin/edit-opensource', {
      pageTitle: 'Edit Open Source Repository',
      path: '/admin/edit-opensource',
      editing: editMode,
      source: source
    });
  });
};

exports.postEditSource = (req, res, next) => {
  const sourceId = req.body.sourceId;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedGitHubIcon = req.body.gitHubIcon;
  const updatedGitHubLink = req.body.gitHubLink;
  const updatedGitHubLinkText = req.body.gitHubLinkText;
  const updatedSource = new Source(
    sourceId,
    updatedTitle,
    updatedDescription,
    updatedGitHubIcon,
    updatedGitHubLink,
    updatedGitHubLinkText
  );
  updatedSource.save();
  res.redirect('/admin/all-opensource');
};

exports.getAllSources = (req, res, next) => {
  Source.fetchAll(sources => {
    res.render('admin/all-opensource', {
      sources: sources,
      pageTitle: 'Admin All Open Source Repositories',
      path: '/admin/all-opensource',
    });
  });
};

exports.postDeleteSource = (req, res, next) => {
  const sourcesId = req.body.sourceId;
  Source.deleteById(sourcesId);
  res.redirect('/admin/all-opensource');
};
