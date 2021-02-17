const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const presentationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  firstIcon: {
    type: String,
    required: false
  },
  firstLink: {
    type: String,
    required: false
  },
  firstLinkText: {
    type: String,
    required: false
  },
  secondIcon: {
    type: String,
    required: false
  },
  secondLink: {
    type: String,
    required: false
  },
  secondLinkText: {
    type: String,
    required: false
  },
  thirdIcon: {
    type: String,
    required: false
  },
  thirdLink: {
    type: String,
    required: false
  },
  thirdLinkText: {
    type: String,
    required: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Presentation', presentationSchema);
