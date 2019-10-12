'use strict';
//require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/index');

const port = process.env.PORT || 3000;

app.listen(port, function(){
  Logger.info(`Server is listening on port ${port}`);
});

app.use(routes);

module.exports = app;
