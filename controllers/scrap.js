'use strict';

const Response = require('./response');
const request = require('request');
const cheerio = require('cheerio');
const config = require('../config/dbConfig');
const Database = require('./dbConnection');
const mysql = require('mysql');

class ScrapController {
  /**
   * 
   * 
   * @static
   * @param {any} req 
   * @param {any} res 
   * @returns 
   * @memberof ScrapController
   */
  static scrap(req, res) {
    let ans = [];
    return new Promise((resolve,reject) => {
      const url = 'https://medium.com/';
      request(url,(err,resp,body) => {
          if(err) {
            reject(err);
          }
          const $ =  cheerio.load(body);
          const links = $('a');

          $(links).each((i, link) => {
            //console.log($(link).text() + ':\n  ' + $(link).attr('href'));
            ans.push($(link).attr('href'));
          });
          resolve(ans);
      })
    }).then((urls) => {
      let database = new Database({
              user:config.user, password:config.password, database:config.database
            });
        return Promise.map(urls,(url) => {
          return database.query("Select * from mediumData")
        });
    }).then((rows) => {
        res.status(200).send(Response.response(200,JSON.stringify(ans),true,'Success'));
    }).catch((error) => {
        res.status(500).send(Response.response(500,error,true,'Failure'));
    })

      //return Promise.resolve(() => {
        /*let con ;
        if (config.use_env_variable) {
          con = mysql.createConnection(process.env[config.use_env_variable]);
        } else {
          con = mysql.createConnection({
              user:config.user, password:config.password, database:config.database
            }
          );
        }
        let dataNew = "Connection success";
        con.connect((err) => {
            if(err) {
              //console.log(err);
              throw err;
            }
        });*/
      //})
  }

  static fetchParamsFromUrl(url) {

    // get query string from url (optional) or window
    let queryString = url.split('?')[1];

    // we'll store the parameters here
    let obj = {};

    // if query string exists
    if (queryString) {

      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];

      // split our query string into its component parts
      let arr = queryString.split('&');

      for (let i = 0; i < arr.length; i++) {
        // separate the keys and the values
        let a = arr[i].split('=');

        // set parameter name and value (use 'true' if empty)
        let paramName = a[0];
        let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

        // if the paramName ends with square brackets, e.g. colors[] or colors[2]
        if (paramName.match(/\[(\d+)?\]$/)) {

          // create key if it doesn't exist
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];

          // if it's an indexed array e.g. colors[2]
          if (paramName.match(/\[\d+\]$/)) {
            // get the index value and add the entry at the appropriate position
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            // otherwise add the value to the end of the array
            obj[key].push(paramValue);
          }
        } else {
          // we're dealing with a string
          if (!obj[paramName]) {
            // if it doesn't exist, create property
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            // if property does exist and it's a string, convert it to an array
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            // otherwise add the property
            obj[paramName].push(paramValue);
          }
        }
      }
    }

    return obj;
  }
}


module.exports = ScrapController