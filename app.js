const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const pagesRoutes = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('602b09a5f183fa8248eeaf1a')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(pagesRoutes);

app.use(errorController.get404);

mongoose
  .connect(
  'mongodb+srv://steel-01:w5Z1RumGpuep8AEz@cluster0.zdpub.mongodb.net/steel-01?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Craig Steel',
          email: 'craig@craigsteel-design.com',
      });
      user.save();
    }
  });
  app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
