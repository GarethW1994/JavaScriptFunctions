const dateOne = new Date('2016-09-22');
const dateTwo = new Date('2016-09-29');
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var sameWeekday = function(dateOne, dateTwo) {
    var getDayOne = dateOne.getDay();
    var getDayTwo = dateTwo.getDay();

    var weekDayOne = weekDays[getDayOne];
    var weekDayTwo = weekDays[getDayTwo];

    var checkDay = weekDayOne == weekDayTwo;


    console.log('Is the two dates the same:', checkDay);
}

sameWeekday(dateOne, dateTwo);
