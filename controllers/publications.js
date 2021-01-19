exports.getPublications = (req, res, next) => {
  res.render('publications', {
    pageTitle: 'Adam Retter Publications',
    path: '/publications',
  });
};
