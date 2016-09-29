var isFrom = function(regNum, location) {
  var isFromPaarl = location.startsWith('CJ');
  var isFromBellville = location.startsWith('CY');
  var isFromCapeTown = location.startsWith('CA');

  return isFromPaarl;
  return isFromBellville;
  return isFromCapeTown;
}

console.log('From Paarl: ' + isFrom('CJ 98912', 'CJ'));
console.log('From Bellville: ' + isFrom('CF 98912 GP', 'CY'));
console.log('From Cape Town: ' + isFrom('CA 98912', 'CA'));
