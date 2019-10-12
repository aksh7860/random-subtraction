"use strict";

const config = {
  "DEVELOPMENT": {
    "database": "scrapWebsite",
    "user": "root",
    "password": "redhat",
    "host": "localhost"
  }
};

function load() {
  const env = process.env.NODE_ENV || 'development';
  const loadedEnvConfig = config[env.toUpperCase()] || {};
  return loadedFullConfig;
}

module.exports = load();