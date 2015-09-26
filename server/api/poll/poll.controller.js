'use strict';

var _ = require('lodash');
var Poll = require('./poll.model');

// *** TODO: add authentication for editing/deleting

// Get list of polls
exports.index = function(req, res) {
  Poll.find(function(err, polls) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(polls);
  });
};

// Show all polls for one user
exports.indexUserPolls = function(req, res) {
  Poll.find(function(err, polls) {
    if (err) {
      return handleError(res, err);
    }
    if (!polls) {
      return res.status(404).send('Not Found');
    }
    return res.status(200).json(
      polls.filter(function(poll) {
        return poll.author === req.params.userid;
      })
    );
  });
};

// Get a single poll
exports.show = function(req, res) {
  Poll.findById(req.params.id, function(err, poll) {
    if (err) {
      return handleError(res, err);
    }
    if (!poll) {
      return res.status(404).send('Not Found');
    }
    return res.json(poll);
  });
};

// Creates a new poll in the DB.
exports.create = function(req, res) {
  // is this needed? already checked in index.js
  if (req.user && req.user._id) {
    req.body.author = req.user._id;
    Poll.create(req.body, function(err, poll) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(201).json(poll);
    });
  } else {
    return res.status(500).send('Not logged in!');
  }
};

// Updates an existing poll in the DB.
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Poll.findById(req.params.id, function(err, poll) {
    if (err) {
      return handleError(res, err);
    }
    if (!poll) {
      return res.status(404).send('Not Found');
    }
    var updated = _.extend(poll, req.body);
    // changed _.merge to _.extend as per https://github.com/clnhll/guidetobasejumps
    updated.save(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(200).json(poll);
    });
  });
};

// Deletes a poll from the DB.
exports.destroy = function(req, res) {
  Poll.findById(req.params.id, function(err, poll) {
    if (err) {
      return handleError(res, err);
    }
    if (!poll) {
      return res.status(404).send('Not Found');
    }
    if ((!req.user) || (poll.author !== req.user._id)) {
      return res.status(403).send('Permission Denied');
    }
    poll.remove(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
