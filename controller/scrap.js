'use strict';

const Response = require('./response');
const request = require('request');
const cheerio = require('cheerio');
const config = require('../config/dbConfig');
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
    return Promise.resolve()
    .then(() => {
      //Logger.info("Receving booking obj"+ req.body);
        let con = if (config.use_env_variable) {
          con = mysql.createConnection(process.env[config.use_env_variable]);
        } else {
          con = mysql.createConnection(
            'host':config.host, 'user':config.username, 'password':config.password, 'database':config.database
          );
        }
        connection.connect((err) => {
           if(err)
            reject(err);
           else
            console.log("Db connection successfull");
        });
        resolve("data inserted");
        const url = 'https://medium.com/';
        request(url,(err,resp,body) => {
            if(err) {
              console.log(err);
              reject(err);
            }
            $ =  cheerio.load(body);
            links = $('a');
            $(links).each((i, link) => {
              console.log($(link).text() + ':\n  ' + $(link).attr('href'));
            });
        })
    })
    .then(() => {
      res.status(200).send(Response.response(200,"data inserted",true,"success"))
    })
    .catch((error) => {
      res.status(400).send(Response.response(400,error,false,'Internal Server Error'));
    });
  }
}