var regCheck = function(regNum, location) {
  var isGP = regNum.includes(location);
  console.log('Is this registration number for GP: ' + isGP);
}

regCheck('DV 23 NB GP', 'GP');
