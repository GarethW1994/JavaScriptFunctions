var getDay = function(day) {
  var dayInteger = day.getDay();
  var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var whichDay = Days[dayInteger];

  return whichDay;
};

const date = new Date('1994-06-11');
console.log(getDay(date));
