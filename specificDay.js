var getDay = function(day) {
  var specificDay = day.getDay();
  var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var whichDay = Days[specificDay];

  return whichDay;
};

const date = new Date('1994-06-11');
console.log(getDay(date));
