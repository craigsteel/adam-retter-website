const Content = require('../models/content');

exports.getAddContent = (req, res, next) => {
  res.render('admin/edit-content', {
    pageTitle: 'Add Content',
    path: '/admin/add-content',
    editing: false
  });
};

exports.postAddContent = (req, res, next) => {
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
  const sourceTitle = req.body.sourceTitle;
  const sourceDescription = req.body.sourceDescription;
  const githubLinkText = req.body.githubLinkText;
  const gitHubIcon = req.body.gitHubIcon;
  const content = new Content(null, title, description, firstIcon, firstLink, firstLinkText, secondIcon, secondLink, secondLinkText, thirdIcon, thirdLink, thirdLinkText,
  sourceTitle, sourceDescription, githubLinkText, gitHubIcon);
  content.save();
  res.redirect('/admin/all-content');
};

exports.getEditContent = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const contId = req.params.contentId;
  Content.findById(contId, content => {
    if(!content) {
      return res.redirect('/');
    }
    res.render('admin/edit-content', {
      pageTitle: 'Edit Presentation',
      path: '/admin/edit-content',
      editing: editMode,
      content: content
    });
  });
};

exports.postEditContent = (req, res, next) => {
  const contId = req.body.contentId;
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
  const updatedsourceTitle = req.body.sourceTitle;
  const updatedsourceDescription = req.body.sourceDescription;
  const updatedgithubLinkText = req.body.githubLinkText;
  const updatedgitHubIcon = req.body.gitHubIcon;
  const updatedContent = new Content(
    contId,
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
    updatedThirdLinkText,
    updatedsourceTitle,
    updatedsourceDescription,
    updatedgitHubIcon,
    updatedgithubLinkText
  );
  updatedContent.save();
  res.redirect('/admin/all-content');
};

exports.getAllContents = (req, res, next) => {
  Content.fetchAll(contents => {
    res.render('admin/all-content', {
      conts: contents,
      pageTitle: 'Admin All Content',
      path: '/admin/all-content',
    });
  });
};

exports.postDeleteContent = (req, res, next) => {
  const contsId = req.body.contentId;
  Content.deleteById(contsId);
  res.redirect('/admin/all-content');
};
