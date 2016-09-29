var isTuesday = function(day) {
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var todaysDate = date.getDay();
  var Today = weekDays[todaysDate];

  var checkDay = Today === day;

  return checkDay;
}

const date = new Date();

console.log(isTuesday('Tuesday'));
console.log(isTuesday('Monday'));
console.log(isTuesday('Thursday'));
