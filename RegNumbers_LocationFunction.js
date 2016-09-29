
var countRegNumber = function(regNumber) {
  var splitString = regNumber.split(",");
  return splitString;
};

//countRegNumber(numberPlate);
console.log(countRegNumber("CA 182736, CY 523519, CJ 812328"));
console.log(countRegNumber("CA 42665, AA 12 RT GP"));
