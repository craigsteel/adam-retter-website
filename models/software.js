const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const softwareSchema = new Schema({
  softwareLogo: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  SoftwareLink: {
    type: String,
    required: false
  },
  softwareLinkText: {
    type: String,
    required: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Software', softwareSchema);
