'use strict';

var express = require('express');
var controller = require('./poll.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/user/:userid', controller.indexUserPolls);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);
router.patch('/option/:id', auth.isAuthenticated(), controller.addOption);

module.exports = router;
