'use strict';

const Response = require('./response');

class SubtractionController {
  /**
   * 
   * 
   * @static
   * @param {any} req 
   * @param {any} res 
   * @returns 
   * @memberof SubtractionController
   */
  static subtractNumbers(req, res) {
    return new Promise((resolve,reject) => {
      let subtractObj = req.body.data;
      let questionCount = subtractObj.questionCount;
      let minuendDigits = subtractObj.minuend;
      let subtrahendDigits = subtractObj.subtrahend;
      let hasBorrowing = subtractObj.hasBorrowing;
      let responseObj={};
      if (subtrahendDigits > minuendDigits) {
        let err = 'Subtraction Not Possible , second number cannot be greater than first number';
        responseObj.status = 400;
        responseObj.message = err;
        responseObj.success = false;
        responseObj.result = '';
      } else {
        let answerObj = [];
        for (let itr = 0; itr < questionCount; itr++) {
          let questionObj = {};
          let minuendNumber;
          let subtrahendNumber;
          let minuendNumberString;
          let correctAns;
          let optionsArray;
          let subtrahendNumberString;
          if (hasBorrowing == true) {
            if (minuendDigits == subtrahendDigits) {
              let randDom = SubtractionController.generateRandom(1, 6);
              minuendNumber = randDom.toString();
              subtrahendNumber = (randDom + 1).toString();
              minuendNumberString = minuendNumber;
              subtrahendNumberString = subtrahendNumber;
              for (let i = 1; i < minuendDigits - 1; i++) {
                minuendNumberString = minuendNumber + minuendNumberString;
                subtrahendNumberString = subtrahendNumber + subtrahendNumberString;
              }
              minuendNumberString = subtrahendNumber + minuendNumberString;
              subtrahendNumberString = minuendNumber + subtrahendNumberString;
              correctAns = parseInt(minuendNumberString) - parseInt(subtrahendNumberString);
              optionsArray = [correctAns, correctAns - 1, correctAns - 2, correctAns - 3];
            } else {
              let randDom = SubtractionController.generateRandom(1, 9);
              minuendNumber = randDom.toString();
              minuendNumberString = minuendNumber;
              subtrahendNumberString = minuendNumber;
              subtrahendNumber = (randDom + 1).toString();
              for (let i = 1; i < minuendDigits - 1; i++) {
                minuendNumberString = minuendNumber + minuendNumberString;
              }

              for (let i = 1; i < subtrahendDigits - 1; i++) {
                subtrahendNumberString = subtrahendNumber + subtrahendNumberString;
              }

              minuendNumberString = subtrahendNumber + minuendNumberString;
              subtrahendNumberString = minuendNumber + subtrahendNumberString;
              correctAns = parseInt(minuendNumberString) - parseInt(subtrahendNumberString);
              optionsArray = [correctAns, correctAns - 1, correctAns - 2, correctAns - 3];
            }
          } else {
            if (minuendDigits == subtrahendDigits) {
              let randDom = SubtractionController.generateRandom(1, 6);
              minuendNumber = randDom.toString();
              minuendNumberString = minuendNumber;
              subtrahendNumberString = minuendNumber;

              for (let i = 1; i < minuendDigits - 1; i++) {
                minuendNumberString = minuendNumber + minuendNumberString;
                subtrahendNumberString = minuendNumber + subtrahendNumberString;
              }
              minuendNumberString = minuendNumber + minuendNumberString;
              subtrahendNumberString = minuendNumber + subtrahendNumberString;
              correctAns = parseInt(minuendNumberString) - parseInt(subtrahendNumberString);
              optionsArray = [correctAns, correctAns + 1, correctAns + 2, correctAns + 3];
            } else {
              let randDom = SubtractionController.generateRandom(1, 6);
              minuendNumber = randDom.toString();
              minuendNumberString = minuendNumber;
              subtrahendNumberString = minuendNumber;
              for (let i = 1; i < minuendDigits - 1; i++) {
                minuendNumberString = minuendNumber + minuendNumberString;
              }

              for (let i = 1; i < subtrahendDigits - 1; i++) {
                subtrahendNumberString = minuendNumber + subtrahendNumberString;
              }

              minuendNumberString = minuendNumber + minuendNumberString;
              subtrahendNumberString = minuendNumber + subtrahendNumberString;
              correctAns = parseInt(minuendNumberString) - parseInt(subtrahendNumberString);
              optionsArray = [correctAns, correctAns + 1, correctAns + 2, correctAns + 3];
            }
          }
          
          questionObj = {
            correctAns: correctAns,
            minuendNumber: minuendNumberString,
            subtractNumber: subtrahendNumberString,
            options: optionsArray
          }
          answerObj.push(questionObj);
        }
        responseObj.status = 200;
        responseObj.message = 'Success Fully Executed';
        responseObj.success = true;
        responseObj.result = answerObj;
      }
      resolve(responseObj);
    }).then((responseObj) => {
        res.status(responseObj.status).send(Response.response(responseObj.status,responseObj.message,responseObj.success,responseObj.result));
    }).catch((err) => {
      res.status(503).send(Response.response(503, 'null', false, ''));
    })
  }

  static generateRandom(min,max) {
    return Math.floor(Math.random() * (max - min) + min); 
  }

}


module.exports = SubtractionController