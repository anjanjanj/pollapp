'use strict';

var express = require('express');
var controller = require('./poll.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

// TODO: remove unused routes

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/user/:userid', controller.indexUserPolls);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
