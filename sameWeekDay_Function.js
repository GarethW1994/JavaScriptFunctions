var sameWeekday = function(dateOne, dateTwo) {
    var getDayOne = dateOne.getDay();
    var getDayTwo = dateTwo.getDay();

    var weekDayOne = weekDays[getDayOne];
    var weekDayTwo = weekDays[getDayTwo];

    var checkDay = weekDayOne == weekDayTwo;


    return checkDay;
}

var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dateOne = new Date('2016-09-22');
const dateTwo = new Date('2016-09-29');
const dateThree = new Date('2010-11-07');
const dateFour = new Date('2011-09-13');

console.log(sameWeekday(dateOne, dateTwo));
console.log(sameWeekday(dateThree, dateFour));
