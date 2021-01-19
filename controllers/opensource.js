exports.getOpensource = (req, res, next) => {
  res.render('opensource', {
    pageTitle: 'Adam Retter Open Source',
    path: '/opensource',
  });
};
