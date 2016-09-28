var isFromBellville = function(numberPlate){
  var Bellville = numberPlate.startsWith('CY');
  console.log("Is this person from Bellville - " + Bellville);
};

var isFromPaarl = function(numberPlate) {
  var Paarl = numberPlate.startsWith('CJ');
  console.log("Is this person from Paarl - " + Paarl);
};

var isFromCapeTown = function(numberPlate) {
  var CapeTown = numberPlate.startsWith('CA');
  console.log("Is this person from Cape Town - " + CapeTown);
};

var isFromGauteng = function(numberPlate) {
  var Gauteng = numberPlate.endsWith('GP');
  console.log("Is this person from Gauteng - " + Gauteng);
};

var isFromLimpopo = function(numberPlate) {
  var Limpopo = numberPlate.endsWith('L');
  console.log("Is this person from Limpopo - " + Limpopo);
};

isFromBellville('CY 123 123');
isFromPaarl('CJ 123 123');
isFromCapeTown('CA 123 123');
isFromGauteng('DT 123 45 GP');
isFromLimpopo('DTR 123 56 L');
