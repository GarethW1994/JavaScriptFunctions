var numberPlate = ["CA 182736", "CY 523519", "CJ 812328"];

countRegNumber = function(regNumber) {
  var splitString = regNumber[0].split(" ", 6);
  var countNum = splitString[0].length;
  console.log(splitString);
  console.log(countNum);
};

countRegNumber(numberPlate)
