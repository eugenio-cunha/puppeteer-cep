'use strict';

const router = require('express').Router();

router.use('/', require('./cepRouter'));

module.exports = router;
