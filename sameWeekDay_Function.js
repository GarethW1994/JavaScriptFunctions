const dateOne = new Date('2010-04-01');
const dateTwo = new Date('2011-05-03');
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var sameWeekday = function(dateOne, dateTwo) {
    var getDayOne = dateOne.getDay();
    var getDayTwo = dateTwo.getDay();

    var weekDayOne = weekDays[getDayOne];
    var weekDayTwo = weekDays[getDayTwo];

    var checkDay = weekDayOne.includes('M') && weekDayTwo.includes('M');

    console.log('Is the two dates the same: ' + checkDay);
}

sameWeekday(dateOne, dateTwo);
