'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  title: String,
  options: {},
  author: String,
  alreadyVoted: []
});


PollSchema.methods.checkVoted = function(userId) {
  return this.alreadyVoted.indexOf(userId) > -1;
};

module.exports = mongoose.model('Poll', PollSchema);
