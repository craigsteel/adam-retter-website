exports.getContact = (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Adam Retter Contacts',
    path: '/contact',
  });
};
