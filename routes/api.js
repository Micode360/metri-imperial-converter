/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      // let num = /[0-9]$/;
      // console.log(/[0-9]$/.test(input), input)
      // if(num.test(input) === true)res.send("invalid unit");
      // else{
        let initNum = convertHandler.getNum(input);
        let initUnit = convertHandler.getUnit(input);
        let returnNum = convertHandler.convert(initNum, initUnit);
        let returnUnit = convertHandler.getReturnUnit(initUnit);
        let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        
        if(initNum === "invalid number" && initUnit === "invalid unit") res.send("invalid number and unit")
        else if(initUnit === "invalid unit") res.send("invalid unit")
        else if(initNum === "invalid number") res.send("invalid number")
          else{
            res.json({
              initNum:initNum,
              initUnit:initUnit,
              returnNum:returnNum,
              returnUnit:returnUnit,
              string:toString
            })
          }
      // }
    });
    
};
