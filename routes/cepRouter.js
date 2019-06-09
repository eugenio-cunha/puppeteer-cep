'use strict';

const router = require('express').Router();
const { cepController } = require('../controllers');

router.get('/query/:address', cepController.query);

module.exports = router;
