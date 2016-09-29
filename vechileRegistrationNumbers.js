var isFromBellville = function(numberPlate){
  var Bellville = numberPlate.startsWith('CY');
  return Bellville;
};

var isFromPaarl = function(numberPlate) {
  var Paarl = numberPlate.startsWith('CJ');
  return Paarl;
};

var isFromCapeTown = function(numberPlate) {
  var CapeTown = numberPlate.startsWith('CA');
  return CapeTown;
};

var isFromGauteng = function(numberPlate) {
  var Gauteng = numberPlate.endsWith('GP');
  return Gauteng;
};

var isFromLimpopo = function(numberPlate) {
  var Limpopo = numberPlate.endsWith('L');
  return Limpopo;
};

console.log(isFromBellville('CY 123 123'));
console.log(isFromPaarl('CJ 123 123'));
console.log(isFromCapeTown('CA 123 123'));
console.log(isFromGauteng('DT 123 45 GP'));
console.log(isFromLimpopo('DTR 123 56 L'));
