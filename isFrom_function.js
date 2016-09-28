
var isFrom = function(regNum, location) {
  var isFromPaarl = location.startsWith('CJ');
  var isFromBellville = location.startsWith('CY');
  var isFromCapeTown = location.startsWith('CA');

  console.log('From Paarl: ' + isFromPaarl);
  console.log('From Bellville: ' + isFromBellville);
  console.log('From Cape Town: ' + isFromCapeTown);
}

isFrom('CJ 98912', 'CJ');
