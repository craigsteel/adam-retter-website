const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sourceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  gitHubLink: {
    type: String,
    required: false
  },
  gitHubIcon: {
    type: String,
    required: false
  },
  gitHubLinkText: {
    type: String,
    required: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Source', sourceSchema);
