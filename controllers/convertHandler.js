/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function (input) {

    let num = input.replace(/[a-zA-Z]+/, "");


    if (num.includes('/') && num.includes('.')) {
      var splitNum = num.split('/'), split = num.split('');;

      //More than one '/'
      const miniArr = [];
      split.filter(elem => {
        if (elem === '/') miniArr.push(elem);
      });
      if (miniArr.length > 1) return "invalid number"
      else {
        let result = splitNum[0] / splitNum[1];
        return Number(result);
      }
    } else if (num.includes('/')) {
      var splitII = num.split('');

      //More than one '/'
      const miniArrII = [];
      splitII.filter(elem => {
        if (elem === '/') miniArrII.push(elem);
      });
      if (miniArrII.length > 1) return "invalid number"
      else {
        let result = splitII[0] / splitII[2];
        return Number(result);
      }
    } else if (num == '') {
      let result = num = 1;
      return Number(result);
    }
    else {
      let result = num;
      return Number(result);
    }
  };




  this.getUnit = function (input) {
    let unit = input.replace(/[0-9]\.*\/*[0-9]*\.*\/*[0-9]*\.*\/*/, "");
    let unitAbrrevation = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    let result;
    result = unit;

    if (!unitAbrrevation.includes(unit)) return "invalid unit";
    else if (result === 'l' || result === 'L') return result.toUpperCase();
    else {
      return result.toLowerCase();
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    let unitAbrrevation = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
    let expectFullName = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];

    unitAbrrevation.forEach((unit, index) => {
      if (unit === initUnit) result = expectFullName[index];
    })

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    var unitAbbrev = ["gal", "L", "mi", "km", "lbs", "kg"];
    var fullUnits = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"];

    if (unitAbbrev.includes(unit)) result = fullUnits[unitAbbrev.indexOf(unit)];

    return result;
  };

  this.convert = function (initNum, initUnit) {
    let result;

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];


    let expect = [
      { unit: 'L', value: galToL },
      { unit: 'gal', value: galToL },
      { unit: 'km', value: miToKm },
      { unit: 'mi', value: miToKm },
      { unit: 'kg', value: lbsToKg },
      { unit: 'lbs', value: lbsToKg }
    ];

    input.find((unit, index) => {
      if (unit === initUnit) {
        if (index % 2 === 0) {
          result = initNum * expect[index].value;
        } else {
          result = initNum / expect[index].value;
        }
      }
    })
    if (typeof (result) === 'number') return Number(result.toFixed(5));

  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };

}

module.exports = ConvertHandler;



