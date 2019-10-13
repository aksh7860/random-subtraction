'use strict';
//const Logger = require('../lib/logger');
const express = require('express');
const router = express.Router();
const ScrapController = require('../controllers/scrap');

router.get('/api/scrapData',ScrapController.scrap);

module.exports = router;