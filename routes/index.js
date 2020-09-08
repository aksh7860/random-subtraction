'use strict';
//const Logger = require('../lib/logger');
const express = require('express');
const router = express.Router();
const SubtractionController = require('../controllers/subtract');

router.post('/api/subractNumbers', SubtractionController.subtractNumbers);

module.exports = router;