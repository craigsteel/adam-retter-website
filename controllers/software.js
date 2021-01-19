exports.getSoftware = (req, res, next) => {
  res.render('software', {
    pageTitle: 'Adam Retter Software',
    path: '/software',
  });
};
