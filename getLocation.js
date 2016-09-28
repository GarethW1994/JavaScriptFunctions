var isFrom = function(regNumber, Location) {
  console.log('Registration Number: ' + regNumber);
  console.log('----------------------------------');

  var Paarl = regNumber.startsWith('CJ');
  var Bellville = regNumber.startsWith('CY');
  var CapeTown = regNumber.startsWith('CA');

//  var WesternCape = Location.startsWith('CJ');

//  var Natal = Location.startsWith('GP', 'L');

  console.log("Is the person from Paarl: " + Paarl);
//  console.log("Is the person from Bellville: " + Bellville);
//  console.log("Is the person from Cape Town: " + CapeTown);

//  console.log("Is it from Western Cape region: " + WesternCape);
  //console.log("Is it from the Natal region: " + Natal[0,1]);
};

isFrom('CJ 98912', 'CJ');
