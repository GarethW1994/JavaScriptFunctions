var dayToday = function() {
  var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var todayDay = new Date();
  var date = todayDay.getDay();
  var today = weekDays[date];

  return today;
}

console.log(dayToday());
