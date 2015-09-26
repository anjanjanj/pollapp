'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  title: String,
  options: {},
  author: String,
  alreadyVoted: []
});

module.exports = mongoose.model('Poll', PollSchema);
