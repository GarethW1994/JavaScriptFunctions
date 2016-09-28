var dayToday = function() {
  var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var todayDay = new Date();
  var date = todayDay.getDay();
  var today = weekDays[date];
  console.log('Today is ' + today);
}

dayToday();
