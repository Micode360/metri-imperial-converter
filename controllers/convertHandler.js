/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let num = input.replace(/[a-zA-Z]+/,"");

    if(num.includes('/')){
      var splitNum = num.split("");
      // console.log(splitNum.filter(element => typeof(element) === 'number'))
      if(splitNum.length > 3) return "invalid"
      if(splitNum.includes('.')) return "invalid"
      else{
        let result = splitNum[0]/splitNum[2];
        return result;
      }
     }else if(num == '') {
       let result = num = 1;
      return result ;
     }
    else {
      let result = num;
      return result;
    }
  };
  


  this.getUnit = function(input) {
    let unit = input.replace(/[0-9]\.*\/*[0-9]*\.*\/*[0-9]*\.*/,"");
    let result;
    result = unit;
     if(!result && result === "") return "invalid"
     if(result === 'l' || result === 'L') return result.toUpperCase();
      else{
        return result.toLowerCase();
      }
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    let unitAbrrevation = ['gal','L','mi','km','lbs','kg'];
    let expectFullName = ['L','gal','km','mi','kg','lbs'];

    unitAbrrevation.forEach((unit,index) => {
      if(unit === initUnit) result =  expectFullName[index];
      })  
       
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    var unitAbbrev = ["gal", "L", "mi", "km", "lbs", "kg"];
    var fullUnits = [ "gallons","liters","miles", "kilometers","pounds", "kilograms"];

    if (unitAbbrev.includes(unit)) result =  fullUnits[unitAbbrev.indexOf(unit)];
      
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let input = ['gal','L','mi','km','lbs','kg'];
    // let expect = ['L','gal','km','mi','kg','lbs'];

    let expect = [
      {unit:'L', value: galToL},
      {unit:'gal', value: galToL},
      {unit:'km', value:miToKm},
      {unit:'mi', value:miToKm},
      {unit:'kg', value: lbsToKg},
      {unit:'lbs', value: lbsToKg}
    ];

    input.find((unit,index) => {
      if(unit === initUnit){
        if(index % 2 === 0){
           result = initNum * expect[index].value;
        }else{
          result = initNum / expect[index].value;
        }
       }
    })    
    // if(typeof(result) === 'number') return result.toFixed(5);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
  
      result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  
    return result;
  };
  
}

module.exports = ConvertHandler;
